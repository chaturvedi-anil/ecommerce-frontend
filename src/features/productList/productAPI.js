const fetchAllProducts = () => {
  const promise = new Promise(async (resolve, reject) => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();

    resolve({ data });
  });

  return promise;
};

const fetchProductsByFilter = (filter) => {
  let queryString = "";

  for (const key in filter) {
    queryString += `${key}/${filter[key]}`;
  }

  const promise = new Promise(async (resolve, reject) => {
    const response = await fetch(
      `https://dummyjson.com/products/${queryString}`
    );

    const data = await response.json();

    resolve({ data });
  });

  return promise;
};

export { fetchAllProducts, fetchProductsByFilter };
