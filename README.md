# Front-end Challenge - Netimóveis 20240110

## Descrição

Projeto para teste de front-end da empresa Netimóveis utilizando NextJs e Tailwind CSS.

## Introdução

Este é um teste técnico para vaga de front-end da empresa Netimóveis. Este teste foi iniciado dia 23/01/2024 e tem sua deadline para a data 28/01/2024. Os conceitos para elaboração desse teste pode ser encontrado no [test](https://github.com/coodesh/frontend-challenge-20240110/tree/main).

## Ferramentas utilizadas para esse teste

- NextJs na versão (14.0.4)
- Tailwind CSS na versão (^3.3.0)
- TypeScript (^5)
- Jest e @testing-library/jest-dom, @testing-library/react e @testing-library/user-event nas respectivas versões (^29.7.0), (^6.2.0), (^14.1.2) e (^14.5.2)

## Clonando e rodando o projeto

### Pré-requisitos

Antes de começar, certifique-se de atender aos seguintes requisitos:

- **Conta GitHub:** Você precisa de uma conta no GitHub para colaborar neste projeto. Se ainda não tiver uma, você pode [criar uma conta no GitHub aqui](https://github.com/join).

- **Node Version Manager (NVM):** Este projeto requer o Node.js, e é recomendado o uso do NVM para gerenciar as versões do Node.js. Certifique-se de ter o NVM instalado com uma versão de 0.39.3 ou superior. Você pode instalar o NVM seguindo as instruções no [repositório oficial do NVM](https://github.com/nvm-sh/nvm).

  ```bash
  # Exemplo de instalação do NVM em sistemas baseados em Unix
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
  ```

### Clonando

```bash
# using ssh
git clone git@github.com:Rharuow/Netim-veis-test.git
```

```bash
# using https
git clone https://github.com/Rharuow/Netim-veis-test.git
```

```bash
# using CLI
gh repo clone Rharuow/Netim-veis-test
```

### Instalando dependências e rodando

Após clonar o projeto entre na pasta, instale as dependências e rode o projeto em ambiente de desenvolvimento

```bash
# with yarn
cd ./Netim-veis-test && yarn && yarn dev
```

```bash
# with npm
cd ./Netim-veis-test && npm i && npm run dev
```

## Extras

Optei por fazer um versionamento baseado em PR e MR, simulando um projeto trabalhado em equipe. Todo o histórico de PR e MR encontrasse aqui nesse repositorio. Os PR e MR eram baseados em 3 fatores.

- Feat --> Funcionalidades criadas ou adicionadas ao projeto
- Improvment --> Adições de components ou códigos auxiliar para utilização no projeto.
- Fix --> Correções de bugs
- Documentation --> Quais quer alteração na documentação do projeto.
- Chore --> Alterações nas configurações do projeto (Lint, tsconfig e etc)
- tests --> Elaboração/correção de testes.

O projeto foi feito utilizando os conceitos de mobile first em que todas as implementações encontram-se mergeadas na branch "mobile", e as adaptrações para o breakpoint lg se concentram na branch "desktop".

> This is a challenge by [Coodesh](https://coodesh.com/)
