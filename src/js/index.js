/* 
NOTES:
to make this asynchronous test work, you need to change parameters in the HTML file. 
take a look at click listener on the button, you will see "babypack".
change it to "starterpack". 
done!
*/

console.log('javascript ready...')

//! Responsive Navigation BAR 🎉
const showMobileNav = () => {
var navbar = document.getElementById("navbar");
navbar.className === "navibar" ? navbar.className += " responsive" : navbar.className = "navibar"
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
video.addEventListener("ended", function() {
    btn.style.display = "block";
});
btn.addEventListener("click", function(){
    window.location.href = "./aboutme/";
});

