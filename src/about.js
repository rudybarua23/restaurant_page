import gordon from './images/gordon.jpeg';

function createAbout() {
    const aContent = document.getElementById('content');
    const gordon_container = document.createElement('div');
    gordon_container.className = 'gordo';
    const img7 = document.createElement('img');
    img7.src = gordon;
    gordon_container.appendChild(img7);

    const story = document.createElement('div');
    story.className = 'storyContainer';
    const storyTitle = document.createElement('h2');
    storyTitle.textContent = 'Our Story'
    const ourStory = document.createElement('p');
    ourStory.textContent = 'From the jump the restaurant was a success. Built from the ground up by proud hard working immigrants, our buisiness had a solid foundation. With the help of a dedicated team and Master Rudy, we attracted global attention and in return a significant amount of revenue. Gordon Ramsay is a family friend that serves the diner. Considering he is a masterchef, the food and restaurant are top quality. 5 star michelin restaurant with NO FROZEN FOOD EVER!!! Otherwise Gordon would have shut it down already. Gordon is our servant and he will serve you with our amazing staff to your hearts content. '
    story.appendChild(storyTitle);
    story.appendChild(ourStory);
    gordon_container.appendChild(story);
    aContent.appendChild(gordon_container)

    const hoo = document.createElement('div');
    const hooTitle = document.createElement('h2');
    const hooDesc = document.createElement('p');
    hoo.className = 'hours';
    hooDesc.innerHTML = 'Monday to Friday: 8:00 AM - 11:00 PM <br> Saturday and Sunday: 6:00 AM - 5:00 PM'
    hooTitle.textContent = 'Hours of Operation';
    hoo.appendChild(hooTitle);
    hoo.appendChild(hooDesc);
    aContent.appendChild(hoo);
}

export default createAbout;