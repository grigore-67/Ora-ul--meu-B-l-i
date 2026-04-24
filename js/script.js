function mobileMenu() {
    var navbar = document.getElementsByTagName("navbar")[0];
    if (!navbar) {
        return;
    }

    navbar.classList.toggle("mobile");
}

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementsByTagName("navbar")[0];
    if (!navbar) {
        return;
    }

    var links = navbar.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            if (window.innerWidth <= 800) {
                navbar.classList.remove("mobile");
            }
        });
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth > 800) {
            navbar.classList.remove("mobile");
        }
    });
});

function toggleDark() {
    document.body.classList.toggle('dark');
    const btn = document.getElementById('dark-toggle');
    if (document.body.classList.contains('dark')) {
        btn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Aplică tema salvată la încărcarea paginii
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('dark-toggle').textContent = '☀️';
    }
});
