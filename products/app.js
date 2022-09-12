const express = require("express");
const { randomUUID } = require("crypto");

const fs = require("fs");

const app = express();

app.use(express.json());

let products = [];

fs.readFile("products.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    products = JSON.parse(data);
  }
});

/**
 * Body => sempre que eu quiser enviar dados para minha aplicação
 * Params => é o proprio parametro de rota, ex /products/1243434343
 * Query => faz parte da rota mas nao é obrigatorio ex /product?id=1212121212&value=112222
 */

app.post("/products", (request, response) => {
  const { name, price } = request.body;
  const product = {
    name,
    price,
    id: randomUUID(),
  };

  products.push(product);

  createProductFile();

  return response.json(product);
});

app.get("/products", (request, response) => {
  return response.json(products);
});

app.get("/products/:id", (request, response) => {
  const { id } = request.params;

  const product = products.find((product) => product.id === id);

  return response.json(product);
});

app.put("/products/:id", (request, response) => {
  const { id } = request.params;
  const { name, price } = request.body;

  const productIndex = products.findIndex((product) => product.id === id);
  products[productIndex] = {
    ...products[productIndex],
    name,
    price,
  };

  createProductFile();

  return response.json({ message: "Produto alterado com sucesso!" });
});

app.delete("/products/:id", (request, response) => {
  const { id } = request.params;
  const productIndex = products.findIndex((product) => product.id === id);

  products.splice(productIndex, 1);

  createProductFile();

  return response.json({ message: "Produto removido com sucesso!" });
});

function createProductFile() {
  fs.writeFile("products.json", JSON.stringify(products), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      products = JSON.parse(data);
    }
  });
}

app.listen(4002, () => {
  console.log("server rodando na porta 4002");
});
