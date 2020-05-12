# React Native - Mobi Store

[GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)

Aplicação contruida com Redux, Redux-Saga, React Navigation, React Navigation Stack, styled-components, React Native Vector Icons, polished e Hooks.

## Índice

- [Capturas de Tela](#capturas-de-tela)

  - [Home](#home)

  - [Carrinho](#carrinho)

- [Desenvolvimento](#desenvolvimento)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

- [Utilizados no Projeto](#utilizados-no-projeto)

  - [Bibliotecas](#bibliotecas)

  - [APIs](#apis)

  - [Ferramentas](#ferramentas)

## Capturas de Tela

### Home

![Home](/.github/assets/home2.png)
Esta é a primeira tela, onde encontram-se todos os produtos vindos da API numa listagem horizontal, podendo adicionar os produtos no carrinho.

### Carrinho

![Cart](/.github/assets/cart2.png)
Nesta tela, encontram-se todos os produtos que são adicionados ao carrinho, podendo alterar a quantidade ou excluir o produto e também voltar para a página inicial.

## Desenvolvimento

## Documentação

Clique [aqui](https://github.com/facebook/react-native) para ver a documentação.

## Instalação

Clique [aqui](https://www.npmjs.com/package/react-native-cli) para fazer a instalação.

Instalar globalmente:

```
npm install --global react-native-cli | yarn global add react-native-cli
```

Obs: Prefira usar o npm para instalar, porque pode ocorrer que o yarn não consiga registrar o Path, com isso é necessário entrar [aqui](https://yarnpkg.com/lang/en/docs/cli/global) e seguir `Adding the install location to your PATH`.

## Comandos do CLI

Criação de novo projeto:

```
react-native init <nome_app>
```

Exibição de uma lista de comandos possíveis:

```
react-native -h
```

### Execução de Projeto para Desenvolvimento no React Native

- Quando executar o projeto pela primeira vez ou quando instalar uma biblioteca que contêm código nativo que precise executar o comando `react-native link nome-da-biblioteca` (_DESCONTINUADO_), podemos executar os comandos abaixo.

Executar o projeto no Android:

```
react-native run-android
```

Executar o projeto no iOS:

```
react-native run-ios
```

Ou é possível informar a versão do emulador utilizado passando a propriedade `--simulator`:

```
react-native run-ios --simulator="iPhone XS Max"
```

- Depoispodemos abrir o aplicativo no smartphone e usar o comando:

```
react-native start
```

### APIs

- **API do Json Server**

  - **Rotas**

    - Produtos

      - Buscar dados de todos os produtos

    - Estoque

      - Busca de um produto
