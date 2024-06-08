let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++
  if(slideIndex > slides.length){slideIndex = 1}
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides,2000)
}

const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Sustainability Starter Kit",
    price: 10.99,
    image: [
      {
        code: "kit",
        img: "https://static.wixstatic.com/media/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_a12b3feb70ae46139eee97c99f6ecebf~mv2.webp",
      },
    ],
  },
  {
    id: 2,
    title: "Plant Based Reusable Cups",
    price: 2.39,
    image: [
      {
        code: "cups",
        img: "https://static.wixstatic.com/media/ead566_14e75a560cbc411ead722de92eaf8189~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_14e75a560cbc411ead722de92eaf8189~mv2.webp",
      },
    ],
  },
  {
    id: 3,
    title: "Reusable Bamboo Straws",
    price: 1.99,
    image: [
      {
        code: "straw",
        img: "https://static.wixstatic.com/media/ead566_1e4ebac233ca43019bafaa65d0a4eeb1~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_1e4ebac233ca43019bafaa65d0a4eeb1~mv2.webp",
      },
    ],
  },
  {
    id: 4,
    title: "Bamboo Toothbrush",
    price: 2.99,
    image: [
      {
        code: "brush",
        img: "https://static.wixstatic.com/media/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_15c1739b1d054071b975f1fdee7a8759~mv2.webp",
      },
    ],
  },
  {
    id: 5,
    title: "Plant Based Reusable Containers",
    price: 2.39,
    image: [
      {
        code: "containers",
        img: "https://static.wixstatic.com/media/ead566_53f4426d550441a19ffaa69e7f03dafd~mv2.jpg/v1/fill/w_1000,h_562,al_c,q_85/ead566_53f4426d550441a19ffaa69e7f03dafd~mv2.webp",
      },
    ],
  },
  {
    id: 6,
    title: "Natural Bamboo Loofah",
    price: 2.99,
    image: [
      {
        code: "loofah",
        img: "https://static.wixstatic.com/media/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.jpg/v1/fill/w_1225,h_689,al_c,q_85,usm_0.66_1.00_0.01/ead566_f6bd1296bdc747c0b1ecd468719a05e4~mv2.webp",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductimage = document.querySelectorAll(".imgs");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "€" + choosenProduct.price;
    currentProductImg.src = choosenProduct.image[0].img;

    //assing new image
    currentProductimage.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.image[index].code;
    });
  });
});

currentProductimage.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.image[index].img;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 *4
  boxes.forEach(box =>{
    const boxtop = box.getBoundingClientRect().top

    if(boxtop < triggerBottom){
      box.classList.add('show')
    }
    else{
      box.classList.remove('show')
    }
  })
}