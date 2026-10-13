# Inventário de assets

Originais brutos (como baixados do CDN do Instagram, sem recompressão) em `/assets-source/instagram/` — nome = código do post + nº do slide. Vídeos (Reels) também ficam lá, fora do build.
Versões usadas no site em `/public/images/spapaulamelo/`.

## ARQUIVO: hero-paula-melo.png
ORIGEM: Instagram — post DYw_fjdRIOW (Dia do Massoterapeuta), 1600x2133
TIPO: foto da profissional, recorte com fundo removido (rembg isnet)
CONTEÚDO: Paula de blusa azul, mãos na cintura, parede branca
ORIENTAÇÃO: vertical (recorte 1485x1708)
QUALIDADE: alta
USO RECOMENDADO: Hero
STATUS: em uso
CONFIANÇA DE QUE É OFICIAL: alta

## ARQUIVO: paula-melo-retrato-maos.png
ORIGEM: Instagram — post DKFimF-upTG ("mãos que transformam vidas")
TIPO: recorte com fundo removido · CONTEÚDO: Paula de blazer nude mostrando as mãos
ORIENTAÇÃO: vertical · QUALIDADE: boa (1096px origem) · USO: seção A Paula · STATUS: em uso · CONFIANÇA: alta

## ARQUIVO: paula-melo-no-spa.jpg
ORIGEM: Instagram — carrossel DdrNa2dEW3d (Spa da Noiva), slide 2 · CONTEÚDO: Paula no spa com toalhas bordadas
ORIENTAÇÃO: vertical 1080x1440 · USO: foto da seção O método · STATUS: em uso · CONFIANÇA: alta

## ARQUIVO: detalhe-toalha-bordada.jpg
ORIGEM: DdrNa2dEW3d slide 4 · CONTEÚDO: toalha bordada "Paula Melo · Massoterapeuta · Método Renata França"
USO: fundo do banner "Não sabe qual massagem" · STATUS: em uso · CONFIANÇA: alta

## ARQUIVO: tratamento-*.jpg (8 cards)
- miracle-touch — "depois" do antes/depois DZGYgOQRE0M (real)
- drenagem — "depois" do antes/depois DRQa5e7kYbU (real)
- miracle-face — frame do Reel DdrLiEBxUlX (Paula em atendimento facial, real)
- liberacao-miofascial — arte Dd61aEiR3qL, recorte sem texto (Paula com instrumento; real, arte pode ter tratamento de IA na composição)
- pedras-quentes — arte DPwP_UoEbxT, recorte sem texto · ORIGEM: publicada pelo perfil, provável banco de imagens
- ventosaterapia — arte DdUOHJ3xDEH, recorte sem texto · ORIGEM: publicada pelo perfil, provável banco de imagens
- pos-operatorio — detalhe da toalha bordada (DdrNa2dEW3d slide 4)
- spa-da-noiva — DdrNa2dEW3d slide 3 (Paula com noiva e madrinhas, real)

## ARQUIVO: momento-*.jpg (Experiência)
- boas-vindas — DdrNa2dEW3d slide 5 (Paula segurando toalha da marca)
- atendimento — frame do Reel DdrLiEBxUlX (atendimento facial)
- produtos-renata-franca — DNRU2PmOqBK (Paula com cremes Renata França, certificados ao fundo)

## ARQUIVO: certificados-metodo-renata-franca.jpg
ORIGEM: arte DcdzQYyEVW1 slide 3 — recorte da foto da parede de certificados · USO: Técnica e cuidado · CONFIANÇA: alta

## ARQUIVO: resultado-*.jpg (antes em cima / depois embaixo, metades exatas)
- cintura — DeMkf_HRP0F (rótulos "Antes/Depois" queimados removidos por recorte)
- abdomen — DRQa5e7kYbU (margens brancas removidas)
- modeladora — DZGYgOQRE0M (filete divisor removido)
- abdomen2 — DRnAd5gkfAo
- lateral — DbI1WpzR-e- (preparado, não usado)
Todos fotos reais publicadas pelo perfil; marca d'água PM mantida.

## ARQUIVO: ambiente-pedras-quentes.jpg
ORIGEM: arte DPwP_UoEbxT, faixa inferior · USO: fundo do CTA final (sob overlay escuro) · ORIGEM provável banco de imagens publicada pelo perfil

## ARQUIVO: logo-spa-paula-melo.png / -claro.png
ORIGEM: recriado tipograficamente (Cormorant Garamond) a partir do logo do perfil — não há arquivo vetorial oficial. Substituir pelo original quando a cliente enviar.

## Descartados
- Frames do Reel DRNkQtAETjk (tour do espaço de Copacabana): legenda de story queimada no meio do quadro
- Reel DWmaGkqEZYR (Paula falando): 360p e legendas queimadas
- Retrato de blazer branco (DcdzQYyEVW1 slide 4): cortado pela arte na lateral
- Posts DJchqmlyq8l, DTTDAwrkbyT, DOoniwXkY3T, DSOXTSJEfMI: mídia não carregou deslogado (só miniatura 640px)

# ASSETS SELECIONADOS

HERO:
- hero-paula-melo.png

SOBRE:
- paula-melo-retrato-maos.png, paula-melo-no-spa.jpg

SERVIÇOS:
- tratamento-*.jpg (8)

RESULTADOS:
- resultado-cintura, resultado-abdomen, resultado-modeladora, resultado-abdomen2

ESPAÇO:
- detalhe-toalha-bordada.jpg, momento-*.jpg, certificados-metodo-renata-franca.jpg

VÍDEO:
- nenhum no site (Reels guardados em /assets-source como referência)

OUTROS:
- logo recriado, favicon PM (src/app/icon.svg)


# REVISÃO DE ARTE (10/10/2026, 2ª rodada)
- filosofia-diptico.jpg: [spa pronto DdrNa2dEW3d_2 | bordado com a mão DdrNa2dEW3d_4], 16:9
- tratamento-drenagem.jpg: mãos no abdômen (post DJchqmlyq8l, slide 1; arte de banco, marca PM)
- tratamento-pos-operatorio.jpg: Paula (post DJchqmlyq8l, slide 4) — texto da arte removido pelo recorte
- banner-ventosas.jpg: faixa limpa da arte DdUOHJ3xDEH (sem logo)
- paula-melo-cta.png: busto do recorte do hero, para o CTA final
- Removidos: ambiente-pedras-quentes, detalhe-toalha-bordada, momento-atendimento, resultado-lateral (sem uso)
- Posts em vídeo (DZMEpt1EbVY, DSK2Js4kc8_, DTTDAwrkbyT…) não entregam imagem estática utilizável
