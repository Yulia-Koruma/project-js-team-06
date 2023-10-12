const shoppingList = document.querySelector(".shopping-list");
const emptyMessage = document.querySelector(".empty-message");


function hasBooksInLocalStorage() {
    return localStorage.getItem('shoppingList') !== null;
}


function displayEmptyMessage() {
    emptyMessage.style.display = 'block';
}


function displayBooks() {
    shoppingList.innerHTML = ''; 

    if (!hasBooksInLocalStorage()) {
        displayEmptyMessage();
        return;
    }

    emptyMessage.style.display = 'none';

    
    const savedBooks = JSON.parse(localStorage.getItem('shoppingList'));
    savedBooks.forEach(book => {
        const bookCard = createBookCard(book);
        shoppingList.appendChild(bookCard);
    });
}


function removeBookFromList(book) {
    const savedBooks = JSON.parse(localStorage.getItem('shoppingList'));
    const bookIndex = savedBooks.findIndex(savedBook => savedBook.title === book.title);
    if (bookIndex !== -1) {
        savedBooks.splice(bookIndex, 1);
        localStorage.setItem('shoppingList', JSON.stringify(savedBooks));
        displayBooks();
    }
}


displayBooks();