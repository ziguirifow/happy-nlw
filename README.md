<h1 align="center">
    <img alt="Happy" title="Happy" src=".github/logo.svg" />
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-back-end">Back-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-front-end">Front-end</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-mobile">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>
</p>

<p align="center">
  <img alt="Happy" src=".github/happyy.png" width="100%">
</p>

<br>

---

## 💻 Projeto

Projeto desenvolvido durante a <strong>Next Level Week</strong> que tem como objetivo fins sociais.
O <strong>Happy</strong> serve como uma plataforma de conexão com instituições de orfanatos.

---

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [React Leaflet](https://react-leaflet.js.org/)

---

## 🔨 Back-end

Clicando no link abaixo você será redirecionado pra a página do Insomnia, se você já tiver ele instalado você vai poder importar um JSON pra dentro do Insomnia com todos os métodos usados no back-end do projeto.

<h1 align="center">
<a href="https://insomnia.rest/run/?label=Happy-API&uri=https://github.com/ziguirifow/happy-nlw/blob/main/backend/Happy-Insomnia.json" target="_blank" rel="noopener noreferrer"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</h1>

## 🌐 Front-end

<h1 align="center">
    <img alt="happy Front-end" title="#delicinha" src=".github/happy-front-end.gif" />
</h1>

## 📱 Mobile

<h1 align="center">
   <img alt="happy Mobile" title="#delicinha" src=".github/happy-mobile.gif" />
</h1>

## 👨‍💻 Instalação

### 🔨 Back-end

```bash
# Navegue até a pasta backend e instale as dependências:
$ npm install ou yarn install

# Depois disso, continuando na pasta raiz e execute os seguintes comandos:
$ npm run typeorm migration:run ou yarn typeorm migration:run

$ npm run dev ou yarn dev
```

---

### 🌐 Front-end

```bash
# Navegue até a pasta raiz e instale as dependências:
$ npm install ou yarn install

# Depois disso, continuando na pasta raiz e execute os seguintes comandos:
$ npm start or yarn start
$ acesse a url -> http://localhost:3000

# Observações:
- Não esqueça de mudar a baseURL no arquivo api.ts que fica na pasta service ip da sua máquina.
```

---

### 📱 Mobile

```bash
# Navegue até a pasta mobile e instale as dependências:
$ npm install ou yarn install

# Execute o seguinte comando - somente para Android:
$ expo start

# Observações:
- Não esqueça de mudar a baseURL no arquivo api.ts das pastas web e mobile para o ip da sua máquina caso queira testar o aplicativo mobile no seu dispositivo físico.
```
