const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav-conteiner");

//  burger 

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("burger-active");
  navMenu.classList.toggle("menu-active");
})



// Slider
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
  
      activateDot(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
};
slider();
  

let productS = [
  {
    photoS: src="assets/img/services img/img1.png",
    titleS: "titles",
},
  {
  photoS: src="assets/img/services img/img2.png",
  titleS: "titles",
},
{
  photoS: src="assets/img/services img/img3.png",
  titleS: "titles",
},
{
  photoS: src="assets/img/services img/img4.png",
  titleS: "titles",
},
{
  photoS: src="assets/img/services img/img5.png",
  titleS: "titles",
},
{
  photoS: src="assets/img/services img/img6.png",
  titleS: "titles",
}
]


const serviceConteiner = document.querySelector(".services-conteiner");

let htmlCodeCardSe = ``;
productS.forEach(function(objectS){
htmlCodeCardSe += 
`<div class="services-card-wrapper" id="product">
    <img id="photo" src="${objectS.photoS}">

    <h2 id="title">${objectS.titleS}</h2>

    <p id="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.</p>
  
</div> 
`

});

serviceConteiner.innerHTML += htmlCodeCardSe;

const cardList = document.querySelectorAll(".services-card-wrapper");

let modalImg = document.querySelector(".card-modal-img");
let modalTitle = document.querySelector(".card-modal-title");
const cardModal = document.querySelector(".modal-conteiner")

cardList.forEach((card, index) => {
card.addEventListener('click', () => {
  let newImg = productS[index].photoS
  let newTitle = productS[index].titleS
  modalImg.src= newImg;
  newTitle.innerHTML = newTitle;
  cardModal.style.display = "inline-block";
  console.log(55);
  console.log();
})

})

console.log(5+3);




