let profile = document.getElementById('profile');

fetch("/dashboard-profile.html")
    .then(res => res.text())
    .then(data => {
        profile.innerHTML = data;
    });