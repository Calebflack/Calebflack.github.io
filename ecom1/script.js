const labar= document.getElementById("bar");
const navb = document.getElementById("navbar");
const close= document.getElementById("close");

if (labar) {
    labar.addEventListener("click", () => {
        navb.classList.add('active');
        
    })
}
if (close) {
    close.addEventListener("click", () => {
        navb.classList.remove('active');
        
    })
}