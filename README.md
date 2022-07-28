# Desafio ChatBot - Stone

O Bot foi desenvolvido na plataforma **Blip**, e utiliza o **DialogFlow** como provedor de IA. É um Bot hibrido onde possui menu baseado em regras mas também reconhece 4 intenções em _todos inputs abertos_, que direciona para o fluxo correspondente. Além disso o bot consome uma API intermediária que faz integração com a API da **Stone**.

- Bot no Telegram: https://t.me/TonStoneBot
- Bot Web: https://guilherme-de-moura-neto-8d35t.chat.blip.ai/?appKey=dG9uNjpkNTY3NGFiOS1lMGFlLTQ2NTYtYTA5ZS03MzRlYzBkM2MyZjc=

## Artefatos do chatbot:

- Primeiro crie uma conta gratuita no **Blip** https://portal.blip.ai
- Em seguida você deve criar um novo bot do zero apenas para poder importar esse meu artefato: [tonBlip.json](https://github.com/Guilheeeerme/ton-stone/blob/main/tonBlip.json)
  - [Tutorial de como importar esse artefato no Blip](https://help.blip.ai/hc/pt-br/articles/4474433224087-Como-importar-o-fluxo-de-um-bot-no-Builder#:~:text=Clique%20no%20bot%C3%A3o%20Configura%C3%A7%C3%B5es%20no%20menu%20lateral%20esquerdo,em%20Publicar%20fluxo%20para%20testar%20seu%20novo%20bot.)
- Artefato com as intenções para ser importado no **DiaglogFlow**: [TonStoneBot.zip](https://github.com/Guilheeeerme/ton-stone/blob/main/TonStoneBot.zip)

## Intenções:

Foram criadas 4 intenções, com confiabilidade configurada para 40%, são elas:

    - Conhecer planos e maquininhas
    - Saber preço
    - Prazo de entrega
    - Encerrar

Para as intenções **Saber preço** e **Prazo de entrega**, o bot valida se o usuário já escolheu um plano antes de direcionar para o fluxo correspondente:

- Caso ainda não tenha escolhido um plano, o bot irá mostrar uma mensagem pedindo para primeiro escolher e vai direcionar para o fluxo de escolher plano.
- Caso tenha escolhido um plano, mas ainda não escolheu um modelo, o bot irá mostrar uma mensagem pedindo para primeiro escolher e vai direcionar para o fluxo de escolher modelo.

## Frases do usuário não compreendidas:

Nos menus de **Escolher plano** e **Escolher modelo**, além da IA habilitada, caso o usuário envie um input inesperado que também não seja identificado pela IA, o bot vai direcionar para um fluxo com mensagem de erro para primeira tentativa e retornar para o menu anterior correspondente, dando assim mais uma tentativa ao usuário, caso ele digite uma opção inválida novamente o bot vai direcionar para uma mensagem de erro padrão e encerrar a sessão.
