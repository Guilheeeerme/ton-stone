const listarProdutosDisponiveis = (produtos) => {
  let menuProdutos = [];

  produtos.forEach((item) => {
    menuProdutos.push(`${item.name}: ${item.title}`);
  });

  return menuProdutos;
};

module.exports = listarProdutosDisponiveis;
