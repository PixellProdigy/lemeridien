let lastScrollTop = 0; 
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});