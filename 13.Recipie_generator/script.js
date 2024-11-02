
const url="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

let getData=()=>{
    fetch(url)
        .then(data=>data.json())
        .then(item=>console.log(item));
}

getData();