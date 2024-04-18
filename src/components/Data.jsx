const bookData = [
    {
        id:1,
        title: "Book-1",
        author: "Ram",
        thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
        status: "Not Borrowed",
        description: "This is description of Book-1"
    },
    {
        id:2,
        title: "Book-2",
        author: "John",
        thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
        status: "Not Borrowed",
        description: "This is description of Book-2"
    },
    {
        id:3,
        title: "Book-3",
        author: "Raju",
        thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
        status: "Not Borrowed",
        description: "This is description of Book-3"
    },
    {
        id:4,
        title: "Book-4",
        author: "Sita",
        thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
        status: "Not Borrowed",
        description: "This is description of Book-4"
    },
 
    {
        id:5,
        title: "Book-5",
        author: "Siri",
       thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
        status: "Not Borrowed",
        description: "This is description of Book-5"
    },
    {
        id:6,
        title: "Book-6",
        author: "Ramesh",
       thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
        status: "Not Borrowed",
        description: "This is description of Book-6"
    }
   
   
]

export default bookData;


//----------------------------------------------- 

// const bookData = [
//     {
//         id: 1,
//         title: "Book-1",
//         author: "Ram",
//         thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
//         status: "Not Borrowed",
//         description: "This is description of Book-1"
//     },
//     {
//         id: 2,
//         title: "Book-2",
//         author: "John",
//         thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
//         status: "Not Borrowed",
//         description: "This is description of Book-2"
//     },
//     {
//         id: 3,
//         title: "Book-3",
//         author: "Raju",
//         thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
//         status: "Not Borrowed",
//         description: "This is description of Book-3"
//     },
//     {
//         id: 4,
//         title: "Book-4",
//         author: "Bheem",
//         thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
//         status: "Not Borrowed",
//         description: "This is description of Book-4"
//     },

//     {
//         id: 5,
//         title: "Book-5",
//         author: "Siri",
//         thumbnail: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
//         status: "Not Borrowed",
//         description: "This is description of Book-5"
//     },
// ];

// const updateStatus = (bookId) => {
//     return bookData.map(book => {
//         if (book.id === bookId) {
//             // Toggle between "Not Borrowed" and "Borrowed"
//             const newStatus = book.status === "Not Borrowed" ? "Borrowed" : "Not Borrowed";
//             return { ...book, status: newStatus };
//         }
//         return book;
//     });
// };

// export { bookData, updateStatus };

