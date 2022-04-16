const express = require("express");

const app = express();

const products = [];

/**
 * Body => sempre que eu quiser enviar dados para minha aplicação
 * Params => é o proprio parametro de rota, ex /products/1243434343
 * Query => faz parte da rota mas nao é obrigatorio ex /product?id=1212121212&value=112222
 */

app.post("/products", (request, response) => {
  const body = request.body;
  console.log(body);
});

app.listen(4002, () => {
  console.log("server rodando na porta 4002");
});
