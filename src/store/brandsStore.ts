import { create } from "zustand";
import {
  addNewBrand,
  updateBrand,
  updateBrandImage,
  getAllBrands,
  getBrandById,
  deleteBrand,
} from "../services/brandsService";

interface Brand {
  id?: number | string;
  name: string;
  about: string;
  image: string | File;
}

interface BrandStoreState {
  brands: Brand[];
  selectedBrand: Brand | null;
  loading: boolean;
  error: string | null;

  fetchBrands: (page?: number, pageSize?: number, q?: string) => Promise<void>;
  fetchBrandById: (id: number | string) => Promise<void>;

  createBrand: (name: string, about: string, image: File) => Promise<void>;
  editBrand: (id: number | string, name: string, about: string) => Promise<void>;
  editBrandImage: (id: number | string, image: File) => Promise<void>;
  removeBrand: (id: number | string) => Promise<void>;
}

export const useBrandStore = create<BrandStoreState>((set, get) => ({
  brands: [],
  selectedBrand: null,
  loading: false,
  error: null,

  fetchBrands: async (page = 1, pageSize = 10, q = "") => {
    set({ loading: true, error: null });
    try {
      const res = await getAllBrands(page, pageSize, q);
      set({ brands: res.data?.data || res.data || [], loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Failed to fetch brands", loading: false });
    }
  },

  fetchBrandById: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await getBrandById(id);
      set({ selectedBrand: res.data, loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Failed to fetch brand", loading: false });
    }
  },

  createBrand: async (name, about, image) => {
    set({ loading: true, error: null });
    try {
      await addNewBrand(name, about, image);
      await get().fetchBrands();
      set({ loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Failed to create brand", loading: false });
    }
  },

  editBrand: async (id, name, about) => {
    set({ loading: true, error: null });
    try {
      await updateBrand(id, name, about);
      await get().fetchBrands();
      set({ loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Failed to update brand", loading: false });
    }
  },

  editBrandImage: async (id, image) => {
    set({ loading: true, error: null });
    try {
      await updateBrandImage(id, image);
      await get().fetchBrands();
      set({ loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Failed to update image", loading: false });
    }
  },

  removeBrand: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteBrand(id);
      set({ brands: get().brands.filter((b) => b.id !== id), loading: false });
    } catch (err: any) {
      set({ error: err.response?.data?.message || "Failed to delete brand", loading: false });
    }
  },
}));
