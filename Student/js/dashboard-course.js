let course = document.getElementById('course');

fetch("/dashboard-profile.html")
    .then(res => res.text())
    .then(data => {
        course.innerHTML = data;
    });