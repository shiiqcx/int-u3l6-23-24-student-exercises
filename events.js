// We have all of these actions below that we wants to tie to an event!


let hoverCard = document.querySelector('[data-secret="hover"]');
hoverCard.addEventListener("mouseover", function() {
  let image = document.querySelector('.hidden-image');
  image.style.width = '100%';
  image.style.height = '100%';
  image.style.opacity = '1';
});


hoverCard.addEventListener("mouseout", function() {
  let image = document.querySelector('.hidden-image');
  image.style.width = '0';
  image.style.height = '0';
  image.style.opacity = '0';
});



const clickCard = document.querySelector('[data-secret="click"]');
clickCard.addEventListener("click", function() {
  clickCard.classList.toggle('revealed');
});


const doubleClickCard = document.querySelector('[data-secret="double-click"]');
doubleClickCard.addEventListener("dblclick", function() {
  doubleClickCard.classList.toggle('revealed');
});

const keypressCard = document.querySelector('[data-secret="keypress"]');
document.addEventListener("keydown", function() {
  keypressCard.classList.add('revealed');
  keypressCard.style.animation = "shake 0.5s";
});



document.addEventListener("keyup", function ()
{
  keypressCard.classList.remove('revealed');
  keypressCard.style.animation = "";
});
