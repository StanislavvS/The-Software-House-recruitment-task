import { Product } from "providers/ProductsProvider.types";
import { useProductCard } from "./styles";
import { ReactComponent as Star } from "../../../../../img/icons/star.svg";
import React from "react";
import Button from "app/components/Button/Button";
import PromoCheck from "./components/PromoCheck/PromoCheck";

const ProductCard = ({
  active,
  description,
  id,
  image,
  name,
  promo,
  rating,
}: Product) => {
  const classes = useProductCard();
  const ratingStars = Array(5)
    .fill(0)
    .map(() => {
      return <Star />;
    });

  return (
    <div className={classes.productCard}>
      <img
        src={image}
        alt="Photo of product"
        className={classes.productCardImage}
      />
      <PromoCheck promo={promo} />
      <div className={classes.productCardContentContainer}>
        <h3 className={classes.productCardHeader}>{name}</h3>
        <article className={classes.productCardArticle}>{description}</article>
        <div className={classes.productCardStarsContainer}>{ratingStars}</div>
        <Button textValue="Show details" buttonClassName="productCardButton" />
      </div>
    </div>
  );
};

export default ProductCard;
