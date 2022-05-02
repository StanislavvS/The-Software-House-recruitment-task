import { useNoproductFoundStyles } from "./styles";
import { ReactComponent as NoProductIcon } from "../../../../../../img/icons/no-products.svg";

const NoProductFound = () => {
  const classes = useNoproductFoundStyles();
  return (
    <div className={classes.noProductFoundContainer}>
      <NoProductIcon />
      <h3 className={classes.noProductFoundHeader}>Ooops... It's empty here</h3>
      <p className={classes.noProductPargraph}>
        There are no products in the list
      </p>
    </div>
  );
};

export default NoProductFound;
