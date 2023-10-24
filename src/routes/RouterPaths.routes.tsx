import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, HomePage, CategoriesPage, CategoriesPageFiltered, ProductsPage, ProductsDetailPage, Myaccount, CartPage, ErrorMessage, PreventiveMessage, Checkout, OrderPage } from "../pages";


/*
// Routing my pages
*/
export const RouterPaths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage categoryId={0} categoryName={""} categoryImg={""} categoryProducts={[]} />} />
          <Route path="categoriespage" element={<CategoriesPage categoryId={0} categoryName={""} categoryImg={""} categoryProducts={[]} />} />
          <Route path="categoriespage/:categoryId" element={<CategoriesPageFiltered categoryId={0} categoryName={""} categoryImg={""} categoryProducts={[]} />} />

          <Route path="products" element={<ProductsPage categoryId={0} categoryName={""} categoryImg={""} categoryProducts={[]} />} />
          <Route path="productdetail/:id" element={<ProductsDetailPage id={1} name={""} img={""} price={0} stock={false} description={""} />} />

          <Route path="myaccount" element={<Myaccount />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="/privateMsg" element={<ErrorMessage />} />
          <Route path="/checkout" element={<PreventiveMessage />}>
            <Route path="/checkout" element={<Checkout img={""} id={0} name={""} price={0} />} />
            <Route path="/checkout/congrats" element={<OrderPage />} />
          </Route>
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
