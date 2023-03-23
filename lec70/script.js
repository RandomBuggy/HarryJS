/*
sessionStorage only exists in current-browser-tab, even if refreshes
but 
in new-tab, new-window, new-page they have a different sessionStorage-instance
*/
sessionStorage.setItem("name", "harry");
sessionStorage.getItem("name");
sessionStorage.length;
sessionStorage.removeItem("name")
sessionStorage.length;
sessionStorage.clear();
sessionStorage.key(0);

/* storage event */

window.onstorage = (ev) => {
    console.log("localStorage changed");
    console.log(ev);
};
