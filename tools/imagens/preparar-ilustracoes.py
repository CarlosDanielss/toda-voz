"""
Prepara as ilustrações do site do Toda Voz.

Para cada imagem original em assets/ilustracoes/originais/, este script:
1. reduz para o tamanho usado no site;
2. se a imagem estiver marcada com remover_fundo=True: remove o fundo branco externo
   (só o que está ligado às bordas; os brancos de dentro do desenho ficam) e suaviza
   a borda do recorte;
3. salva um WebP leve em apps/site/public/ilustracoes/ e, só para imagens recortadas,
   uma matriz PNG transparente em assets/ilustracoes/.

A ilustração do topo é pedida com fundo próprio (ver context/identidade-visual.md),
então não precisa de recorte. A remoção de fundo fica para imagens de fundo branco.

Uso (na raiz do repositório):
    python3 -I tools/imagens/preparar-ilustracoes.py

Precisa só do Pillow (com suporte a WebP).
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

RAIZ = Path(__file__).resolve().parents[2]
ORIGINAIS = RAIZ / "assets" / "ilustracoes" / "originais"
MATRIZES = RAIZ / "assets" / "ilustracoes"
SITE = RAIZ / "apps" / "site" / "public" / "ilustracoes"

# nome de saída -> (arquivo original, largura final em px, remover fundo branco?)
IMAGENS = {
    "topo": ("topo-original.jpg", 1200, False),  # computador e telas grandes
    "topo-800": ("topo-original.jpg", 800, False),  # celular
}

TOLERANCIA = 28  # quão "quase branco" ainda conta como fundo (0–255)
MARCADOR = (255, 0, 255)  # cor usada para marcar o fundo durante o preenchimento


def remover_fundo(img: Image.Image) -> Image.Image:
    rgb = img.convert("RGB")
    largura, altura = rgb.size

    # Preenche o fundo a partir das bordas (cantos e pontos ao longo de cada borda).
    marcado = rgb.copy()
    passos = 24
    sementes = set()
    for i in range(passos + 1):
        x = round(i * (largura - 1) / passos)
        y = round(i * (altura - 1) / passos)
        sementes.update({(x, 0), (x, altura - 1), (0, y), (largura - 1, y)})
    for semente in sementes:
        r, g, b = marcado.getpixel(semente)
        if min(r, g, b) >= 255 - TOLERANCIA:  # só começa em pixels de fundo
            ImageDraw.floodfill(marcado, semente, MARCADOR, thresh=TOLERANCIA)

    # Máscara: 0 no fundo, 255 no desenho.
    fundo = Image.new("L", rgb.size, 0)
    px_marcado = marcado.load()
    px_fundo = fundo.load()
    for y in range(altura):
        for x in range(largura):
            if px_marcado[x, y] == MARCADOR:
                px_fundo[x, y] = 255
    desenho = fundo.point(lambda v: 255 - v)

    # Borda: perto do fundo, a transparência acompanha o quanto o pixel é claro
    # (pixels quase brancos da borda viram semitransparentes, sem halo branco).
    perto_do_fundo = fundo.filter(ImageFilter.MaxFilter(5))
    alfa = desenho.copy()
    px_alfa = alfa.load()
    px_perto = perto_do_fundo.load()
    px_rgb = rgb.load()
    for y in range(altura):
        for x in range(largura):
            if px_alfa[x, y] and px_perto[x, y]:
                escuro = 255 - min(px_rgb[x, y])
                px_alfa[x, y] = min(255, escuro * 4)
    alfa = alfa.filter(ImageFilter.GaussianBlur(0.6))

    resultado = rgb.convert("RGBA")
    resultado.putalpha(alfa)
    return resultado.crop(resultado.getbbox())  # corta a margem vazia


def main() -> None:
    SITE.mkdir(parents=True, exist_ok=True)
    for nome, (arquivo, largura, recortar) in IMAGENS.items():
        caminho = ORIGINAIS / arquivo
        if not caminho.exists():
            print(f"{nome}: original não encontrado ({caminho}), pulando.")
            continue
        original = Image.open(caminho)
        altura = round(original.height * largura / original.width)
        reduzida = original.resize((largura, altura), Image.LANCZOS)
        pronta = remover_fundo(reduzida) if recortar else reduzida.convert("RGB")

        web = SITE / f"{nome}.webp"
        pronta.save(web, "WEBP", quality=82, method=6)
        info = f"{nome}: {pronta.size[0]}x{pronta.size[1]} | webp {web.stat().st_size // 1024} KB"
        if recortar:
            # Só imagens recortadas ganham uma matriz PNG transparente; as outras usam o original.
            matriz = MATRIZES / f"{nome}.png"
            pronta.save(matriz, optimize=True)
            info += f" | png {matriz.stat().st_size // 1024} KB"
        print(info)


if __name__ == "__main__":
    main()
