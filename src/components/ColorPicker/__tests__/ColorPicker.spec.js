import { render, screen, fireEvent } from '@testing-library/react';
import ColorPicker from './../ColorPicker';

describe('the color picker component', () => {
  test('should have a heading', () => {
    render(<ColorPicker />);
    const heading = screen.getByText(/color picker/i);
    expect(heading).toBeInTheDocument();
  });

  test('should have a grey button', () => {
    render(<ColorPicker />);
    const btnDarkGrey = screen.getByTestId('btn-darkgrey');
    expect(btnDarkGrey).toBeInTheDocument();
  });

  test('should have a lime button', () => {
    render(<ColorPicker />);
    const btnLime = screen.getByTestId('btn-lime');
    expect(btnLime).toBeInTheDocument();
  });

  test('should have a reset button', () => {
    render(<ColorPicker />);
    const btnReset = screen.getByTestId('btn-reset');
    expect(btnReset).toBeInTheDocument();
  });

  test('background color should change to grey when button clicked', () => {
    render(<ColorPicker />);
    const btnDarkGrey = screen.getByTestId('btn-darkgrey');
    const currentColour = screen.getByTestId('component-container');
    fireEvent.click(btnDarkGrey);
    expect(currentColour.style.backgroundColor).toBe('darkgrey');
  });

  test('background color should change to lime when button clicked', () => {
    render(<ColorPicker />);
    const btnLime = screen.getByTestId('btn-lime');
    const currentColour = screen.getByTestId('component-container');
    fireEvent.click(btnLime);
    expect(currentColour.style.backgroundColor).toBe('lime');
  });

  test('background color should reset when button clicked', () => {
    render(<ColorPicker />);
    const btnReset = screen.getByTestId('btn-reset');
    const currentColour = screen.getByTestId('component-container');
    fireEvent.click(btnReset);
    expect(currentColour.style.backgroundColor).toBe('white');
  });

  test('save current color to local storage', () => {
    const spy = jest.spyOn(Storage.prototype, 'setItem');
    render(<ColorPicker spy={spy} />);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
