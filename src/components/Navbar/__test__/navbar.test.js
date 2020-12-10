import React from "react";
import Navbar from "../navbar";
import { getByText, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../state/index";
import { BrowserRouter } from "react-router-dom";

test("NAVBAR RENDER SUCCESSFULLY", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
    );
    expect(getByTestId('nav-bar')).toBeTruthy();
})

test("APP NAME RENDER SUCCESSFULLY", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
    );
    expect(getByTestId('app-name')).toHaveTextContent('Unsplash Random Image');
})

test("NAVBAR LINKS RENDER SUCCESSFULLY", () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        </Provider>
    );
    expect(getByTestId('nav-item-home')).toHaveTextContent("Home");
    expect(getByTestId('nav-item-random-image')).toHaveTextContent('Random Image');
    expect(getByTestId('nav-item-result')).toHaveTextContent('Result');
})