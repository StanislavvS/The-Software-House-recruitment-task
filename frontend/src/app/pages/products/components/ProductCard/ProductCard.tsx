import { Product } from "providers/ProductsProvider.types";
import { useProductCardStyles } from "./styles";
import { useProducts } from "providers/ProductsProvider";
import React, { useState } from "react";
import Button from "app/components/Button/Button";
import PromoCheck from "./components/PromoCheck/PromoCheck";
import { useProductCard } from "./hooks";
import { ReactComponent as Star } from "../../../../../img/icons/star.svg";
import { ReactComponent as FilledStar } from "../../../../../img/icons/fill-star.svg";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import ProductView from "./components/ProductView/ProductView";
import "antd/dist/antd.css";

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
  const { setCurrentProductId } = useProducts();
  const { convertRatingToRatingStar } = useProductCard();
  const [currentProductRating, setCurrentPruductRaing] =
    useState<number>(rating);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={classes.productCard} data-testid="product-card">
      <Modal visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <ProductView />
      </Modal>
      <div className={classes.productCardImageContainer}>
        <img
          src={image}
          alt="Photo of product"
          className={
            !active
              ? `${classes.productCardImage} ${classes.productCardImageIsNotActive}`
              : classes.productCardImage
          }
        ></img>
        <PromoCheck promo={promo} />
      </div>
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
          dataTestId="product-card-button"
          textValue="Show details"
          buttonClassName="productCardButton"
          isDisabled={!active}
          onClickAction={() => {
            setCurrentProductId(id);
            showModal();
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
