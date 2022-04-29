import { Product } from "providers/ProductsProvider.types";
import { useProductCardStyles } from "./styles";
import { ReactComponent as Star } from "../../../../../img/icons/star.svg";
import { ReactComponent as FilledStar } from "../../../../../img/icons/fill-star.svg";
import React from "react";
import Button from "app/components/Button/Button";
import PromoCheck from "./components/PromoCheck/PromoCheck";
import { useProductCard } from "./hooks";

const ProductCard = ({
  active,
  description,
  id,
  image,
  name,
  promo,
  rating,
}: Product) => {
  const classes = useProductCardStyles();
  const { convertRatingToRatingStar } = useProductCard();

  console.log(convertRatingToRatingStar(rating));

  return (
    <div className={classes.productCard}>
      <img
        src={image}
        alt="Photo of product"
        className={
          active
            ? `${classes.productCardImage} ${classes.productCardImageIsNotActive}`
            : classes.productCardImage
        }
      />
      <PromoCheck promo={promo} />
      <div className={classes.productCardContentContainer}>
        <h3 className={classes.productCardHeader}>{name}</h3>
        <article className={classes.productCardArticle}>{description}</article>
        {/* <div className={classes.productCardStarsContainer}>{ratingStars}</div> */}
        <Button
          textValue="Show details"
          buttonClassName="productCardButton"
          isDisabled={active}
        />
      </div>
    </div>
  );
};

export default ProductCard;
