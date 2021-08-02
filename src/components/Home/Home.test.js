import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";
import {
    FilterContext,
    initialFilterState
} from "../../context/filter_context";
import { RepoContext } from "../../context/repo_context";

describe("Show home page", () => {
    it("Show home page when not loading", () => {
        const updateSort = jest.fn();
        const { queryByTestId } = render(
            <RepoContext.Provider value={{ isLoading: false }}>
                <FilterContext.Provider
                    value={{ ...initialFilterState, updateSort }}>
                    <Home />
                </FilterContext.Provider>
            </RepoContext.Provider>
        );
        expect(queryByTestId("loader")).toBeFalsy();
        expect(queryByTestId("repo-list")).toBeTruthy();
    });
    it("Shows loader when loading", () => {
        const updateSort = jest.fn();
        const { queryByTestId } = render(
            <RepoContext.Provider value={{ isLoading: true }}>
                <FilterContext.Provider
                    value={{ ...initialFilterState, updateSort }}>
                    <Home />
                </FilterContext.Provider>
            </RepoContext.Provider>
        );
        expect(queryByTestId("loader")).toBeTruthy();
    });
});
