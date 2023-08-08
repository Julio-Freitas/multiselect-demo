import { render, screen } from "@testing-library/react";
import { Search } from "..";

describe("<Search />", () => {
  it("should render corretcly", () => {
    render(<Search type="text" placeholder="search" />);
    expect(screen.getByPlaceholderText("search")).toBeInTheDocument();
  });
});
