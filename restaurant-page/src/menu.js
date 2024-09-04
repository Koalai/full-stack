

const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Pizza';
    const menuItem2 = document.createElement('li');
    menuItem1.textContent = 'Spaghetti';
    const menuItem3 = document.createElement('li');
    menuItem1.textContent = 'Pasta';
    
    
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
};

export default createMenuPage;