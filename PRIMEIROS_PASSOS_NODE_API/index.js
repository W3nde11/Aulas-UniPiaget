const express = require("express");
const servidor = express();


servidor.get("/:nome", (req, res) => {
    const { nome } = req.params;
    res.status(200).json({
      mensagem: `Seja Bem vindo ${nome}!`
    });
  });


servidor.listen(3020, () => {
  console.log("Servidor On Junior Wendell Ferraz De Campos");
});

