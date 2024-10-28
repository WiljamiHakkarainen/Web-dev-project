/* tehdään navigointipalkkiin ominaisuus, joka mahdollistaa sen avaamisen alaspäin ja sulkemisen */
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})
function clearAll() {
    const meme = document.querySelector(".meme-content");
    const joke = document.querySelector(".joke-content");
    const image = document.querySelector(".image-content");
  
    meme.innerHTML = "";
    joke.innerHTML = "";
    image.innerHTML = "";
  }
  /* Funktio meemejä näyttävälle napille */
  function showMeme() {
    const randomMemeUrl = getRandomData("memes");
    const memeContainer = document.querySelector(".meme-content");
    const newMeme = document.createElement("img");
    newMeme.setAttribute("src", randomMemeUrl);
  
    clearAll();

    memeContainer.appendChild(newMeme);
  }
  /* Funktio vitsejä näyttävälle napille */
  function showJoke() {
    const randomJokeText = getRandomData("jokes");
  
    const jokeContainer = document.querySelector(".joke-content");
    const newJoke = document.createElement("p");
    newJoke.textContent = randomJokeText;
  
    clearAll();
  
    jokeContainer.appendChild(newJoke);
  }
  /* Funktio kirottuja kuvia näyttävälle napille */
  function CursedImage() {
    const RandomImageUrl = getRandomData("images");
  
    const ImageContainer = document.querySelector(".image-content");
    const newImage = document.createElement("img");
    newImage.setAttribute("src", RandomImageUrl);
  
    clearAll();

    ImageContainer.appendChild(newImage);
  }
  
  /* Funktio satunnaiselle datalle */ 
  function getRandomData(type) {
    return data[type][rn(data[type].length)];
  }
  
  /* Lähteet meemeille */
  const memes = [
    "https://i.redd.it/a0v87gwzoge61.jpg",
    "https://i.redd.it/q29egav34ee61.jpg",
    "https://i.redd.it/iij16swxjie61.jpg",
    "https://i.redd.it/vek7dm2hrge61.jpg",
    "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
    "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png",
    "https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg",
    "https://code-love.com/wp-content/uploads/2019/03/download.jpeg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg",
    "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
  ];
  
  /* Lähteet vitseille */
  const jokes = [
    "This statement",
    "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
    "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
    "All programmers are playwrights, and all computers are lousy actors.",
    "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
    "The generation of random numbers is too important to be left to chance.",
    "Debugging: Removing the needles from the haystack.",
    "“Debugging” is like being the detective in a crime drama where you are also the murderer.",
    "There are two ways to write error-free programs; only the third one works.",
    "The best thing about a Boolean is even if you are wrong, you are only off by a bit.",
  ];
 /* Lähteet kirotuille kuville */ 
  const images = [
    "https://m.media-amazon.com/images/M/MV5BZDYyZTM4MDYtOGVjZi00ZjZhLWFmMTktODRhYWY2ODJmYTIxXkEyXkFqcGdeQXVyMTExMTAxNjA2._V1_QL75_UY281_CR155,0,190,281_.jpg",
    "https://pbs.twimg.com/media/CvRkG5qUMAAJ6rz.jpg",
    "https://www.indy100.com/media-library/not-seen-u00a0-obunga-before-you-won-t-forget-it-in-a-hurry.png?id=31362927&width=776&quality=80",
    "https://static.wikia.nocookie.net/615f71d7-a0cd-4558-bbb0-7422f536fba0/scale-to-width/755",
    "https://hypixel.net/attachments/48oz9af9inq11-jpg.3011055/",
    "https://images-cdn.9gag.com/photo/aerq28O_700b.jpg",
    "https://i.chzbgr.com/full/9273239040/h40276077/cursed-image-bun-head-eating-hotdog",
    "https://pyxis.nymag.com/v1/imgs/55c/50d/92b3f892b6d460f9f0fcd90b30a4f57d22-10-momo.rsocial.w1200.jpg",
    "https://i.insider.com/5c4f82575241474a69558b27?width=1136&format=jpeg",
    "https://i.chzbgr.com/full/9513512704/h968CA052/person-bee",
    "https://www.boredpanda.com/blog/wp-content/uploads/2022/01/cursed-weird-images-no-context-1-61dc04f86b4a8__700.jpg",
    "https://img.buzzfeed.com/buzzfeed-static/static/2018-06/7/8/asset/buzzfeed-prod-web-05/sub-buzz-3196-1528374725-1.jpg?crop=750%3A765%3B0%2C235&downsize=700%3A%2A&output-quality=auto&output-format=auto",
    "https://pic1.mangapicgallery.com/r/essay/e9/md_/1880902_14949601.jpg"



  ];
  
  function rn(len) {
    return Math.floor(Math.random() * len);
  }

  /* Datatyypit */
  const data = {
    memes,
    jokes,
    images,
  };