// To get profile
function getProfile() {
    let profile = document.getElementById('showDashNoticeData');

    fetch("/dashboard-profile.html")
        .then(res => res.text())
        .then(data => {
            profile.innerHTML = data;
        });
}
//-------------------End-------------------------

// let storeProfile =[];
// let div = document.getElementById('img2');
// fetch("/dashboard-profile.html")
// .then(function(res){
//     res.text()
//     .then(function(value){
//         storeProfile = value;
//         getProfileData();
//     })
// });

// function getProfileData() {
//     var row = "";

//     // To iteral the allJSONData one by one and add in row
//     storeProfile.forEach(element => {
//         row += `<div class="p-3">
//         <div class="card-header border-3 ">
//             <h2>Profile</h2>
//         </div>
//         <div class="card py-5 bg-secondary p-2">
//             <div class="row">
//                 <div class="col-lg-4">
//                     <div class="card mb-4">
//                         <div class="card-body text-center">
//                             <img src="/Images/userImage1.png" alt="avatar" class="rounded-circle img-fluid"
//                                 style="width: 150px;">
//                             <h5 class="my-3">John Smith</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="col-lg-8">
//                     <div class="card mb-4">
//                         <div class="card-body">
//                             <div class="row">
//                                 <div class="row">
//                                     <div class="col-sm-3"> Name</div>
//                                     <div class="col-sm-9 text-muted ">Ravi</div>
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row">
//                                 <div class="row">
//                                     <div class="col-sm-3"> Email</div>
//                                     <div class="col-sm-9 text-muted ">example@gmail.com</div>
//                                 </div>
//                             </div>
//                             <hr>
//                             <div class="row">
//                                 <div class="col-sm-3"> Gender</div>
//                                 <div class="col-sm-9 text-muted ">Male</div>
//                             </div>
//                             <hr>
//                             <div class="row">
//                                 <div class="col-sm-3">Age</div>
//                                 <div class="col-sm-9 text-muted"> 22 </div>
//                             </div>
//                             <hr>
//                             <div class="row">
//                                 <div class="col-sm-3">Address</div>
//                                 <div class="col-sm-9 text-muted"> Alipur Mandra </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>`
//         console.log(element.img, "row");
//     });
//     div.innerHTML = row;
// }

