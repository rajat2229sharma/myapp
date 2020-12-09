import React from "react";
// import { createStore } from "redux";
import { Provider } from "react-redux";
import store from '../../state/index'
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom";
import Image from './image';

it("RENDER RANDOM IMAGE", () => {
    const { getByTestId } = render(<Provider store={store}><StaticRouter><Image /></StaticRouter></Provider>);
    expect(getByTestId("main-image")).toBeTruthy();
});
