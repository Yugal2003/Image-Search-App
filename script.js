let inputData = document.querySelector(".inputData"); // console.log(inputData);
let btn = document.querySelector(".btn");  // console.log(btn);
let showData = document.querySelector(".showData");// console.log(showData);
let showMore = document.querySelector("#showMore");// console.log(showMore);

let accessKey = "Z8SF-NGB2rlzaTzlE4E1zbukFVBYWA_zLrWW9bmhZ2A";

let page = 1;

async function getData(inputDataValue,pageNo){
    let fetching = await fetch(`https://api.unsplash.com/search/photos?page=${pageNo}&query=${inputDataValue}&client_id=${accessKey}`);
    let jsonData = await fetching.json();
    //console.log(jsonData); // for show json format data 
    let results = jsonData.results; // console.log(results);

    if(pageNo === 1){
      showData.innerHTML = "";
    }

    if(inputData.value == ""){ //#showmore (saw in css) 
      document.querySelector("#showMore").style.display = "block";;
    }
    else{
      document.querySelector("#showMore").style.display = "block";
    }

    jsonData.results.forEach(function(data){
    //  console.log(data); // for particular data inside foreach results
    let card = document.createElement('div');
    card.classList.add('card');
    let image = document.createElement('img');
    image.src = data.urls.small;
    image.alt = data.alt_description;
    let anchorTag = document.createElement('a');
    anchorTag.href = data.links.html;
    anchorTag.target = "_blank";
    anchorTag.textContent = data.alt_description;

    card.appendChild(image);
    card.appendChild(anchorTag);
    showData.appendChild(card);
    });
};

btn.addEventListener("click", function(){
    let inputDataValue = inputData.value;
    getData(inputDataValue,1);
});

showMore.addEventListener("click", function(){
    getData(inputData.value,page++); //inputdata.value is a value of input type = text
});