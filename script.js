

// Get a reference to the form element
var form = document.getElementById('myform');




// Add an event listener to the submit button
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Access form fields
    var className = form.elements['class'].value;
    var name = form.elements['name'].value;
    var fees = form.elements['fees'].value;
    var date = form.elements['date'].value;
    
    // Create a new student object
    const newStudent = {
        class: className,
        name: name,
        fees: fees,
        date: date
    };


    // Example data for Class 6
    const classIdentifier = className; // Example class identifier
    let studentsData = JSON.parse(localStorage.getItem(classIdentifier)) || [];

    // Push the new student object into the studentsData array
    studentsData.push(newStudent);

    // Store the updated studentsData array in local storage
    localStorage.setItem(classIdentifier, JSON.stringify(studentsData));
    alert("Data successfully save")
    form.reset()
    
});



    


   

    
    
  



    


 





 