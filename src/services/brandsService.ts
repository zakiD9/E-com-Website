import api from "./api";

export const addNewBrand = (name: string, about: string, image: File) => {
  const formData = new FormData();
  formData.append("Name", name);
  formData.append("About", about);
  formData.append("Image", image);

  return api.post("/auth/brands", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
};


export const updateBrand = (id:number | string,name:string,about:string ) => {
  return api.put(`/auth/brands/${id}`, { name,about });
};

export const getAllBrands = (page: number, pageSize: number, q: string) => {
  return api.get(`/auth/brands`, {
    params: { page, pageSize, q }
  });
};

export const getBrandById = (id:number | string) => {
  return api.get(`/auth/brands/${id}`);
};

export const deleteBrand = (id:number | string) => {
  return api.delete(`/auth/brands/${id}`);
};

export const updateBrandImage = (id: number | string, image: File) => {
  const formData = new FormData();
  formData.append("Image", image);

  return api.patch(`/auth/brands/${id}/image`, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
};

