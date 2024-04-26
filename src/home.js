import tobacco from './images/tobacco.jpeg';
import rat from './images/rat.jpeg';
import knife from './images/knife.webp';

function homePage() {
    const hContent = document.getElementById('content');
    const intro = document.createElement('div');
    intro.className = 'intro';
    const tImg = document.createElement('img');
    tImg.src = tobacco;
    tImg.className = 'tob'
    const rImg = document.createElement('img');
    rImg.src = rat;
    rImg.className = 'ra'
    const kImg = document.createElement('img');
    kImg.src = knife;
    kImg.className = 'knif'
    intro.appendChild(tImg);
    intro.appendChild(rImg);
    intro.appendChild(kImg);
    hContent.appendChild(intro);

    const square2 = document.createElement('div');
    square2.className = 'square'
    const addy = document.createElement('p');
    addy.innerHTML = '312 S Washington St,<br>Seattle, WA';
    const welcome = document.createElement('h2');
    welcome.textContent = 'Welcome to Rudy$ Diner'
    const message = document.createElement('p');
    message.textContent = 'At Rudy$ Diner, every item is a masterpiece made by a masterchef. Each entree boasts an amazing, yet delicate balance between all the flavors you could ever dream of. The delectable aroma of the food attracts customers like a moth to a flame hehehe. ';
    square2.appendChild(addy);
    square2.appendChild(welcome);
    square2.appendChild(message);
    hContent.appendChild(square2);
}

export default homePage;