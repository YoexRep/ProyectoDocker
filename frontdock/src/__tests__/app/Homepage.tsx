import { render, screen } from "@testing-library/react";

import Homepage from "../../app/page";

//Para agrupar las pruebas del homepage
describe("Homepage", () => {
  // beforeEach(() => {

  // });

  it("should renders 'Mensaje oculto'", () => {
    render(<Homepage />);

    expect(
      screen.getByText("Mensaje oculto actualizado con cicd")
    ).toBeInTheDocument();
  });

  it("should render buttons with text 'Mostrar mensaje' followed by anything", () => {
    render(<Homepage />);

    // Busca todos los elementos que coincidan con la expresión regular
    const buttons = screen.getAllByText(/Mostrar mensaje.*/i);

    // Verifica que hay exactamente 3 botones
    expect(buttons).toHaveLength(3);

    // Opcional: Verifica que cada botón tenga el texto esperado
    buttons.forEach((button, index) => {
      expect(button).toHaveTextContent(`Mostrar mensaje ${index + 1}`);
    });
  });
});
