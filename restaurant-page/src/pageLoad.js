import createHomePage from "./home.js"
import createMenuPage from "./menu.js";
import createTabs     from "./tabs.js";

function initialLoad() {
    createHomePage();
    createTabs();
}

export default initialLoad;