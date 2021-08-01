import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./Form";
import {
    RepoProvider,
    RepoContext,
    initialState
} from "../../context/repo_context";

it("renders correctly", () => {
    const getRepos = jest.fn();
    const updateType = jest.fn();
    const setSearch = jest.fn();
    const { queryByTestId, queryByPlaceholderText } = render(
        <RepoContext.Provider
            value={{ ...initialState, getRepos, updateType, setSearch }}>
            <Form />
        </RepoContext.Provider>
    );
    expect(queryByTestId("search-form-input")).toBeTruthy();
    expect(queryByPlaceholderText("Search user repository...")).toBeTruthy();
});

describe("Input value", () => {
    it("updates of change", () => {
        const { queryByPlaceholderText } = render(
            <RepoProvider>
                <Form />
            </RepoProvider>
        );

        const searchInput = queryByPlaceholderText("Search user repository...");
        fireEvent.change(searchInput, { target: { value: "test" } });
        expect(searchInput.value).toBe("test");
    });
});

describe("Search button", () => {
    describe("with empty query", () => {
        it("does not trigger getRepos function", () => {
            const getRepos = jest.fn();
            const { queryByTestId } = render(
                <RepoProvider>
                    <Form />
                </RepoProvider>
            );

            fireEvent.click(queryByTestId("form-submit-btn"));
            expect(getRepos).not.toHaveBeenCalled();
        });
    });
});
