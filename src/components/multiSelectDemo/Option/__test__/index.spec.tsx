import { render, screen } from "@testing-library/react";
import { Option } from "..";

describe("<Option />", () => {
  it("should render corretcly", () => {
    render(
      <Option>
        <div data-testid="option" />
      </Option>
    );
    expect(screen.getByTestId("option")).toBeInTheDocument();
  });
});
