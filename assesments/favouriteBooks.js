/* A list of person's favourite books is stored as an array of objects 
with each favourite book's value is stored as an array. 
Return favourite books and its count, if the count is same sort it by alphabetic order, 
use javascript and it's functions */

const sortBasedonFavoriteBooks = (people_with_favourite_books) => {
  const favourite_books_list = people_with_favourite_books
    .flatMap((people) => people.favouriteBooks)
    .reduce((favouriteBooks, book) => {
      favouriteBooks[book] = (favouriteBooks[book] ?? 0) + 1;
      return favouriteBooks;
    }, {});

  let favourite_books_list_array = Object.entries(favourite_books_list);

  return favourite_books_list_array
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      }
      return b[1] - a[1];
    })
    .map(([book, number]) => ({ [book]: number }));
};

function main() {
  const people = [
    { name: "Patrick", favouriteBooks: ["Zero to One", "Bible", "A Mind for Numbers"] },
    { name: "John", favouriteBooks: ["Harry Potter", "Bible", "1984", "To Kill a Mockingbird"] },
    { name: "Bob", favouriteBooks: ["Harry Potter", "Bible", "War and Peace", "Great Expectations"] },
  ];

  const books_ranking = sortBasedonFavoriteBooks(people);

  console.log(books_ranking);
}

main();
