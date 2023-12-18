/** Simple web application displaying a random cat fact
 * at a click of a button by calling the cat fact API 
 * at https://catfact.ninja and a random cat image from thecatapi.com
 */

const button = document.querySelector("#newFactButton");
const fact = document.querySelector("#factText");
const image = document.querySelector("#catImage")


/**
 * Using axios to call catfact API
 */
const getCatFact = async () => {
  try {
    const res = await axios.get("https://catfact.ninja/fact");
    fact.textContent = res.data.fact;
  } catch (e) {
    fact.textContent = "no cat fact available at the moment";
    console.log(e);
  }
}
/**
 * Calling thecatapi for a random cat picture
 */
const getCatImg = async () => {
  try {
    const res = await axios.get("https://api.thecatapi.com/v1/images/search");
    image.src = res.data[0].url;
  } catch(e) {
    img.src = "placeholder.jpg";
    console.log(e);
  }
}

//sets initial text to random cat fact
fact.textContent = getCatFact();

//sets initial image to random cat image
image.src = getCatImg();

button.addEventListener("click", function(e) {
  getCatFact();
  getCatImg();
});

