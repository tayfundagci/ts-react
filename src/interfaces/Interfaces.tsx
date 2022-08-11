export interface iProductType {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string;
  price: string | number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface iPerson {
  name: string;
  age: number;
  hasJob: boolean;
  walk: () => void;
  run: () => void;
  speak: (something: string) => void;
}

export interface iOrder {
  orderId: number;
  orderName: string;
  orderType: "meal" | "drink";
  orderRequestIds: string[];
}

export interface iOrderCard {
  order: iOrder;
  onSelect: () => void;
  onDelete: () => void;
}

interface iButtonOpacityProps {
  onClick: () => void;
  onChange: () => void;
}

export interface iButtonProps extends iButtonOpacityProps {
  title: string;
  loading: boolean;
}

export interface iAppContextInterface {
  name: string;
  author: string;
  url: string;
}

export interface iContextState {
  name: string | null;
}