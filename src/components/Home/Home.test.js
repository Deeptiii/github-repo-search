import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./Home";
import {
    FilterContext,
    initialFilterState
} from "../../context/filter_context";
import { RepoContext, initialState } from "../../context/repo_context";

it("Shows loader", () => {
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
