import { create } from "zustand";
import {
  newQndA,
  getQndAForProduct,
  getQndAById,
  deleteQndA,
  updateAnswer,
} from "../services/QndAService";

interface QnA {
  id: number | string;
  question: string;
  answer: string;
}

interface QnAStore {
  qnaList: QnA[];
  selectedQnA: QnA | null;
  loading: boolean;
  error: string | null;

  fetchQnA: (productId: number | string) => Promise<void>;
  fetchQnAById: (id: number | string) => Promise<void>;
  addQnA: (productId: number | string, data: { question: string; answer: string }) => Promise<void>;
  updateQnAAnswer: (id: number | string, answer: string) => Promise<void>;
  removeQnA: (id: number | string) => Promise<void>;
}

export const useQnAStore = create<QnAStore>((set, get) => ({
  qnaList: [],
  selectedQnA: null,
  loading: false,
  error: null,

  fetchQnA: async (productId) => {
    set({ loading: true, error: null });
    try {
      const res = await getQndAForProduct(productId);
      set({ qnaList: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.message || "Failed to fetch Q&A", loading: false });
    }
  },

  fetchQnAById: async (id) => {
    try {
      const res = await getQndAById(id);
      set({ selectedQnA: res.data });
    } catch (err) {
      console.error(err);
    }
  },

  addQnA: async (productId, data) => {
    try {
      await newQndA(productId, data);
      await get().fetchQnA(productId);
    } catch (err) {
      console.error(err);
    }
  },

  updateQnAAnswer: async (id, answer) => {
    try {
      await updateAnswer(id, answer);
      set((state) => ({
        qnaList: state.qnaList.map((item) =>
          item.id === id ? { ...item, answer } : item
        ),
        selectedQnA:
          state.selectedQnA?.id === id
            ? { ...state.selectedQnA, answer }
            : state.selectedQnA,
      }));
    } catch (err) {
      console.error(err);
    }
  },

  removeQnA: async (id) => {
    try {
      await deleteQndA(id);
      set((state) => ({
        qnaList: state.qnaList.filter((item) => item.id !== id),
      }));
    } catch (err) {
      console.error(err);
    }
  },
}));
