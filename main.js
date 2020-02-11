const paragraphMain = document.querySelector('p');
paragraphMain.style.color = 'lightBlue';

const hOneHead = document.querySelector('h1');
hOneHead.style.fontSize = '5em';

paragraphMain.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.';

const itemThirteen = document.querySelector('#item-13');
itemThirteen.style.opacity = '.5';

const itemThree = document.querySelector('#item-3');
itemThree.innerText = 'I say, "Hi!"';

const imageAtTheEndOfList = document.querySelector('img');
imageAtTheEndOfList.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';
imageAtTheEndOfList.style.height = '300px';


const newLi = document.createElement('li');
newLi.innerText = 'Won\'t get fooled again'
newLi.id = 'item-16';
newLi.class = 'item';

const list = document.querySelector('ul');
list.appendChild(newLi);

const secondImageAtTheEndOfList = document.createElement('img');
secondImageAtTheEndOfList.src = './9c6090cba91a92156480d6468e38fa0f.jpg';
secondImageAtTheEndOfList.style.height = '300px';
const secondImageInDiv = document.querySelector('div');
secondImageInDiv.appendChild(secondImageAtTheEndOfList);