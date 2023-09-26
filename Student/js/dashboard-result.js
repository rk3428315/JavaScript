function getResult() {
    let result = document.getElementById('profile');

    fetch("/dashboard-result.html")
        .then(res => res.text())
        .then(data => {
            result.innerHTML = data;
        });
}