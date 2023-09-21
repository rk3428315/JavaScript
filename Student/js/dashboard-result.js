let result = document.getElementById('result');

fetch("/dashboard-profile.html")
    .then(res => res.text())
    .then(data => {
        result.innerHTML = data;
    });