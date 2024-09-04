import createContactPage from "./contact.js"
import createHomePage from "./home.js"
import createMenuPage from "./menu.js"

function createTabs() {
    const homeBtn = document.querySelector("#home-btn")
    const menuBtn = document.querySelector("#menu-btn")
    const contactsBtn = document.querySelector("#contacts-btn")

    homeBtn.addEventListener('click', () => {
        clearContent();
        createHomePage()
    })
    
    menuBtn.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })

    contactsBtn.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })
}

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");

    if (pageContent) {
        content.removeChild(pageContent);
    }
}
export default createTabs;