export interface ICategory {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface IProduct {
  category: ICategory;
  description: string;
  id: number;
  name: string;
  images?: string[];
  price: number;
  rating: number;
  sold: number;
}
