let dashNav = document.getElementById('dashnav');

fetch("/dashboard-nav.html")
    .then(res => res.text())
    .then(data => {
        dashNav.innerHTML = data;
    });