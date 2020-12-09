import React from "react";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import store from '../../../state/index';
import Home from '../home';
import { render, fireEvent } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";

it("MAIN START BUTTON", () => {
    const { getByTestId } = render(<Provider store={store}><StaticRouter><Home /></StaticRouter></Provider>);
    expect(getByTestId("main-button")).toBeTruthy();
});

it("RENDER START BUTTON", () => {
    const { getByTestId } = render(<Provider store={store}><StaticRouter><Home /></StaticRouter></Provider>);
    expect(getByTestId("button-start")).toHaveTextContent("Start");
});

it('ON CLICK ON START BUTTON', () => {
    const { getByText } = render(<Provider store={store}><StaticRouter><Home /></StaticRouter></Provider>);

    fireEvent.click(getByText('Start'));
    // expect(store.dispatch).toHaveBeenCalledTimes(2);
});