function toggleNav() {
    const navLinks = document.querySelector('.nav-menu');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}  

const modal = document.getElementById("contact-modal");

const btn = document.getElementById("contact-btn");

const closeSpan = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

closeSpan.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('contact-form').onsubmit = function() {
    modal.style.display = "none";
    return true; 
}
