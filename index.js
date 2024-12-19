var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname,event){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab');
}



var sidemenu=document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right="0";
        }

        function closemenu(){
            sidemenu.style.right="-200px";
        }


    document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        var backToTopBtn = document.getElementById("backToTopBtn");
        
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // Attach the scrollToTop function to the button click event
    var backToTopButton = document.getElementById("backToTopBtn");
    backToTopButton.addEventListener("click", scrollToTop);

    });
