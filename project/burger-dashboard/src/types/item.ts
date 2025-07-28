export interface Item {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  nutrition: {
    volume?: string;
    calories?: string;
    sugar?: string;
    protein?: string;
    fat?: string;
    sodium?: string;

  };
  image: string;
  count: number;
}
