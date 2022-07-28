const listarProdutosDisponiveis = require("./listarProdutosDisponiveis");

const mapearProdutos = (produto) => {
  const produtos = produto.products.map(
    ({
      name,
      title,
      img_url,
      highlights,
      amount,
      shipping_time,
      max_quantity,
    }) => {
      amount = amount.replace(".", ",");
      shipping_time.max = shipping_time.max.toString();
      shipping_time.min = shipping_time.min.toString();
      max_quantity = max_quantity.toString();

      const mappedProducts = {
        name,
        title,
        img_url,
        highlights,
        amount,
        shipping_time,
        max_quantity,
      };

      return mappedProducts;
    }
  );

  const produtos_disponiveis = listarProdutosDisponiveis(produtos);

  return {
    produtos_disponiveis,
    detalhe_produtos: produtos,
  };
};

module.exports = mapearProdutos;
