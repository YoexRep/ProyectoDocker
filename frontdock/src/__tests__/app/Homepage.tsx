import {render, screen} from '@testing-library/react';


import Homepage from '../../app/page';

//Para agrupar las pruebas del homepage
describe("Homepage", () => {

    beforeEach(() => {

        render(<Homepage />);

    });

it("should renders 'Saludos'", () => {

 
    expect(screen.getByText("Saludos:")).toBeInTheDocument();


});

it("should renders 'Saludame con 1'", () => {

    expect(screen.getByText(/Saludame con 1/i)).toBeInTheDocument();


});


});

