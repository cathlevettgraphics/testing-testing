describe('The color picker page Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/color-picker'); // change URL to match your dev URL
  });

  it('contains a grey button', () => {
    cy.contains('grey');
  });

  it('clicks the grey button', () => {
    cy.contains('grey').click();
  });

  it('contains a lime button', () => {
    cy.contains('lime');
  });

  it('clicks the lime button', () => {
    cy.contains('lime').click();
  });

  it('contains a reset button', () => {
    cy.contains('reset');
  });

  it('clicks the reset button', () => {
    cy.contains('reset').click();
  });

  it('clicking "weather" navigates to weather page', () => {
    cy.contains('weather').click();
    cy.url().should('include', '/weather');
  });
});

// describe('the color picker component', () => {
//   it('should have a heading', () => {
//     const heading = screen.getByText(/color picker/i);
//     expect(heading).toBeInTheDocument();
//   });

//   it('should have a grey button', () => {
//     const btnDarkGrey = screen.getByTestId('btn-darkgrey');
//     expect(btnDarkGrey).toBeInTheDocument();
//   });

//   it('should have a lime button', () => {
//     const btnLime = screen.getByTestId('btn-lime');
//     expect(btnLime).toBeInTheDocument();
//   });

//   it('should have a reset button', () => {
//     const btnReset = screen.getByTestId('btn-reset');
//     expect(btnReset).toBeInTheDocument();
//   });

//   it('background color should change to grey when button clicked', () => {
//     const btnDarkGrey = screen.getByTestId('btn-darkgrey');
//     const currentColour = screen.getByTestId('component-container');
//     fireEvent.click(btnDarkGrey);
//     expect(currentColour.style.backgroundColor).toBe('darkgrey');
//   });

//   it('background color should change to lime when button clicked', () => {
//     const btnLime = screen.getByTestId('btn-lime');
//     const currentColour = screen.getByTestId('component-container');
//     fireEvent.click(btnLime);
//     expect(currentColour.style.backgroundColor).toBe('lime');
//   });

//   it('background color should reset when button clicked', () => {
//     const btnReset = screen.getByTestId('btn-reset');
//     const currentColour = screen.getByTestId('component-container');
//     fireEvent.click(btnReset);
//     expect(currentColour.style.backgroundColor).toBe('white');
//   });

//   it('save current color to local storage', () => {
//     const spy = jest.spyOn(Storage.prototype, 'setItem');
//     render(<ColorPicker spy={spy} />);
//     expect(spy).toHaveBeenCalled();
//     spy.mockRestore();
//   });
// });
