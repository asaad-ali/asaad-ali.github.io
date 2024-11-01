document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('home-button').addEventListener('click', function() {
        window.location.href = 'index.html';
        history.pushState(null, 'Home', 'index');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('updates-button').addEventListener('click', function() {
        window.location.href = 'updates.html';
        history.pushState(null, 'Updates', 'updates');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('about-button').addEventListener('click', function() {
        window.location.href = 'about.html';
        history.pushState(null, 'About', 'about');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-button').addEventListener('click', function() {
        window.location.href = 'contact.html';
        history.pushState(null, 'Contact', 'contact');
    });
});