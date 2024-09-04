
function createHomePage() {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    
    const header = document.createElement('h1');
    header.textContent = "Welcome to our restaurant website!"
    pageContent.appendChild(header);


    const introduction = document.createElement('p');
    introduction.textContent = "We serve the best food in town. Come and taste it!"
    pageContent.appendChild(introduction);
    
    
    content.appendChild(pageContent);
}
export default createHomePage;