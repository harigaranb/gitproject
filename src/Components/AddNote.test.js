import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddNote from './AddNote';

test('renders AddNote component without crashing', () => {
  render(<AddNote />);
});

test('updates input value when typing', () => {
  render(<AddNote />);
  const inputElement = screen.getByPlaceholderText('Enter a new note');
  fireEvent.change(inputElement, { target: { value: 'Test note' } });
  expect(inputElement.value).toBe('Test note');
});

test('calls addNote function with the correct note when "Add Note" button is clicked', () => {
  const mockAddNote = jest.fn();
  render(<AddNote addNote={mockAddNote} />);
  const inputElement = screen.getByPlaceholderText('Enter a new note');
  fireEvent.change(inputElement, { target: { value: 'Test note' } });
  const addButton = screen.getByText('Add Note');
  fireEvent.click(addButton);
  expect(mockAddNote).toHaveBeenCalledWith('Test note');
});

test('does not call addNote function when "Add Note" button is clicked with an empty note', () => {
  const mockAddNote = jest.fn();
  render(<AddNote addNote={mockAddNote} />);
  const addButton = screen.getByText('Add Note');
  fireEvent.click(addButton);
  expect(mockAddNote).toHaveBeenCalled();
});

test('clears input field after adding a note', () => {
  const mockAddNote = jest.fn();
  render(<AddNote addNote={mockAddNote} />);
  const inputElement = screen.getByPlaceholderText('Enter a new note');
  fireEvent.change(inputElement, { target: { value: 'Test note' } });
  const addButton = screen.getByText('Add Note');
  fireEvent.click(addButton);
  expect(inputElement.value).toBe('');
});
