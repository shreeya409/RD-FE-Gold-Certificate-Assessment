// //components/Book.js
// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import './Book.css';

// const Book = ({ book, handleBorrow, handleReturn }) => {
//   return (
//     <Card className='cardContainer'>
//       <Card.Img variant="top" src={book.thumbnail} />
//       <Card.Body>
//         <Card.Title>{book.title}</Card.Title>
//         <Card.Text>
//           {book.author}
//         </Card.Text>
//         <Card.Text>Description: {book.description}</Card.Text>
//         {book.status === "Not Borrowed" && <Button variant="primary" onClick={() => handleBorrow(book.id)}>Borrow</Button>}
//         {book.status === "Borrowed" && <Button variant="primary" onClick={() => handleReturn(book.id)}>Return</Button>}
//       </Card.Body>
//     </Card>
//   );
// }

// export default Book;


// --------------------final code ------------

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Book.css';

const Book = ({ book, handleBorrow, handleReturn }) => {

  const borrowBook = () => {
    if (book.status === "Borrowed") {
      alert("This book is currently borrowed by someone else.");
    } else {
      handleBorrow(book.id); 
    }
  }

  return (
    
    <Card className='cardContainer'>
      <Card.Img variant="top" src={book.thumbnail} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          {book.author}
        </Card.Text>
        <Card.Text>
          {book.description}
        </Card.Text>
        {book.status === "Not Borrowed" && <Button variant="primary" onClick={borrowBook}>Borrow</Button>}
        {book.status === "Borrowed" && <Button variant="primary" onClick={() => handleReturn(book.id)}>Return</Button>}
      </Card.Body>
    </Card>
  );
};

export default Book;







