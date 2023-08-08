import { render, screen } from "@testing-library/react";
import { MultiSelectRoot } from "..";

describe("<MultiSelectRoot />", () => {
  it("should render corretcly", () => {
    render(
      <MultiSelectRoot>
        <div data-testid="test"/>
      </MultiSelectRoot>
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});
