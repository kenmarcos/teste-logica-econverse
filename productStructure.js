const products = [
  "preto-PP",
  "preto-M",
  "preto-G",
  "preto-GG",
  "preto-GG",
  "branco-PP",
  "branco-G",
  "vermelho-M",
  "azul-XG",
  "azul-XG",
  "azul-XG",
  "azul-P",
];

module.exports = () => {
  const productColors = products.map((product) => product.split("-")[0]);

  const distinctProductColors = [...new Set(productColors)];

  const productCatalog = {};

  for (color of distinctProductColors) {
    const productSizesByColor = products
      .filter((product) => product.includes(color))
      .map((product) => product.split("-")[1]);

    productCatalog[color] = productSizesByColor.reduce(
      (inventoryBySize, size) => {
        inventoryBySize[size] = (inventoryBySize[size] || 0) + 1;
        return inventoryBySize;
      },
      {}
    );
  }

  return productCatalog;
};
