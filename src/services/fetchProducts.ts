export const fetchProduct = async () => {
  try {
    const response = await fetch(
      "https://go.cocunat.com/products/clinical-beauty-filler"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch product");
  }
};
