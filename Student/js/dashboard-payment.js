function getPayment() {
    let payment = document.getElementById('profile');
    
    fetch("/dashboard-payment.html")
        .then(res => res.text())
        .then(data => {
            payment.innerHTML = data;
        });
}