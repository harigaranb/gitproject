import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

test('renders Search component without crashing', () => {
  render(<Search handleSearch={() => {}} />);
});

test('renders input field with placeholder text', () => {
  render(<Search handleSearch={() => {}} />);
  const inputElement = screen.getByPlaceholderText('Search notes');
  expect(inputElement).toBeInTheDocument();
});

test('calls handleSearch function when typing in the search input', () => {
  const mockHandleSearch = jest.fn();
  render(<Search handleSearch={mockHandleSearch} />);
  const inputElement = screen.getByPlaceholderText('Search notes');
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect(mockHandleSearch).toHaveBeenCalledWith('test');
});

test('clears the input field when the handleSearch function is called with an empty string', () => {
  const mockHandleSearch = jest.fn();
  render(<Search handleSearch={mockHandleSearch} />);
  const inputElement = screen.getByPlaceholderText('Search notes');
  fireEvent.change(inputElement, { target: { value: 'test' } });
  expect(inputElement.value).toBe('test');
  fireEvent.change(inputElement, { target: { value: '' } });
  expect(inputElement.value).toBe('');
});

test('handles special characters in the search input', () => {
  const mockHandleSearch = jest.fn();
  render(<Search handleSearch={mockHandleSearch} />);
  const inputElement = screen.getByPlaceholderText('Search notes');
  fireEvent.change(inputElement, { target: { value: '!@#$%^&*()' } });
  expect(mockHandleSearch).toHaveBeenCalledWith('!@#$%^&*()');
});
