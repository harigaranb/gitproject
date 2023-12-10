import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteList from './NoteList';

const mockNotes = ['Test Note 1', 'Test Note 2', 'Another Note'];

test('renders NoteList component without crashing', () => {
  render(<NoteList notes={mockNotes} deleteNote={() => {}} editNote={() => {}} searchQuery="" />);
});

test('renders the correct number of Note components based on provided notes', () => {
  render(<NoteList notes={mockNotes} deleteNote={() => {}} editNote={() => {}} searchQuery="" />);
  const noteElements = screen.getAllByRole('listitem');
  expect(noteElements).toHaveLength(mockNotes.length);
});

test('renders only notes that match the search query', () => {
  render(<NoteList notes={mockNotes} deleteNote={() => {}} editNote={() => {}} searchQuery="test" />);
  const noteElements = screen.getAllByRole('listitem');
  expect(noteElements).toHaveLength(2); // Only 'Test Note 1' and 'Test Note 2' match the search query
});

test('calls deleteNote function when a Note components "Delete" button is clicked', () => {
  const mockDeleteNote = jest.fn();
  render(<NoteList notes={mockNotes} deleteNote={mockDeleteNote} editNote={() => {}} searchQuery="" />);
  const deleteButtons = screen.getAllByText('Delete');
  deleteButtons.forEach((button, index) => {
    fireEvent.click(button);
    expect(mockDeleteNote).toHaveBeenCalledWith(index);
  });
});

test('calls editNote function when a Note component is edited and saved', () => {
  const mockEditNote = jest.fn();
  render(<NoteList notes={mockNotes} deleteNote={() => {}} editNote={mockEditNote} searchQuery="" />);
  const editButtons = screen.getAllByText('Edit');
});
