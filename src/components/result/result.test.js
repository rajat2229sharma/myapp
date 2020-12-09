import React from "react";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import store from '../../state/index'
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";
import Result from './result';

it("RENDER RESULT FOR RANDOM IMAGE", () => {
    const { getByTestId, getByText } = render(<Provider store={store}><StaticRouter><Result /></StaticRouter></Provider>);
    expect(getByTestId("result-random-image")).toBeTruthy();
});
