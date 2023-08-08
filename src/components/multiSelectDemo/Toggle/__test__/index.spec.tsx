import { render, screen } from "@testing-library/react";
import { Toggle } from "..";

describe("<Search />", () => {
  it("should render whith open false", () => {
    render(<Toggle open={false}> <h1>Content</h1></Toggle>);
    expect(
      screen.queryByRole("heading", { name: /Content/i })
    ).not.toBeInTheDocument();
  });

  it("should render whith open true", () => {
    render(
      <Toggle open>
        <h1>Content</h1>
      </Toggle>
    );
    expect(
      screen.getByRole("heading", { name: /Content/i })
    ).toBeInTheDocument();
  });
});
