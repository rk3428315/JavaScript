let apply = document.getElementById('apply');

fetch("/dashboard-apply.html")
    .then(res => res.text())
    .then(data => {
        apply.innerHTML = data;
    });