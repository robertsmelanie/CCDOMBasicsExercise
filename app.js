//1
//const xMen = document.getElementById(div); incorrect
//correct answer
const xMen = document.getElementById('x-men');

// 2
const centered = document.getElementsByClassName('center');

// 3
const batman = document.querySelector('#batman');

// 4
//const h1 = document.querySelectorAll('h1'); incorrect 
// correct
const h3s = document.querySelectorAll('h3');

// 5a
const h1 = document.querySelector('h1');

// 5b
h1.innerText = 'The Best Animated Superhero Tv Shows Ever!';

// 6a
const honorableMentions = document.getElementById('honorable-mentions');
// or
// const honorableMentions = document.querySelector('#honorable-mentions');

// 6b
honorableMentions.innerHTML = '<p>OTHER GREAT SHOWS</p>';

// 7a
const aTag = document.querySelector('a');

// 7b
aTag.href = "https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/&quot";
// or
aTag.innerHTML = '<a href="https://fandomwire.com/15-greatest-animated-superhero-shows-ever-made-ranked/&quot">The Best Animated Superhero TV shows Ever</a>';

// 8
h1.classList.add('background', 'text-color');

// 9 
h1.classList.remove('background');

// 10a
const h4 = document.createElement('h4');

// 10 b
h4.innerText = 'Is Avatar: The Last Airbender A Superhero Show?';

// 10 c
const body=document.querySelector('body');
body.prepend(h4);

// 11a
const h5 = document.createElement('h5');

// 11b
h5.innerText = 'Heroes in a half shell Turtle Power!';

// 11c
aTag.insertAdjacentElement('afterend', h5);

// 12
const superman = document.querySelector('ul>li');
superman.remove();
//or
// document.querySelector('ul>li').remove();

//BONUS
// 13a
const divs = document.querySelectorAll('div');

// 13b
for (i = 0; i < divs.length; i++){
    divs[i].classList.toggle('background');
}

//or 
/* for (d of divs){
    d.classList.toggle('background');
}
*/

// 14 a
const avengers = [
    "Forever ", 
    "Fight ", 
    "As ", 
    "One ", 
    "AVENGERS ", 
    "ASSEMBLE!"

];

// 14b
for (i = 0; i < avengers.length; i ++){
    const spanLoop = document.createElement('span');
    spanLoop.innerText = `${avengers[i]}`;
    body.append(spanLoop);
}

/* or
for (a of avengers){
    const spanLoop = document.createElement('span');
    spanLoop.innerText = `${a}`;
    body.append(spanLoop);
}
*/