let apply = document.getElementById('apply');

fetch("/dashboard-profile.html")
    .then(res => res.text())
    .then(data => {
        apply.innerHTML = data;
    });