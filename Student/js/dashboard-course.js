function getCoruse() {
    let course = document.getElementById('course');

    fetch("/dashboard-course.html")
        .then(res => res.text())
        .then(data => {
            course.innerHTML = data;
        });
}