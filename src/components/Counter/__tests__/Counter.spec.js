import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './../Counter';

describe('the counter component', () => {
  test('it should be have a heading', () => {});
  render(<Counter />);
  const heading = screen.getByText(/another counter/i);
  expect(heading).toBeInTheDocument();

  test('should display count to user', () => {
    render(<Counter />);
    const countDisplay = screen.getByTestId('counter-display');
    expect(countDisplay).toBeInTheDocument();
  });

  test('it should match a starting value', () => {
    render(<Counter />);
    const countDisplay = screen.getByTestId('counter-display');
    expect(countDisplay.textContent).toBe('0');
  });

  test('start value can be set', () => {
    render(<Counter startValue="5" />);
    const countDisplay = screen.getByTestId('counter-display');
    expect(countDisplay.textContent).toBe('5');
  });

  test('it should have an increment button', () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment-btn');
    expect(incrementBtn).toBeInTheDocument();
  });

  test('it should have an decrement button', () => {
    render(<Counter />);
    const decrementBtn = screen.getByTestId('decrement-btn');
    expect(decrementBtn).toBeInTheDocument();
  });

  test('count value should increase by 1 when increment button clicked', () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment-btn');
    const countDisplay = screen.getByTestId('counter-display');
    fireEvent.click(incrementBtn);
    expect(countDisplay.textContent).toBe('1');
  });

  test('count value should decrease by 1 when decrement button clicked', () => {
    render(<Counter />);
    const decrementBtn = screen.getByTestId('decrement-btn');
    const countDisplay = screen.getByTestId('counter-display');
    fireEvent.click(decrementBtn);
    expect(countDisplay.textContent).toBe('-1');
  });

  test('Spy test', () => {
    // Spy – Normally this would be a parent function
    const handler = (...args) => console.log(args);
    const spy = jest.fn(handler);
    render(<Counter spy={spy} />);

    const incrementBtn = screen.getByTestId('increment-btn');

    // Get value back
    const spyBtn = screen.getByTestId('spy-button');
    fireEvent.click(spyBtn);
    // expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.calls[0][0]).toBe(0);

    // Increment and call spy button again
    fireEvent.click(incrementBtn);
    fireEvent.click(spyBtn);
    expect(spy.mock.calls[1][0]).toBe(1);
  });

  test('save count value to local storage', () => {
    const spy = jest.spyOn(Storage.prototype, 'setItem');
    render(<Counter spy={spy} />);
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
