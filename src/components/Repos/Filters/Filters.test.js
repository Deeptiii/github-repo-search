import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Filter from "./Filter";
import {
    FilterContext,
    initialFilterState
} from "../../../context/filter_context";

describe("Filter form", () => {
    it("should be hidden", () => {
        const { queryByTestId } = render(
            <FilterContext.Provider value={{ ...initialFilterState }}>
                <Filter />
            </FilterContext.Provider>
        );
        const toggleBtn = queryByTestId("filters-toggle");
        const filterForm = queryByTestId("filters-form");
        expect(toggleBtn).toBeTruthy();
        expect(filterForm).toBeFalsy();
    });
});
