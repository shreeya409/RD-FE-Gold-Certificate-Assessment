// Import useState and useEffect from React

// import React, { useEffect, useState } from 'react';
// import Book from './Book';
// import bookData from '../components/Data';

// const LibraryComponent = () => {
//   const [books, setBooks] = useState([]); // Books State
//   const [search, setSearch] = useState(''); //Search State

//   useEffect(() => {
//     setBooks(bookData);
//   }, []);


// const handleBorrow = (id) => {
//     setBooks(
//       books.map((book) =>
//         book.id === id ? { ...book, status: 'Borrowed' } : book,
//       ),
//     );
//   };

//   const handleReturn = (id) => {
//     setBooks(
//       books.map((book) =>
//         book.id === id ? { ...book, status: 'Not Borrowed' } : book,
//       ),
//     );
//   };

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   // Filter books based on search query
//   const filteredBooks = books.filter(
//     (book) =>
//       book.title.toLowerCase().includes(search.toLowerCase()) ||
//       book.author.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         onChange={handleSearch}
//         type="text"
//         placeholder="Search Books"
//         value={search}
//       />
//       {filteredBooks.map((book) => (  
//         <Book
//           key={book.id}
//           book={book}
//           handleBorrow={handleBorrow}
//           handleReturn={handleReturn}
//         />
//       ))}
//     </div>
//   );
// };

// export default LibraryComponent;




// import React, { useEffect, useState } from 'react';
// import Book from './Book';
// import bookData from '../components/Data';

// const LibraryComponent = () => {
//   const [books, setBooks] = useState([]); // Books State
//   const [search, setSearch] = useState(''); //Search State

//   useEffect(() => {
//     setBooks(bookData);
//   }, []);


//   const handleBorrow = (id) => {
//     setBooks(
//       books.map((book) => {
//         if (book.id === id) {
//           if (book.status === "Borrowed") {
//             alert("This book is currently borrowed by someone else.");
//             return book; 
//           } else {
//             return { ...book, status: 'Borrowed' } 
//           }
//         } else {
//           return book; 
//         }
//       })
//     );
//   };

//   const handleReturn = (id) => {
//     setBooks(
//       books.map((book) =>
//         book.id === id ? { ...book, status: 'Not Borrowed' } : book,
//       ),
//     );
//   };

//   const handleSearch = (e) => {
//     setSearch(e.target.value);
//   };

//   // Filter books based on search query
//   const filteredBooks = books.filter(
//     (book) =>
//       book.title.toLowerCase().includes(search.toLowerCase()) ||
//       book.author.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         onChange={handleSearch}
//         type="text"
//         placeholder="Search Books"
//         value={search}
//       />
//       {filteredBooks.map((book) => (  
//         <Book
//           key={book.id}
//           book={book}
//           handleBorrow={handleBorrow}
//           handleReturn={handleReturn}
//         />
//       ))}
//     </div>
//   );
// };

// export default LibraryComponent;



// ---------------try ofr search box



import React, { useEffect, useState } from 'react';
import Book from './Book';
import bookData from '../components/Data';
import './LibraryComponent.css';
import './Book.css';
import {InputGroup,FormControl} from 'react-bootstrap';

const LibraryComponent = () => {
  const [books, setBooks] = useState([]); // Books State
  const [search, setSearch] = useState(''); //Search State

  useEffect(() => {
    setBooks(bookData);
  }, []);

  const handleBorrow = (id) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          if (book.status === "Borrowed") {
            alert("This book is currently borrowed by someone else.");
            return book; 
          } else {
            return { ...book, status: 'Borrowed' } 
          }
        } else {
          return book; 
        }
      })
    );
  };

  const handleReturn = (id) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, status: 'Not Borrowed' } : book,
      ),
    );
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filter books based on search query
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <InputGroup className="searchBox" id='searchBox'>
        <FormControl
          type="text"
          placeholder="&#128269; Search Books"
          value={search}
          onChange={handleSearch}
        />
      </InputGroup>

    <div className='booklist-container'>
        {filteredBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            handleBorrow={handleBorrow}
            handleReturn={handleReturn}
          />
        ))}
      </div>





    </div>
  );
};

export default LibraryComponent;



