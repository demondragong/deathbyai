export enum ProductType {
  APP = 'app',
  PROFESSION = 'profession',
  OTHER = 'other',
}

export interface Product {
  name: string;
  description: string;
  hope: string;
  dateClose: string;
  dateOpen: string;
  link: string;
  type: ProductType;
  conservationStatus: string;
}

export type ProductWithSlug = Product & { slug: string };
