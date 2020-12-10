import React from "react";
import Result from "../result";
import { getByText, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe("RESULT PAGE AND ITS COMPONENTS", () => {
    let store;
    beforeEach(() => {

        store = mockStore({
            totalLike: 1,
            totalDislike: 2,
            userList:[
                {
                    userEmail: "rajat@gmail.com",
                    like: 0,
                    dislike: 1,
                },
            ],
            finish: true,
        })
    })

    it("RESULT PAGE RENDERS", () => {
        const { getByTestId } = render(<Provider store={store}><StaticRouter><Result /></StaticRouter></Provider>)
        expect(getByTestId("result-page")).toBeInTheDocument();
    })

    it("LIKE AND DISLIKE RENDERS", () => {
        const { getByTestId } = render(<Provider store={store}><StaticRouter><Result /></StaticRouter></Provider>)
        expect(getByTestId("total-like")).toHaveTextContent(`Total Likes : 1`);
        expect(getByTestId("total-dislike")).toHaveTextContent(`Total Dislikes : 2`);
    })
})

describe("RESULT PAGE COMPONENT WHEN NOT FINISHED", () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            finish: false,
        })
    })
    it("SORRY MESSAGE RENDERS", () => {
        const { getByTestId } = render(<Provider store={store}><StaticRouter><Result /></StaticRouter></Provider>)
        expect(getByTestId("sorry-message")).toBeInTheDocument();
    })
})
