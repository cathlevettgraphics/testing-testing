import { render, screen, fireEvent } from '@testing-library/react';
import Weather from './../Weather';

describe('the weather api element', () => {
  test('should have a heading', () => {
    render(<Weather />);
    const heading = screen.getByText(/today's weather/i);
    expect(heading).toBeInTheDocument();
  });

  test('should be strapline', () => {
    render(<Weather />);
    const strapline = screen.getByText(/search for the weather where you are/i);
    expect(strapline).toBeInTheDocument();
  });

  test('should be input box', () => {
    render(<Weather />);
    const userInput = screen.getByTestId('search-input');
    expect(userInput).toBeInTheDocument();
  });

  test('should be search button', () => {
    render(<Weather />);
    const searchBtn = screen.getByTestId('search-btn');
    expect(searchBtn).toBeInTheDocument();
  });

  test('should collect userInput', () => {
    render(<Weather />);
    const onChange = screen.getByTestId('search-input');
    expect(onChange).toBeInTheDocument();
  });

  test('should have default city of london', async () => {
    render(<Weather />);
    const inputCity = screen.getByTestId('search-input');
    expect(inputCity.value).toBe('london');
  });

  test('should log data to console when search button used', () => {
    render(<Weather />);
  });

  test('should save to local storage', () => {
    render(<Weather />);
    // Test here
  });
  
  test('should load data from local storage', () => {
    render(<Weather />);
    // Test here
  });
  
  test('should render data to the page', () => {
    render(<Weather />);
    // Test here
  });
});
