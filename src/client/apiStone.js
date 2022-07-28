const axios = require("axios").default;

const mapearProdutos = require("../utils/mapearProdutos");

const apiStone = async (plano) => {
  const { data } = await axios.get(
    `https://api.lojastonemais.com.br/products?catalog=${plano}`
  );

  const produtosMapeados = mapearProdutos(data);

  return produtosMapeados;
};

module.exports = apiStone;
