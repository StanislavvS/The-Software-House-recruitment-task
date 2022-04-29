import { Product } from "providers/ProductsProvider.types";
import { useProductCardStyles } from "./styles";
import { useProducts } from "providers/ProductsProvider";
import React, { useState } from "react";
import Button from "app/components/Button/Button";
import PromoCheck from "./components/PromoCheck/PromoCheck";
import { useProductCard } from "./hooks";
import { ReactComponent as Star } from "../../../../../img/icons/star.svg";
import { ReactComponent as FilledStar } from "../../../../../img/icons/fill-star.svg";
import { v4 as uuidv4 } from "uuid";

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
  const [currentProductRating, setCurrentPruductRaing] =
    useState<number>(rating);

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
        <div className={classes.productCardStarsContainer}>
          {convertRatingToRatingStar(currentProductRating).map((el, index) =>
            el === 1 ? (
              <FilledStar
                key={uuidv4()}
                className={classes.productCardRatingStar}
                onClick={() => {
                  setCurrentPruductRaing(index + 1);
                }}
              />
            ) : (
              <Star
                onClick={() => {
                  setCurrentPruductRaing(index + 1);
                }}
                className={classes.productCardRatingStar}
                key={uuidv4()}
              />
            )
          )}
        </div>
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
