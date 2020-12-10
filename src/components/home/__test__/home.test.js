import React from "react";
import Home from '../home';
import { render, fireEvent, waitFor, screen, prettyDOM, findByText, queryByTestId, findByTestId, wait } from "@testing-library/react";
// import store from "../../../state/index";
import { Provider } from "react-redux";
import { Route, StaticRouter } from "react-router-dom";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

let store = mockStore();

test("HOME PAGE RENDER SUCCESSFULLY", () => {
    const { queryByTestId } = render(<Provider tyestider store={store}><StaticRouter><Home /></StaticRouter></Provider>);
    expect(queryByTestId("home-page")).toBeInTheDocument();
})

test("START BUTTON RENDER SUCCESSFULLY", () => {
    const { queryByTestId } = render(<Provider store={store}><StaticRouter><Home /></StaticRouter></Provider>);
    expect(queryByTestId("start-button")).toHaveTextContent('Start');
})

test("REDIRECT ON BUTTON CLICK", async () => {
    const { getByTestId }= render(<Provider store={store}><StaticRouter><Home /></StaticRouter></Provider>);
    fireEvent.click(getByTestId('start-button'), { button: 0 });
    // await wait( );
})

