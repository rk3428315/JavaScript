function getApply() {
    let apply = document.getElementById('showDashNoticeData');
    
    fetch("/dashboard-apply.html")
        .then(res => res.text())
        .then(data => {
            apply.innerHTML = data;
        });
}