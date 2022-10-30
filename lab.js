window.onload = () => {
    openLinkInNewTab();
}

function openLinkInNewTab() {
    
    const anchor = document.querySelectorAll('a:not(.current-tab)');
    
      anchor.forEach((each) => {
        each.setAttribute("target", "_blank");
    });   
    
    
};