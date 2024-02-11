
const tabsMenuLink = document.querySelector(`.tabs-menu`).querySelectorAll(`a`),
    tabsContent = document.querySelectorAll(`.tab-content`),
    tabsMenuArea = document.querySelector(`.hero-menu_header`);

    tabsMenuArea.addEventListener(`click`, (event)=> {
    const target = event.target;
    tabsMenuLink.forEach((item, i) => {
        if (target == item ){
            hideTabsContent();
            showTadContent(i);
        }
    })
})
function hideTabsContent() {
    tabsContent.forEach(item =>{
        item.classList.remove(`first-tab`);
    });
    tabsMenuLink.forEach (item =>{
        item.parentNode.classList.remove(`current`);
    });
}
function showTadContent(i = 0) {
    tabsContent[i].classList.add(`first-tab`);
    tabsMenuLink[i].parentNode.classList.add(`current`);
}