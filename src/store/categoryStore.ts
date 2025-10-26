import { create } from "zustand";
import { addNewCategory, deleteCategory, getAllCategories, getCategoryById, updateCategoryImage, updateCategoryName } from "../services/categoryService";

interface Category{
    id?:string;
    name?:string;
    about?:string;
    image?:File;
}

interface CategoryStoreState{
    categories: Category[];
    selectedCategory: Category | null;
    error:string | null;
    loading : boolean;

    fetchCategories: () => Promise<void>;
    fetchCategoryById: (id:string) => Promise<void>;
    updateCategoryName: (id:string,Name:string) => Promise<void>;
    updateCategoryImage: (id:string,Image:File) => Promise<void>;
    deleteCategory: (id:string) => Promise<void>;
    addNewCategory: (Name:string,Image:File,ParentId:string) => Promise<void>;
}

export const useCategoryStore = create<CategoryStoreState>((set, get) => ({
    categories: [],
    selectedCategory: null,
    loading: false,
    error: null,

    fetchCategories: async () => {
        set({ loading: true, error: null });
        try {
          const res = await getAllCategories();
          set({ categories: res.data?.data || res.data || [], loading: false });
        } catch (err: any) {
          set({ error: err.response?.data?.message || "Failed to fetch categories", loading: false });
        }
      },
    
    fetchCategoryById: async (id:string) =>{
        set({loading:true , error:null});
        try{
            const res = await getCategoryById(id);
            set({selectedCategory:res.data?.data || res.data || null , loading : false});
        } catch(err:any){
            set({error : err.response?.data?.message || "failed to get category" , loading :false})
        }
    },

    updateCategoryName: async (id:string,Name:string) => {
        set({loading:true ,error:null});
        try{
            const res = await updateCategoryName(id,Name);
            set({selectedCategory:res.data?.data || res.data || null ,loading : false });
        } catch(err:any){
            set({error: err.response?.data?.message || "failed to update name"  , loading : false })
        }
    },

    updateCategoryImage: async (id:string,Image:File) => {
        set({loading:true ,error:null});
        try{
            const res = await updateCategoryImage(id,Image);
            set({selectedCategory:res.data?.data || res.data || null ,loading : false });
        } catch(err:any){
            set({error: err.response?.data?.message || "failed to update image"  , loading : false })
        }
    },

    deleteCategory: async (id:string) => {
        set({loading:true , error :null});
        try{
            await deleteCategory(id);
            set({loading:false});
        } catch(err:any){
            set({error:err.response?.data?.message || "failed to delete category" , loading:false })
        }
    },

    addNewCategory: async (Name: string, Image: File, ParentId: string) => {
        set({ loading: true, error: null });
        try {
          await addNewCategory(Name, Image, ParentId);
          await get().fetchCategories();
          set({ loading: false });
        } catch (err: any) {
          set({
            error: err.response?.data?.message || "Failed to add category",
            loading: false,
          });
        }
},

}));
