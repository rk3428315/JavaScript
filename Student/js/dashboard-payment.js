function getPayment() {
    let payment = document.getElementById('showDashNoticeData');
    
    fetch("/dashboard-payment.html")
        .then(res => res.text())
        .then(data => {
            payment.innerHTML = data;
        });
}