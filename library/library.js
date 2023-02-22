const books = [
  {
    id: 01,
    title: "The Hobbit",
    author: "J.R.R Tolkien",
    description: "Journey of a hobbit to kill a dragon",
  },
  {
    id: 02,
    title: "Game of Thrones",
    author: "George R.R Martin",
    description: "People sitting around playing a game of thrones",
  },
  {
    id: 03,
    title: "The Lord of The Rings",
    author: "J.R.R Tolkien",
    description: "About a guy and some rings",
  },
  {
    id: 04,
    title: "World War Z",
    author: "Max Brooks",
    description: "Zombies and shiz",
  },
  {
    id: 05,
    title: "The Bible",
    author: "Jesus and Friends",
    description: "Bible stuff",
  },
  {
    id: 06,
    title: "Harry Potter 1",
    author: "J.K Rowling",
    description: "Magic boy",
  },
  {
    id: 07,
    title: "Harry Potter 2",
    author: "J.K Rowling",
    description: "Magic boy",
  },
  {
    id: 08,
    title: "Harry Potter 3",
    author: "J.K Rowling",
    description: "Magic boy",
  },
  {
    id: 09,
    title: "Harry Potter 4",
    author: "J.K Rowling",
    description: "Magic boy",
  },
  {
    id: 010,
    title: "Harry Potter 5",
    author: "J.K Rowling",
    description: "Magic boy",
  },
];

let clearSearchButton;
let logoutButton;
let searchInput;
let sort;
let resultsContainer;

function setup() {
  clearSearchButton = document.querySelector(".clearSearch");
  clearSearchButton.addEventListener("click", clearSearch);
  searchInput = document.querySelector(".searchBar");
  searchInput.addEventListener("keyup", searchBooks);
  resultsContainer = document.querySelector(".searchResults");
}

function displayBooks(booksarr) {
  for (let i = resultsContainer.children.length - 1; i >= 0; i--) {
    resultsContainer.removeChild(resultsContainer.children[i]);
  }
  const divarr = booksarr.map((book) => {
    const div = document.createElement("div");

    div.classList.add("resultItem");
    const bookTitle = document.createElement("span");
    const author = document.createElement("span");

    const authorNode = document.createTextNode(`Author: ${book.author}`);

    const titleNode = document.createTextNode(`${book.title}`);
    bookTitle.appendChild(titleNode);

    author.appendChild(authorNode);
    div.appendChild(bookTitle);
    div.appendChild(author);

    const btn = document.createElement("button");
    // .appendChild(document.createTextNode("View")

    resultsContainer.appendChild(div);
  });
}

function searchBooks() {
  // first find value of search input
  //   filter, compare with books array
  // return matches and display

  const searchTerm = document.querySelector(".searchBar").value;
  const regEx = new RegExp(searchTerm, "gi");
  const filteredArr = books.filter(
    (b) => b.title.match(regEx) || b.author.match(regEx)
  );

  if (filteredArr.length < 1) {
  }

  displayBooks(filteredArr);
}
function clearSearch() {
  searchInput.value = "";
  displayBooks(books);
}

function logout() {
  const logoutButton = document.querySelector(".logoutButton");
  logoutButton.addEventListener("click");
}

// invokes all functions

setup();
displayBooks(books);
