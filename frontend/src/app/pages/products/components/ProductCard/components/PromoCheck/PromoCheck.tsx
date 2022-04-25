import React from "react";
import { usePromoCheckStyles } from "./styles";
import { PromoCheckProps } from "./types";

const PromoCheck = ({ promo }: PromoCheckProps) => {
  const classes = usePromoCheckStyles();

  return (
    <div className={promo ? classes.promo : classes.promoDisabled}>Promo</div>
  );
};

export default PromoCheck;
