# Lista de Tarefas

Aplicação web desenvolvida com Angular para gerenciar tarefas do dia a dia de forma simples e prática. A interface permite adicionar novas tarefas, marcar itens como concluídos, remover itens da lista e acompanhar quantas tarefas já foram finalizadas.

## Descrição do projeto

Este projeto é uma aplicação frontend em Angular para controle de tarefas pessoais. Ele foi criado para demonstrar o uso de componentes, data binding, formulários e manipulação de listas em Angular.

A aplicação já inicia com algumas tarefas de exemplo e oferece uma interface simples para organização diária.

## Funcionalidades

- Adicionar uma nova tarefa
- Pressionar Enter para cadastrar rapidamente
- Impedir a criação de tarefas vazias
- Marcar tarefas como concluídas
- Remover tarefas da lista
- Exibir uma mensagem quando a lista estiver vazia
- Mostrar o número de tarefas concluídas

## Tecnologias utilizadas

- Angular
- TypeScript
- HTML
- CSS
- Angular Forms

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18 ou superior
- npm
- Git (opcional, mas recomendado)

## Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd lista-tarefas
```

2. Instale as dependências:

```bash
npm install
```

## Executando a aplicação

Para iniciar o projeto em modo de desenvolvimento:

```bash
npm start
```

ou

```bash
ng serve
```

Após o servidor iniciar, abra no navegador:

```text
http://localhost:4200/
```

## Build de produção

Para gerar a versão compilada da aplicação:

```bash
npm run build
```

A saída será gerada na pasta:

```text
dist/
```

## Testes

Para executar os testes unitários do projeto:

```bash
npm test
```

## Estrutura principal do projeto

```text
lista-tarefas/
├── angular.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── public/
├── src/
│   ├── app/
│   │   ├── app.config.server.ts
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.server.ts
│   │   ├── app.spec.ts
│   │   ├── app.ts
│   │   └── lista-tarefas/
│   │       ├── lista-tarefas.css
│   │       ├── lista-tarefas.html
│   │       ├── lista-tarefas.spec.ts
│   │       └── lista-tarefas.ts
│   ├── index.html
│   ├── main.server.ts
│   ├── main.ts
│   ├── server.ts
│   └── styles.css
└── ...
```

## Observações

A aplicação mantém a lista em memória durante a execução. Isso significa que:

- os dados não são persistidos em banco de dados
- não há armazenamento em LocalStorage
- ao recarregar a página, o estado inicial volta ao padrão definido no código

## Licença

Este projeto é destinado para fins de estudo e demonstração.
