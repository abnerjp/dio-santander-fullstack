// const BASE_URL = "https://thatcopy.pw/catapi/rest/"
const BASE_URL = "https://api.thecatapi.com/v1/images/search/"
const catBtn = document.getElementById("change-cat");
const catImg = document.getElementById("cat");


const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    console.log("JSON:", json);
    console.log("JSON URL:", json[0].url);
    return json[0].url;
  } catch(e) {
    console.log(e);
  }
};

const loadImg = async () => {
  catImg.src = await getCats();
};

catBtn.addEventListener("click", loadImg);