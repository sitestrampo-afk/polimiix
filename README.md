# Polimix — Concreto e cimento

Site em HTML, CSS e JavaScript nativos, sem framework, gerenciador de pacotes ou etapa de compilação. Mantém o design e todos os recursos da versão anterior.

## Abrir o site

Abra `index.html` diretamente no navegador. Para publicar, envie `index.html` e a pasta `assets` para uma hospedagem de sites estáticos. Os caminhos são relativos e também funcionam em subpastas.

## Arquivos

- `index.html`: todo o conteúdo e a estrutura do site, editáveis diretamente em HTML.
- `assets/css/style.css`: estilos e layout responsivo.
- `assets/js/script.js`: menu, cards, janelas de atendimento, formulários e calculadora.
- `assets/js/config.js`: configuração do contato.
- `assets/images/`: fotografias e favicon locais.

## Configurar o atendimento

Edite `assets/js/config.js` e preencha `whatsapp` com o número real, incluindo código do país e DDD, somente dígitos. Após a revisão do formulário, o botão abre a conversa no WhatsApp com a mensagem preenchida. Sem número configurado, o site permite baixar a solicitação e informa que o canal está em configuração. Nenhuma solicitação é apresentada como enviada automaticamente.

O conteúdo permanece visível mesmo sem JavaScript. O JavaScript adiciona as interações e a calculadora. Não há backend nem envio de formulários a um servidor. O site usa Google Fonts, com fontes alternativas locais; fotografias do Unsplash e ícones SVG estão incluídos no projeto. A licença dos ícones Lucide está em `assets/lucide-LICENSE.txt`.

A calculadora usa comprimento × largura × espessura em metros, para peças retangulares, sem margem de perdas. O volume final e as especificações devem ser confirmados pelo responsável técnico.
