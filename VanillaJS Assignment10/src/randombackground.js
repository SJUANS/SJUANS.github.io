const backgroundimgs = [
    "bgimgs/1.jpg",
    "bgimgs/2.jpg",
    "bgimgs/3.jpg",
    "bgimgs/4.jpg",
    "bgimgs/5.jpg",
    "bgimgs/6.jpg",
    "bgimgs/7.jpg",
    "bgimgs/8.jpg",
    "bgimgs/9.jpg",
    "bgimgs/10.jpg",
    "bgimgs/11.jpg",
    "bgimgs/12.jpg"
]

const body = document.querySelector("body");

function setRandomBackground(){
    const selectedBg = backgroundimgs[Math.floor(Math.random()*backgroundimgs.length)]
    body.style.backgroundImage = `url(src/${selectedBg})`
}

setRandomBackground();