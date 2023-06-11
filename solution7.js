var books = [
    { title: 'Wuthering Heights', author: 'Emily Brontë' },
    { title: 'Beloved', author: 'Toni Morrison' },
    { title: 'Anna Karenina', author: 'Leo Tolstoy' },
    { title: 'Atonement', author: 'Ian McEwan' },
    { title: 'Frankenstein', author: 'Mary Shelley' }
  ];

function arrBook(books) {
    const titles = [];
    for (let i = 0; i < books.length; i++) {
      titles[titles.length] = (books[i].title);
    }
    return titles;
  }
  
  // Call the function and print the resulting array
  const bookTitles = arrBook(books);
  console.log(bookTitles);