import dishes from "./data.js"

const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    content.appendChild(pageContent);

    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    pageContent.appendChild(heading)

    const menuList = document.createElement('div');
    menuList.classList.add('menu');
    pageContent.append(menuList);
    
    dishes.forEach(dish => {
        const dishContainer = document.createElement('div');
        dishContainer.classList.add('dish-div');
        menuList.append(dishContainer)


        const name = document.createElement('h2');
        const descriptions = document.createElement('p');
        const price = document.createElement('p');

        name.textContent = dish.name;
        descriptions.textContent = dish.descriptions;
        price.textContent = dish.price;

        dishContainer.append(name);
        dishContainer.append(descriptions);
        dishContainer.append(price);
    })

};

export default createMenuPage;