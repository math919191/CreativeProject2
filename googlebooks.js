//https://developers.google.com/books/docs/v1/using#APIKey
//https://developers.google.com/books/docs/v1/libraries
let KEY= "AIzaSyC3b16m7c_Z258vd4Q-KlwVcoH__WIJa44";



function makeCardGoogle(title, author, imagesrc){

    let card = "";
    card += '<div class="book">';
    card += '<div class="rec-book">';
    
    card += "<img src=" + imagesrc + "/>";
    
    card += '</div><div class="description">';
    card += '<h6>' + title + '</h6>';
    card +=  '<p>' + author + '</p>';
    card += '</div></div>';
    return card;

}

function usefulGoogle(){
    console.log("here");
    let descript = "huck";
    let author = "twain";
    //const myurl = "https://openlibrary.org/isbn/" + isbn + ".json";
    let myurl = "https://www.googleapis.com/books/v1/volumes?q=" + descript + "+inauthor:" + author + "&key=" + KEY;

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
             console.log(json.items[0].volumeInfo.title);
             console.log(json.items[0].volumeInfo.authors);
             
             let imagesrc = json.items[0].volumeInfo.imageLinks.thumbnail;
             let title = json.items[0].volumeInfo.title;
             let author = json.items[0].volumeInfo.authors;
             let card = makeCardGoogle(title, author, imagesrc);
             
             document.getElementById("test2").innerHTML = card;
        })

}

usefulGoogle();