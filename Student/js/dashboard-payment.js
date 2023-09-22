let payment = document.getElementById('payment');

fetch("/dashboard-profile.html")
    .then(res => res.text())
    .then(data => {
        payment.innerHTML = data;
    });