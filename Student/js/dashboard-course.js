function getCoruse() {
    let course = document.getElementById('showDashNoticeData');

    fetch("/dashboard-course.html")
        .then(res => res.text())
        .then(data => {
            course.innerHTML = data;
        });
}