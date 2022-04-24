import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "app/pages/login/Login";
import { AppRoute } from "./AppRoute.enum";
import Spinner from "app/components/Spinner/Spinner";

const Products = React.lazy(() =>
  import("app/pages/products/Products").then(({ Products }) => ({
    default: Products,
  }))
);

export const AppRoutes = () => {
  return (
    <Switch>
      <Route
        path={AppRoute.Home}
        exact
        render={() => (
          <Suspense fallback={<Spinner />}>
            <Products />
          </Suspense>
        )}
      />
      <Route path={AppRoute.Login} component={Login} />

      <Redirect to={AppRoute.Home} />
    </Switch>
  );
};
