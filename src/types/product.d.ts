export interface Root {
  categories: CategoryProps[]
  admin: Admin
  user: User
}

export interface CategoryProps {
  categoryId: number
  categoryName: string
  categoryImg: string
  categoryProducts: ProductsProps[]
}

export interface ProductsProps {
  id: number
  name: string
  img: string
  price: number
  stock: boolean
  description: string
}

export interface Admin {
  token: string
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
}

export interface User {
  token: string
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  address: string
  country: Country
  city: City
  zip: number
  shippingAddress: boolean
  saveinformation: boolean
  payment: Payment
  nameoncard: string
  cardnumber: number
  expiration: number
  cvv: number
}

export interface Country {
  spain: string
  portugal: string
  uk: string
  andorra: string
}

export interface City {
  madrid: string
  lisbon: string
  london: string
  andorra: string
}

export interface Payment {
  creditcard: boolean
  debitcard: boolean
  paypal: boolean
}


export type ShopContextValue = {

  cart: CartItems
  addToCart: (id: number) => void
  removeToCart: (id: number) => void
  minusToCart: (id: number) => void
  getTotalItems: () => number
  addPrice: () => number
  openModal: boolean
  setOpenModal: (value: boolean) => void
  login: boolean
  setLogin:  (id: boolean) => void

}
export type CartItems = { [key: string]: number };

export type typeProps = {
  children: ReactNode;
}

export interface CardImgProps {

  img: string;
  id: number;
  name: string
  price: number
  
  }