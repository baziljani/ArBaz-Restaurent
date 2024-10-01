
document.querySelector('.search i').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search_box input').value;
    if (searchTerm) {
        alert('Searching for: ' + searchTerm);
    } else {
        alert('Please enter a search term');
    }
});

document.querySelector('.backTop a').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

