import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Book from './Book';

test('renders book information and buttons', () => {
  const handleBorrow = jest.fn();
  const handleReturn = jest.fn();

  const bookData = {
    id: 1,
    title: "Book-1",
    author: "Ram",
    thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    status: "Not Borrowed",
    description: "This is description of Book-1"
  }
  
  const { getByText } = render(<Book book={bookData} handleBorrow={handleBorrow} handleReturn={handleReturn} />);

  expect(getByText(bookData.title)).toBeInTheDocument();
  expect(getByText(bookData.author)).toBeInTheDocument();

  const borrowButton = getByText('Borrow');
  expect(borrowButton).toBeInTheDocument();
  fireEvent.click(borrowButton);
  expect(handleBorrow).toBeCalledWith(bookData.id);  
});