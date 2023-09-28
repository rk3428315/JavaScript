function getApply() {
    let apply = document.getElementById('profile');
    
    fetch("/dashboard-apply.html")
        .then(res => res.text())
        .then(data => {
            apply.innerHTML = data;
        });
}