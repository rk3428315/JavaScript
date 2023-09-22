let result = document.getElementById('result');

fetch("/dashboard-result.html")
    .then(res => res.text())
    .then(data => {
        result.innerHTML = data;
    });