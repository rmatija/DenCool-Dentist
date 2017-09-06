window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("to_top").style.display = "block";
    } else {
        document.getElementById("to_top").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
}
