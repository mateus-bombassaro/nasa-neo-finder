# NASA Near Eath Objects Finder

Esse projeto trata-se de uma aplicação SPA desenvolvida em React que possui como objetivo a exibição de NEOs(Near Earth Objects). Esses objetos são consultados em uma [API](https://api.nasa.gov/) que considera um filtro de período para a busca dos dados.

A configuração inicial do projeto foi feita utilizando a ferramenta Vite.js. A escolha deu-se pela recomendação feita na documentação do [TailwindCSS](https://tailwindcss.com/), framework CSS usado na composição de estilos da aplicação.

Além disso, algumas outras bibliotecas foram usadas neste projeto, como o `moment` para manipuação de datas, `axios` para requisições http, `clsx` para a aplicação de classes condicionais em componentes, `react-router-dom` para gerenciamento de rotas e a biblioteca `jest` para o desenvolvimento de testes unitários.

## Organização do Projeto

A pasta _src/_ recebeu as seguintes ramificações para distribuir o código dessa aplicação:

- **api**: módulo responsável pela conexão com a API da qual os dados a serem exibidos são resgatados.
- **components**: módulo no qual foram implementados todos os componentes de tela que compõem o layout da aplicação.
- **routes**: módulo no qual são implementadas as páginas da aplicação, cada página possui uma rota. Como trata-se de uma aplicação simples, neste caso possuímos apenas uma única rota que renderiza a _Home_.
- **styles**: nesse módulo é declarado o css de uso global da aplicação, neste caso o tailwind. Seu uso é definifido por uma importação no arquivo _index.html_

Todos os arquivos de teste acompanham seus respectivos componentes e serviços, seguem a mesma nomenclatura, porém com o sufixo _.test_

## Para rodar o projeto:

```
npm i
npm run dev
```

## Para rodar os testes:

`npm run test`

## Para acessar na WEB:
[NASA NEO Finder React APP](https://nasa-neo-finder.surge.sh/)
