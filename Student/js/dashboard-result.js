function getResult() {
    let result = document.getElementById('showDashNoticeData');

    fetch("/dashboard-result.html")
        .then(res => res.text())
        .then(data => {
            result.innerHTML = data;
        });
}


function printResult(){
    window.print();
}