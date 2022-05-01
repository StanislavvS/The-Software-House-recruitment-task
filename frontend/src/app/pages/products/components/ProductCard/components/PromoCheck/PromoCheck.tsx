import React from "react";
import { usePromoCheckStyles } from "./styles";
import { PromoCheckProps } from "./types";

const PromoCheck = ({ promo }: PromoCheckProps) => {
  const classes = usePromoCheckStyles();

  return promo ? <div className={classes.promo}>Promo</div> : <></>;
};

export default PromoCheck;
