import { render, screen} from "@testing-library/react";
import { Label } from "..";

describe("Label component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Label>Hello, World!</Label>);
    const labelElement = getByText("Hello, World!");
    expect(labelElement).toBeInTheDocument();
  });

  it("passes additional props correctly", () => {
    const htmlForValue = "inputField";
    render(
      <>
        <Label htmlFor={`${htmlForValue}`}>Username:</Label>
        <input id={htmlForValue} type="text" />
      </>
    );

    const labelElement = screen.getByLabelText("Username:");

    expect(labelElement.previousSibling).toHaveAttribute("for", "inputField");
  });
});
