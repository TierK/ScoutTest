const mobileMenu = document.getElementById('mobileMenu');

function mobileMenuTogle (){
    if (mobileMenu.style.display === "none" || "") {
        mobileMenu.style.display = "block";
    } else {
        mobileMenu.style.display = "none";
    }
}