import api from "./api"

interface Product{
    name:string;
    description:string;
    additionalInformation:string;
    categoryId:string;
    brandId:string;
}


export const addNewProduct = (product:Product) => {
    return api.post("/products",{product});
}

export const getAllProducts = (page: number, pageSize: number) => {
    return api.get(`/products`, {
    params: { page, pageSize }
  });
}

export const getProductById = (id:string) => {
    return api.get(`/products/${id}`);
}

export const deleteProduct = (productId:string) => {
    return api.delete(`/products/${productId}`);
}

export const updateProduct = (productId:string,product:Product) => {
    return api.put(`/products/${productId}`,{product});
}

export const addProductItem = (productId:string) => {
    return api.post(`/products/${productId}/product-items`,);
}