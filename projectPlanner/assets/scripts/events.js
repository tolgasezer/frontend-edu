const button = document.querySelector('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('This was clicked!');
};

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {
//   console.log(event);
// });

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);  
});

const div = document.querySelector('div');

const list = document.querySelector('ul');

list.addEventListener('click', event =>{
  event.target.closest('li').classList.toggle('highlight');
})

div.addEventListener('mouseenter', event => {
  console.log('clicked div');
  console.log(event);

});

button.addEventListener('mouseenter', event =>{
  event.stopPropagation(); //it stops ancestor element's click listener
  console.log('clicked button');
  console.log(event);
});