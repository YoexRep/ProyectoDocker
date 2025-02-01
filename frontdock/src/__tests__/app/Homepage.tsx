import { render, screen } from "@testing-library/react";

import Homepage from "../../app/page";

//Para agrupar las pruebas del homepage
describe("Homepage", () => {
  // beforeEach(() => {

  // });

  it("should renders 'Saludos'", () => {
    render(<Homepage />);

    expect(screen.getByText("Saludos ahora con worflows:")).toBeInTheDocument();
  });

  it("should renders 'Saludame con 1'", () => {
    render(<Homepage />);
    expect(screen.getByText(/Saludame con 1/i)).toBeInTheDocument();
  });
});
