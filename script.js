
const BOOKS = [
    {title: "Just Mercy", isbn: 9780812994520},
    {title: "", isbn: 9780590353403}

    ];
    
function makeCard(isbn, title, description){

    let card = "";
    card += '<div class="book">';
    card += '<div class="rec-book">';

    card += "<img src='https://covers.openlibrary.org/b/isbn/";
    card += isbn;
    card += "-M.jpg' />";

    card += '</div><div class="description">';
    card += '<h6>' + title + '</h6>';
    card +=  '<p>' + description + '</p>';
    card += '</div></div>';

    return card;


}

function useful(isbn){

    const myurl = "https://openlibrary.org/isbn/" + isbn + ".json";

    console.log(myurl);
    fetch(myurl)
        .then(function(response) {
            return response.json();
        }).then(function(json){
            console.log(json);


        


             let description = json.description; 
             console.log(description);
             let results = "";
             results += '<h2>Weather in ' + json.description + "</h2>";
        
             results += "<p>";
             results += description;
             results += "</p>";
             results += "<img src='https://covers.openlibrary.org/b/isbn/";
             results += isbn;

             results += "-M.jpg' />";

             //document.getElementById("test").innerHTML = results;

            
             let card = makeCard(isbn, json.title, description);
             document.getElementById("test").innerHTML = card;
        })

}

//useful(9780812994520);
//useful(9780747532743);

