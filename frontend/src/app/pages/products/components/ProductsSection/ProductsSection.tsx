import Spinner from "app/components/Spinner/Spinner";
import ProductCard from "app/pages/products/components/ProductCard/ProductCard";
import NoProductFound from "./components/NoProductFound";
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

  const pageCount = Math.ceil(products.length / 8);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={classes.productSectionContainer}>
      <div className={classes.productsSection}>
        {products.length > 0 ? (
          products
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
            ))
        ) : (
          <NoProductFound />
        )}
      </div>
      <ReactPaginate
        className={classes.productSectionPagination}
        pageCount={pageCount}
        onPageChange={({ selected }) =>
          setPaginationValues({ ...paginationValues, selectedPage: selected })
        }
        pageRangeDisplayed={paginationValues.selectedPage === 1 ? 2 : 3}
        marginPagesDisplayed={pageCount === 7 ? 2 : 3}
        nextLabel=""
        previousLabel=""
        breakLabel="..."
      />
    </div>
  );
};

export default ProductsSection;
