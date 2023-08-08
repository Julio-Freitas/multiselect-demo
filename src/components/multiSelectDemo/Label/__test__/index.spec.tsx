import { render, screen } from "@testing-library/react";
import { Label } from "..";

describe("<Label />", () => {
  it("should render corretcly", () => {
    render(
      <Label>
        <div data-testid="Label" />
      </Label>
    );
    expect(screen.getByTestId("Label")).toBeInTheDocument();
  });
});
