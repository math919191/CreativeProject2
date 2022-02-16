# CreativeProject2

Ideas for API/JS

3 Every day there is a featured book --> special book per day historical day...relating to the holiday. Main cover is the book of the day

1 book covers/reviews
6 Use the api to add author publication reviews and only need book title / isbn 

7 search by author and list the books
search by subject 

9 link to purchase books...

11 Bookshelf IDs (google)

13 figure out how to use google bookshelf?


Possible APIs
https://openlibrary.org/developers/api - contains....

Open Library	Books, book covers and related data	No (auth)	Yes	No (CORS)

Books API - Retrieve a specific work or edition by identifier
Authors API - Retrieve an author and their works by author identifier
Subjects API - Fetch books by subject name
Search API - Search results for books, authors, and more
Search inside API - Search for matching text within millions of books
Partner API - Formerly the "Read" API, fetch one or more books by library identifiers (ISBNs, OCLC, LCCNs)
Covers API - Fetch book covers by ISBN or Open Library identifier
Recent Changes API - Programatic access to changes across Open Library

http://www.penguinrandomhouse.biz/webservices/rest/ - contains..
Penguin Publishing	Books, book covers and related data	No	Yes	Yes
.
Author
Any one of a book's contributors including roles such as author, illustrator, or reader.
Event
An author event such as a book signing. Event records reference an author and possibly a title as well as specifications of the time and place of the event.
Title
A reference to a specific version of a book identified by an ISBN. For example the Hardcover and Paperback versions of a book are considered separate titles.
Work
A collection of titles that share the same content identified by a Penguin Random House-specific Work ID. Different formats of a title are collected under the same Work ID.

https://developers.google.com/books/
 Google Books	Books	OAuth	Yes	Unknown
search and browse through the list of books that match a given query.
view information about a book, including metadata, availability and price, links to the preview page.
manage your own bookshelves
Also lets you search
intitle: Returns results where the text following this keyword is found in the title.
inauthor: Returns results where the text following this keyword is found in the author.
inpublisher: Returns results where the text following this keyword is found in the publisher.
subject: Returns results where the text following this keyword is listed in the category list of the volume.
isbn: Returns results where the text following this keyword is the ISBN number.
lccn: Returns results where the text following this keyword is the Library of Congress Control Number.
oclc: Returns results where the text following this keyword is the Online Computer Library Center number.

