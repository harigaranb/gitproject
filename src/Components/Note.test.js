import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Note from './Note';

test('renders Note component without crashing', () => {
  render(<Note index={0} note="Test Note" deleteNote={() => {}} editNote={() => {}} />);
});

test('displays note text and buttons when not in editing mode', () => {
  render(<Note index={0} note="Test Note" deleteNote={() => {}} editNote={() => {}} />);
  expect(screen.getByText('Test Note')).toBeInTheDocument();
  expect(screen.getByText('Edit')).toBeInTheDocument();
  expect(screen.getByText('Delete')).toBeInTheDocument();
});

test('switches to editing mode when "Edit" button is clicked', () => {
  render(<Note index={0} note="Test Note" deleteNote={() => {}} editNote={() => {}} />);
  const editButton = screen.getByText('Edit');
  fireEvent.click(editButton);
  const inputElement = screen.getByRole('textbox');
  expect(inputElement).toBeInTheDocument();
});

test('calls editNote function with updated note when "Save" button is clicked', () => {
  const mockEditNote = jest.fn();
  render(<Note index={0} note="Test Note" deleteNote={() => {}} editNote={mockEditNote} />);
  const editButton = screen.getByText('Edit');
  fireEvent.click(editButton);
  const saveButton = screen.getByText('Save');
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Updated Note' } });
  fireEvent.click(saveButton);
  expect(mockEditNote).toHaveBeenCalledWith(0, 'Updated Note');
});

test('calls deleteNote function when "Delete" button is clicked', () => {
  const mockDeleteNote = jest.fn();
  render(<Note index={0} note="Test Note" deleteNote={mockDeleteNote} editNote={() => {}} />);
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  expect(mockDeleteNote).toHaveBeenCalledWith(0);
});
