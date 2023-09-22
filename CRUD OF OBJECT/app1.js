let action;
let storeData = [];
let index = 1;
let arr = [];

// Create constructor object with the name of person
function person(name, age, email, address, gender, country) {

    this.id = index,
        this.name = name,
        this.age = age,
        this.email = email,
        this.address = address,
        this.gender = gender,
        this.country = country
}

// Getting object data from user side and create a new object
// and show object in tbody formate
let personData = {}

// To create data
function create() {

    // personData.name = document.form.formName.id.value;

    // For access the fields values
    var name = document.getElementById('inputname').value;
    var age = document.getElementById('inputage').value;
    var address = document.getElementById('inputaddress').value;
    var email = document.getElementById('inputemail').value;
    var gender = document.getElementById('inputgender').value;
    var country = document.getElementById('inputcountry').value;
    action;

    personData = new person(name, age, email, address, gender, country);

    console.log("personData", personData);

    storeData.push(personData);
    console.log(storeData, "Store Object Data")
    index++;
    renderData();
}

// Render Data in table
function renderData() {
    var row = "";

    storeData.forEach(function (value) {
        row += '<tr id="tr" ><td>' + value.id + '</td><td>'
            + value.name + '</td><td>'
            + value.age + '</td> <td>'
            + value.address + '</td><td>'
            + value.email + '</td><td>'
            + value.gender + '</td><td>'
            + value.country + '</td><td><input style = "width:40px"type="checkbox" name="box" value="' + value.id + '" id="' + value.id + '">'
        '</td></tr>'

    });
    document.getElementById('tbody').innerHTML = row;

}

// Remove all data from object property onclick reset button
function reset() {

    document.getElementById('inputname').value = "";
    document.getElementById('inputage').value = "";
    document.getElementById('inputemail').value = "";
    document.getElementById('inputaddress').value = "";
    document.getElementById('inputgender').value = "";
    document.getElementById('inputcountry').value = "";
}


// To checked action data from table
function deleteData() {
    let checked = document.querySelectorAll("input[type='checkbox']:checked");
    console.log(checked, "Checked of id");

    checked.forEach(function (checkbox) {

        let id = parseInt(checkbox.getAttribute('id'));
        console.log(id, "Checked of id values");
        storeData = storeData.filter(value => value.id !== id);
        renderData();
    });
}

// To open popup of update form
window.onload = function () {

    document.getElementById("openForm").style.display = "none";
};

function openUpdatePopup(a) {

    let checked = document.querySelectorAll("input[type='checkbox']:checked");
    if (checked.length == 1) {
        if (a == 1) {
            document.getElementById("openForm").style.display = "block";
        } else {
            document.getElementById("openForm").style.display = "none";
        }
    }
    else {
        alert('Please select one checkbox.')
    }
}


// To update Data
function updateData() {
    let checked = document.querySelectorAll("input[type='checkbox']:checked");

    if (checked.length == 1) {
        checked.forEach(function (checkbox) {

            let id = parseInt(checkbox.getAttribute('id'));
            // console.log(id, "Checked of id values");

            storeData.filter(value => {

                if (value.id == id) {
                    value.id = id;
                    value.name = document.getElementById('updateName').value;
                    value.age = document.getElementById('updateAge').value;
                    value.address = document.getElementById('updateAddress').value;
                    value.email = document.getElementById('updateEmail').value;
                    value.gender = document.getElementById('updateGender').value;
                    value.country = document.getElementById('updateCountry').value;
                }
            });

            renderData();

        });

    } else {
        alert('Please select one box.');
    }
}

// To compar two data
function compareData() {
    let checked = document.querySelectorAll("input[type='checkbox']:checked");
    
    var checked1 = checked[0].id -1;
    var checked2 = checked[1].id -1;
    var storeFirst = storeData[checked1];
    // console.log(storeFirst,"StoreFirst");

    var storeSecond = storeData[checked2];
    // console.log(storeSecond,"StoreFirst");

    if (storeFirst && storeSecond) {
        let key1 = Object.values(storeFirst); 
        let key2 = Object.values(storeSecond);
        if (key1.length !== key2.length) {
            alert('Both Data length are not qual.')
        }
        else if (key1[1] === key2[1] && key1[2] === key2[2] && key1[3] === key2[3] && key1[4] === key2[4]) {
            alert('Both Data are same.')
        }
        else {
            alert('Both data are not same.')
        }
    }
    else {
        alert("Please check two box.");
    }

    // if (checked.length == 2) {


    //     checked.forEach(function (checkbox) {

    //         let id = parseInt(checkbox.getAttribute('id'));
    //         // console.log(id, "Checked of id values");
    //         compareArray.push(storeData.filter(value =>value.id == id)) 
    //         console.log(compareArray,"object value")

    //     });

    //     if(JSON.stringify(compareArray['person'][1]) === JSON.stringify(compareArray[1])){

    //         alert('First and Second Data are same.')
    //     }else{
    //         alert('Both Data are not same');
    //     }
    // }
    // else{
    //     alert("Must need to select two checkbox.");
    // }

}

