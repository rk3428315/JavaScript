let payment = document.getElementById('payment');

fetch("/dashboard-payment.html")
    .then(res => res.text())
    .then(data => {
        payment.innerHTML = data;
    });