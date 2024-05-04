// Filtering and Capitalizing: Books Published After 2010 with Author Names.
const books = [
    { title: "Book1", author: "john doe", year: 2005 },
    { title: "Book2", author: "jane smith", year: 2012 },
    { title: "Book3", author: "bob brown", year: 1999 },
    { title: "Book4", author: "aliceWilliams", year: 2015 },
    { title: "Book5", author: "charlie Davis", year: 2000 },
  ];
  
  const filteredBooks = books.filter(book => book.year >= 2010).map(book => ({
    ...book,
    author: book.author.toUpperCase(),
  }));
  
  console.log(filteredBooks);