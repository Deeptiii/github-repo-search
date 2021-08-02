import React from "react";
import { render } from "@testing-library/react";
import Pagination from "./Pagination";

describe("update current page", () => {
    it("updates current page number", () => {
        const { queryByTestId } = render(
            <Pagination currentPage={5} totalPages={10} />
        );
        const currentPage = queryByTestId("active");
        expect(currentPage.textContent).toBe("5");
    });
});
