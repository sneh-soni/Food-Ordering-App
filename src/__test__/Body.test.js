import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../components/Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import Store from "../utils/Store";
import { Dummy_Data } from "../mocks/DummyApi";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Dummy_Data);
    },
  });
});

test("Search updates homepage or not", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={Store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(expect(body.getByTestId("restaurents")));

  const searchInput = body.getByTestId("search-input");

  fireEvent(searchInput, {
    target: {
      value: "Beef",
    },
  });

  const searchBtn = body.getByTestId("search-Btn");

  fireEvent.click(searchBtn);

  const resList = body.getByTestId("res-List");

  expect(resList.children.length).toBe(1);
});
