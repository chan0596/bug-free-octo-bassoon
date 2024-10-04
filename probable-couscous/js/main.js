const log = console.log;
// log('hello');

const h2 = document.querySelector('main > h2'); // element or null

h2['title'] = 'new mouseover text'; //properties of HTML elements
h2.title = 'new content'; //property

h2.getAttribute('title'); 
h2.setAttribute('title','Hello Darryl');

const username = 'valeria';
const span = h2.querySelector('span');
span.textContent = 'Jerome';
span.innerHTML = `<i style="font-size: 3rem;">${username}</i>`
log(span);
log(h2);
let elements = document.querySelectorAll('p, span, div');
log(elements);



const img = document.querySelector('main img');
log(typeof img); //object
//log( img instanceof HTMLElement); //what kind of thing

log(img.tagName === 'IMG');
log(img.localName === 'img'); //easy to remember and use
log(img instanceof HTMLImageElement)
img.src = 'https://picsum.photos/800/100';
// img.setAttribute('src','))
img.alt = 'new skinny image';