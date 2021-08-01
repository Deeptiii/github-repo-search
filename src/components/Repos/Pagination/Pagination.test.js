import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

// it("check pagination render", () => {
//     const { queryByTestId } = render(<Pagination />);
//     const list = queryByTestId("pagination");
//     expect(list).toBeTruthy();
// });

describe("update current page", () => {
    it("updates current page number", () => {
        const { queryByTestId } = render(
            <Pagination currentPage={1} totalPages={10} />
        );
        const currentPage = queryByTestId("active");
        expect(currentPage.textContent).toBe("1");
    });
});
