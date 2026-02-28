# Projeto Node.js com Express

Este projeto demonstra a criação de um servidor web básico utilizando Node.js e o framework Express, com foco especial na passagem de parâmetros via URL.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina.

## Configuração do Ambiente

Para iniciar o projeto, siga os passos abaixo:

1.  **Abra o PowerShell como Administrador:**
    Clique com o botão direito no ícone do PowerShell e selecione "Executar como administrador".

2.  **Defina a Política de Execução:**
    No PowerShell, digite o seguinte comando para permitir a execução de scripts locais:
    ```powershell
    Set-ExecutionPolicy RemoteSigned
    ```
    Confirme a alteração digitando `S` (Sim) ou `A` (Sim para todos) quando solicitado.

3.  **Inicialize o Projeto Node.js:**
    Navegue até o diretório do seu projeto no PowerShell e execute:
    ```bash
    npm init -y
    ```
    Este comando criará um arquivo `package.json` com as configurações padrão.

4.  **Instale o Express:**
    Instale o framework Express como dependência do seu projeto:
    ```bash
    npm install express
    ```

## Criação do Servidor (index.js)

Crie um arquivo chamado `index.js` na raiz do seu projeto com o seguinte conteúdo:

```javascript
const express = require("express");
const app = express();

// Rota padrão
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Rota com parâmetro na URL
app.get("/:nome", (req, res) => {
  const { nome } = req.params;
  res.status(200).json({
    mensagem: `Hello ${nome}!`
  });
});

app.listen(3005, () => {
  console.log("Servidor on");
});
```

## Como Rodar o Servidor

No terminal (PowerShell), execute o arquivo `index.js`:

```bash
node index.js
```

Você verá a mensagem "Servidor on" no console, indicando que o servidor está ativo.

## Acessando no Navegador (Passagem de Parâmetros na URL)

Abra seu navegador e acesse as seguintes URLs para testar as rotas:

*   **Rota Padrão:**
    `http://localhost:3005/`
    Isso retornará a mensagem "Hello World!".

*   **Rota com Parâmetro:**
    `http://localhost:3005/teste`
    Esta URL utiliza o parâmetro `:nome` definido na rota `app.get("/:nome", ...)`. O valor "teste" será capturado e utilizado na resposta, resultando em `{"mensagem": "Hello teste!"}`.

    Você pode substituir `teste` por qualquer outro texto para ver a mensagem personalizada, por exemplo:
    `http://localhost:3005/Manus`
    Retornará `{"mensagem": "Hello Manus!"}`.

    **Importante:** A passagem de parâmetros na URL, como demonstrado em `http://localhost:3005/:nome`, é uma forma comum de enviar dados para o servidor em requisições GET. O Express facilita a captura desses parâmetros através de `req.params`.

---
