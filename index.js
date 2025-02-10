document.addEventListener("DOMContentLoaded", function() {
    var backToTopBtn = document.getElementById("backToTopBtn");

    function isAtBottom() {
        // Calculate the document's height
        const documentHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        // Calculate the current scroll position and viewport height
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        // Check if the user is near the bottom
        return (documentHeight - windowHeight - scrollPosition) <= 20; // Adjust the threshold as needed
    }

    function toggleBackToTopButton() {
        if (isAtBottom()) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    // Initialize on load
    toggleBackToTopButton();

    // Update on scroll
    window.onscroll = function() {
        toggleBackToTopButton();
    };

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    var backToTopButton = document.getElementById("backToTopBtn");
    backToTopButton.addEventListener("click", scrollToTop);
});
