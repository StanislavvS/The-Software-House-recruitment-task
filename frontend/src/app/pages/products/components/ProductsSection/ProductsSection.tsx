import Spinner from "app/components/Spinner/Spinner";
import ProductCard from "app/pages/products/components/ProductCard/ProductCard";
import { Product } from "providers/ProductsProvider.types";
import ReactPaginate from "react-paginate";
import { useProductsPage } from "../../hooks";
import { useProductsSectionStyles } from "./styles";
import { usePagination } from "./hooks";

const ProductsSection = () => {
  const { isLoading } = useProductsPage();
  const {
    setPaginationValues,
    paginationValues,
    products,
    pagesVisted,
    itemsPerPage,
  } = usePagination();
  const classes = useProductsSectionStyles();

  if (isLoading) return <Spinner />;

  console.log(pagesVisted + itemsPerPage);
  return (
    <div className={classes.productSectionContainer}>
      <div className={classes.productsSection}>
        {products
          .slice(pagesVisted, pagesVisted + itemsPerPage)
          .map(({ id, name, description, promo, active, image, rating }) => (
            <ProductCard
              key={id}
              id={id}
              name={name}
              description={description}
              promo={promo}
              active={active}
              image={image}
              rating={rating}
            />
          ))}
      </div>
      <ReactPaginate
        className={classes.productSectionPagination}
        pageCount={products.length / 8}
        onPageChange={({ selected }) =>
          setPaginationValues({ ...paginationValues, selectedPage: selected })
        }
        pageRangeDisplayed={paginationValues.selectedPage === 1 ? 2 : 3}
        marginPagesDisplayed={2}
        nextLabel=""
        previousLabel=""
        breakLabel="..."
      />
    </div>
  );
};

export default ProductsSection;
