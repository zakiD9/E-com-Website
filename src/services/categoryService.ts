import api from "./api";

export const addNewCategory = (Name:string,Image:File,ParentId:string ) => {
  return api.post(`/categories`, { Name,Image,ParentId });
};

export const updateCategoryName = (Name:string,id:string ) => {
  return api.patch(`/categories/${id}/name`, { Name });
};

export const updateCategoryImage = (id:string, Image:File ) => {
  return api.patch(`/categories/${id}/image`, { Image });
};

export const deleteCategory = (id:string ) => {
  return api.delete(`/categories/${id}`);
};

export const getCategoryById = (id:string ) => {
  return api.get(`/categories/${id}`);
};

export const getAllCategories = () => {
  return api.get(`/categories`);
};


