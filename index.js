function test(){
    var n = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    
    // Storing data in local storage
    localStorage.setItem("n", n);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile);
    
    // Displaying the data
    var displayDiv = document.getElementById("displayData");
    var dataDiv = document.createElement("div");
    dataDiv.innerHTML = "Name: " + n + "<br>Email: " + email + "<br>Mobile: " + mobile;
    
    // Create edit button
    var editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.onclick = function() {
        editData(n, email, mobile);
    };
    dataDiv.appendChild(editButton);
    
    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
        deleteData();
    };
    dataDiv.appendChild(deleteButton);
    
    displayDiv.appendChild(dataDiv);
}

function editData(name, email, mobile) {
    // Implement editing functionality here
    // For example, populate the form fields with the provided data for editing
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("mobile").value = mobile;
}

function deleteData() {
    // Implement deletion functionality here
    // For example, remove the displayed data from the screen and clear local storage
    var displayDiv = document.getElementById("displayData");
    displayDiv.innerHTML = "";
    localStorage.clear();
}
