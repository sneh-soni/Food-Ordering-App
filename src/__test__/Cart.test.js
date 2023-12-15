import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../components/Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import Store from "../utils/Store";
import { Dummy_Data } from "../mocks/DummyApi";
import Header from "../components/Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Dummy_Data);
    },
  });
});

test("cart updates in clicking add button in header", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Header />
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(expect(body.getByTestId("restaurents")), { timeout: 10000 });

  const addBtn = body.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);

  const cart = body.getByTestId("Cart");

  expect(cart.innerHTML).toBe('Cart <span class="font-semibold">(1)</span>');
});
