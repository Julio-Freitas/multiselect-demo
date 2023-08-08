import { render, screen } from "@testing-library/react";
import { Chip } from "..";

describe("<Chip />", () => {
  it("should render corretcly", () => {
    render(
      <Chip>
        <div data-testid="chip" />
      </Chip>
    );
    expect(screen.getByTestId("chip")).toBeInTheDocument();
  });
});
