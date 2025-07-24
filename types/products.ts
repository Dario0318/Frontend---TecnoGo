export type ProductType = {
  id: number;
  productName: string;
  slug: string;
  description: string;
  active: boolean;
  isFeatured: boolean;
  Disponibilidad: string;
  origin: string;
  price: number;
  images: {
      id: number;
      url: string; // <-- ya no dentro de 'attributes'
  }[];
  category: {
    slug: string;
    categoryName: string;
  };
  isOffered:boolean;
};
