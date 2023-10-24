import { useParams } from "react-router-dom";
import { CategoriesPage } from "../../../pages";
import { products } from "../../../assets/db/Products.db";

export const FilteredCategoriesPage = () => {
  const { categoryId } = useParams();

  const filteredCategory = products.find((category) => category.categoryId === Number(categoryId));

  return (
    <CategoriesPage
      categoryId={filteredCategory?.categoryId || 0}
      categoryName={filteredCategory?.categoryName || ""}
      categoryImg={filteredCategory?.categoryImg || ""}
      categoryProducts={filteredCategory?.categoryProducts || []}
    />
  );
};
