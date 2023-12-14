import { Provider } from "react-redux";
import Header from "../components/Header";
import { render } from "@testing-library/react";
import Store from "../utils/Store";
import { StaticRouter } from "react-router-dom/server";

test("check if cart has 0 items when header renders", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("Cart");

  expect(cart.innerHTML).toBe('Cart <span class="font-semibold">(0)</span>');
});

test("check if logo loads on rendering", () => {
  const header = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("Logo");
  expect(logo.src).toBe(
    "https://freesvg.org/img/chef-restaurant-logo-publicdomainvectors.png"
  );
});
