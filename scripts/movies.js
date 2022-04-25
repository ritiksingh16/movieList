// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page




let movie = document.querySelector("#search").value;
// function run() {
//     reQuest(movie);


reQuest(movie)
// }
async function reQuest(movie) {
    try {
        let result = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5ed1c4af&s=${movie}`)
        let data = await result.json();
        display(data);
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
function display(data) {

    let movies = document.querySelector("#movies");
    movies.innerHTML = "";

    
        let div = document.createElement("div")
        div.className = "box1"
       

        let box1 = document.createElement("div")

        let box2 = document.createElement("div")

        let imge = document.createElement("img")
        imge.src = data.Poster
       

        let name = document.createElement("h4")
        name.innerText = data.Title
        
        let button = document.createElement("button")
        button.innerText="Book Movie"
        button.addEventListener("click",function(){
            window.location.href="checkout.html"
        })

    

        box1.append(imge);
        box2.append(name,button)

        box2.className = "box2"

        div.append(box1, box2)
        movies.append(div)
    }

