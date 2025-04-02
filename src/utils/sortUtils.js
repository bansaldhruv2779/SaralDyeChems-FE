export const sortProducts = (products, sortOption) => {
  if (!products) return [];

  const sortedProducts = [...products];

  switch (sortOption) {
    case 'name-asc':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    // Add more cases for other sort options as needed
    default:
      return products; // return unsorted for 'default'
  }
};
