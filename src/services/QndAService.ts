import api from "./api";

interface QndA{
    question:string;
    answer:string;
}

export const newQndA = (productId:number | string,{question ,answer}:QndA ) => {
  return api.post(`/question-answers/${productId}`, { question ,answer });
};

export const getQndAForProduct = (productId:number | string) => {
  return api.put(`/question-answers`,{productId});
};

export const getQndAById = (id:number | string) => {
  return api.get(`/question-answers/${id}`);
};

export const deleteQndA = (id:number | string) => {
  return api.delete(`/question-answers/${id}`);
};

export const updateAnswer = (id:number | string,answer:string) => {
  return api.put(`/question-answers/${id}`,{answer});
};
