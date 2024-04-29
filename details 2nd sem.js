// function for table row delete
const tableRow=document.querySelector(".tableRow")
const deletebutton=document.querySelector("#deletebutton")






// Retrieve data from local storage
const serializedData = localStorage.getItem('Class 2nd sem');
const studentsData = JSON.parse(serializedData) || [];

// Function to generate table rows based on the student data
function generateTableRows(data) {
  const tableBody = document.getElementById('studentTableBody');

  // Clear existing table rows
  tableBody.innerHTML = '';

  // Loop through the data and generate table rows
  data.forEach((student, index) => {
    const row = document.createElement('tr');
    row.classList.add('tableRow');

    // SL.No column
    const slNoCell = document.createElement('td');
    slNoCell.textContent = index + 1;
    row.appendChild(slNoCell);

    // Name column
    const nameCell = document.createElement('td');
    nameCell.textContent = student.name;
    row.appendChild(nameCell);

    // Fees column
    const feesCell = document.createElement('td');
    feesCell.textContent = student.fees;
    row.appendChild(feesCell);

    // Date column
    const dateCell = document.createElement('td');
    dateCell.textContent = student.date;
    row.appendChild(dateCell);

    // Delete button column
    const deleteCell = document.createElement('td');
    deleteCell.classList.add('text-center');
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.classList.add('btn', 'btn-outline-danger');
    deleteButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"></path>
      </svg>
      Delete`;
    deleteButton.addEventListener('click', () => {
      // Remove the corresponding student from the data array
     
      
      const rowIndex = data.indexOf(student);
      if (rowIndex !== -1) {
        data.splice(rowIndex, 1);
        // Update the local storage with the modified data
        localStorage.setItem('Class 2nd sem', JSON.stringify(data));
        
      }
      // Remove the row from the table
      row.remove();
      
      
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });
}

// Generate table rows based on the data
generateTableRows(studentsData);

// for delete all database
const deleteAllbutton=document.getElementById("deleteAllbutton")

deleteAllbutton.addEventListener("click", () => {
  // Display a confirmation prompt
  const confirmation = confirm("Are you sure you want to delete all the database?");
  
  // Check if the user clicked "OK" (true) or "Cancel" (false)
  if (confirmation) {
    // Clear the local storage
    localStorage.removeItem("Class 2nd sem");
    alert("Database cleared successfully!");
  } else {
    // User clicked "Cancel", do nothing or provide feedback
    alert("Database not cleared.");
  }
});