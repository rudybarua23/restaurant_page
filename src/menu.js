import pizzaImage from './images/pizza_pie.webp';
import steak from './images/steak.jpeg';
import tacos from './images/tacos.jpeg';
import shrimp from './images/shrimp.jpeg';
import pumpkinpie from './images/pumpkinpie.jpeg';
import salad from './images/salad.jpeg';

function createMenu() {
    console.log("createMenu called");
    const head = document.getElementById('head');
    const mContent = document.getElementById('content');
    const entrees = document.createElement('div');
    entrees.textContent = 'Our Signature Entrees';
    entrees.className = 'entree';
    head.appendChild(entrees);
    const left = document.createElement('div');
    left.className = 'left';
    const right = document.createElement('div');
    right.className = 'right';

    const menuIntro = document.createElement('div');
    menuIntro.classList.add('food1');
        // Create the containing div
        const container = document.createElement('div');
        container.className = 'image-container'; // For styling purposes
        
        // Create the image element
        const img = document.createElement('img');
        img.src = pizzaImage;

        const textContainer = document.createElement('div');
        textContainer.className = 'text-container';
        
        // Create the description paragraph
        const title = document.createElement('h2');
        title.textContent = 'PIZZA PIE (Italiano)'
        const desc = document.createElement('p');
        desc.textContent = 'Classic italian pizza with romano cheese and robust marinara sause'
        
        // Append the image and description to the container
        textContainer.appendChild(title);
        textContainer.appendChild(desc);
        container.appendChild(img);
        container.appendChild(textContainer);
        menuIntro.appendChild(container);
        left.appendChild(menuIntro)
    
    const food_2 = document.createElement('div');
    food_2.classList.add('food2');
        // Create the containing div
        const container2 = document.createElement('div');
        container2.className = 'image-container'; // For styling purposes
        
        // Create the image element
        const img2 = document.createElement('img');
        img2.src = steak;

        const textContainer2 = document.createElement('div');
        textContainer2.className = 'text-container';
        
        // Create the description paragraph
        const title2 = document.createElement('h2');
        title2.textContent = 'BIG OL STEAK';
        const desc2 = document.createElement('p');
        desc2.textContent = 'Just a big ol steak with garnish and good ol A1 steak sauce';
        
        // Append the image and description to the container
        textContainer2.appendChild(title2);
        textContainer2.appendChild(desc2);
        container2.appendChild(img2);
        container2.appendChild(textContainer2);
        food_2.appendChild(container2);
        left.appendChild(food_2);

    const food_3 = document.createElement('div');
    food_3.classList.add('food3');
        // Create the containing div
        const container3 = document.createElement('div');
        container3.className = 'image-container'; // For styling purposes
        
        // Create the image element
        const img3 = document.createElement('img');
        img3.src = tacos;

        const textContainer3 = document.createElement('div');
        textContainer3.className = 'text-container';
        
        // Create the description paragraph
        const title3 = document.createElement('h2');
        title3.textContent = 'SPICY TACOS'
        const desc3 = document.createElement('p');
        desc3.textContent = 'Delicious tacos with texas pete hot sauce';
        
        // Append the image and description to the container
        textContainer3.appendChild(title3);
        textContainer3.appendChild(desc3);
        container3.appendChild(img3);
        container3.appendChild(textContainer3);
        food_3.appendChild(container3);
        left.appendChild(food_3);

    const food_4 = document.createElement('div');
    food_4.classList.add('food4');
            // Create the containing div
            const container4 = document.createElement('div');
            container4.className = 'image-container'; // For styling purposes
            
            // Create the image element
            const img4 = document.createElement('img');
            img4.src = shrimp;
    
            const textContainer4 = document.createElement('div');
            textContainer4.className = 'text-container';
            
            // Create the description paragraph
            const title4 = document.createElement('h2');
            title4.textContent = 'LIL SHRIMP KEV'
            const desc4 = document.createElement('p');
            desc4.textContent = 'Inspired by Kevin, Lil Shrimp Kev is a high protein shrimp dish with tasty Peruvian seasoning';
            
            // Append the image and description to the container
            textContainer4.appendChild(title4);
            textContainer4.appendChild(desc4);
            container4.appendChild(img4);
            container4.appendChild(textContainer4);
            food_4.appendChild(container4);
            right.appendChild(food_4);

    const food_5 = document.createElement('div');
    food_5.classList.add('food5');
            // Create the containing div
            const container5 = document.createElement('div');
            container5.className = 'image-container'; // For styling purposes
            
            // Create the image element
            const img5 = document.createElement('img');
            img5.src = pumpkinpie;
    
            const textContainer5 = document.createElement('div');
            textContainer5.className = 'text-container';
            
            // Create the description paragraph
            const title5 = document.createElement('h2');
            title5.textContent = 'BEAUTIFUL PUMPKIN PIE'
            const desc5 = document.createElement('p');
            desc5.textContent = 'The best pumpkinpie you have ever had. Creamy, tasty, and fulfilling.';
            
            // Append the image and description to the container
            textContainer5.appendChild(title5);
            textContainer5.appendChild(desc5);
            container5.appendChild(img5);
            container5.appendChild(textContainer5);
            food_5.appendChild(container5);
            right.appendChild(food_5);

    const food_6 = document.createElement('div');
    food_6.classList.add('food6');
            // Create the containing div
            const container6 = document.createElement('div');
            container6.className = 'image-container'; // For styling purposes
            
            // Create the image element
            const img6 = document.createElement('img');
            img6.src = salad;
    
            const textContainer6 = document.createElement('div');
            textContainer6.className = 'text-container';
            
            // Create the description paragraph
            const title6 = document.createElement('h2');
            title6.textContent = 'CAESAR SALAD'
            const desc6 = document.createElement('p');
            desc6.textContent = 'The king of salads.'
            
            // Append the image and description to the container
            textContainer6.appendChild(title6);
            textContainer6.appendChild(desc6);
            container6.appendChild(img6);
            container6.appendChild(textContainer6);
            food_6.appendChild(container6);
            right.appendChild(food_6);

            mContent.appendChild(left);
            mContent.appendChild(right);
}

export default createMenu;