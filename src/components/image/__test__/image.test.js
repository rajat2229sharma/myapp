import React from "react";
import Image from '../image';
import { fireEvent, queryByTestId, render, } from "@testing-library/react";
import store from "../../../state/index";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";

import configureStore from 'redux-mock-store';
import { createRenderer } from "react-dom/test-utils";
const mockStore = configureStore([]);

describe("RANDOM PAGE AND ITS COMPONENT", () => {

    it("RANDOM IMAGE PAGE RENDER", () => {
        const { getByTestId } = render(<Provider store={store}><StaticRouter><Image /></StaticRouter></Provider>);
        expect(getByTestId("random-img-page")).toBeTruthy();
    })

    it("LOADING MESSAGE RENDER", () => {
        let store = mockStore({
            image: {
                url: ""
            }
        })
        const { getByTestId } = render(<Provider store={store}><StaticRouter><Image /></StaticRouter></Provider>);
        expect(getByTestId("loading")).toBeTruthy();
    })

    it("ERROR MESSAGE RENDER", () => {
        let store = mockStore({
            image: {
                error: true
            }
        })
        const { getByTestId } = render(<Provider store={store}><StaticRouter><Image /></StaticRouter></Provider>);
        expect(getByTestId("retry-button")).toBeTruthy();
    })

    it("IMAGE AND BUTTON RENDER", () => {
        let store = mockStore({
            finish: false,
            image: {
                url: "customURL",
                error: false,
            }
        })
        const { getByTestId } = render(<Provider store={store}><StaticRouter><Image /></StaticRouter></Provider>);
        expect(getByTestId("random-image")).toBeTruthy();
        expect(getByTestId("like-button")).toBeTruthy();
        expect(getByTestId("dislike-button")).toBeTruthy();
        expect(getByTestId("next-button")).toBeTruthy();
        expect(getByTestId("finish-button")).toBeTruthy();
    })

    // it("BUTTON CLICKED AND VALUE CHANGE", () => {
    //     let store = mockStore({
    //         totalLikes: 3,
    //         finish: false,
    //         image: {
    //             url: "customURL",
    //             error: false,
    //         }
    //     })
    //     store.dispatch = jest.fn();
    //     const { getByTestId } = render(<Provider store={store}><StaticRouter><Image /></StaticRouter></Provider>);
    //     fireEvent.click(getByTestId('like-button'));

    // })
})