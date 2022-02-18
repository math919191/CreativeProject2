//https://developers.google.com/books/docs/v1/using#APIKey
//https://developers.google.com/books/docs/v1/libraries
let KEY= "AIzaSyC3b16m7c_Z258vd4Q-KlwVcoH__WIJa44";



function makeCardGoogle(title, author, imagesrc){
    let card = "";

    card += '<div class="book">';
    card += '<div class="rec-book">';
    // card += "<img " + "class='rec-image' " + "src=" + imagesrc + "/>";
    card += '</div><div class="description">';
    card += '<h6>' + title + '</h6>';
    card +=  '<p>' + author + '</p>';
    card += '</div></div>';
    return card;
}

function usefulGoogle(title){
    console.log("here");
    let descript = title;
    let author = "";
    //const myurl = "https://openlibrary.org/isbn/" + isbn + ".json";
    let myurl = "https://www.googleapis.com/books/v1/volumes?q=" + descript + "&key=" + KEY;

    console.log(myurl);
    fetch(myurl)
        .then(function(response) {
            return response.json();
        }).then(function(json){
            console.log(json);

            //  let description = json.description; 
            //  console.log(description);
            //  let results = "";
            //  results += '<h2>Weather in ' + json.description + "</h2>";
        
            //  results += "<p>";
            //  results += description;
            //  results += "</p>";
            //  results += "<img src='https://covers.openlibrary.org/b/isbn/";
            //  results += isbn;

            //  results += "-M.jpg' />";

             //document.getElementById("test").innerHTML = results;

            
             //let card = makeCard(isbn, json.title, description);
            let cards = "";
            let myBooks = json.items;

             for (let i = 0; i < myBooks.length; i++ ){
                // let imagesrc = json.items[i].volumeInfo.imageLinks.thumbnail;
                let myTitle = json.items[i].volumeInfo.title;
                let author = json.items[i].volumeInfo.authors;
                let card = makeCardGoogle(myTitle, author, "");
                cards += card;

             }
             
             document.getElementById("b").innerHTML = cards;
        })

}

function loadBooks(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    console.log(title);
    usefulGoogle(title);
}

document.getElementById("search").addEventListener('click', loadBooks);

// usefulGoogle();