let isEditMode = false;

document.querySelector('#exampleModal button[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  if (isEditMode) {
    // Validate only the text field
    const inputField = document.querySelector('#text'); 
    if (inputField.value.trim() === '') {
      document.querySelector('#alert-message').innerHTML = 'Task cannot be blank';
      return;
    } else {
      document.querySelector('#alert-message').innerHTML = '';
    }
  } else {
    // Validate all fields
    const inputField = document.querySelector('#text'); 
    const dateField = document.querySelector('#date');
    const detailField = document.querySelector('#comment') 
    if (inputField.value.trim() === '') {
      document.querySelector('#alert-message').innerHTML = 'Task cannot be blank';
      return;
    } else {
      document.querySelector('#alert-message').innerHTML = '';
    } if (dateField.value === "" || detailField.value.trim() === ''){
      return false;
    }
  }
  
  // Get the values of the input fields
  var text = document.getElementById('text').value;
  var date = document.getElementById('date').value;
  var comment = document.getElementById('comment').value;
  // Store the values in local storage
  localStorage.setItem('text', text);
  localStorage.setItem('date', date);
  localStorage.setItem('comment', comment);
  //After clicks the Add button
  document.querySelector('#exampleModal button[data-bs-dismiss="modal"]').click();

  taskhead = localStorage.getItem('text');
  duedate = localStorage.getItem('date');
  detail = localStorage.getItem('comment');
  console.log(taskhead);
  addTemplate();
  document.querySelector("#form-data").reset();
}

function addTemplate() {
  //console.log(main)
      main.innerHTML += `
        <div id="taskbox">
            <h4>${taskhead}</h4>
            <p id="second">${duedate}</p>
            <h6>${detail}</h6>
            <span id="row"><img data-bs-toggle="modal" data-bs-target="#exampleModal" src="assets/edit.png" onclick="edit(this)" width="20px"></span>
            <span id="row2"><img  src="assets/bin.png" onclick="bin(this)" width="20px"></span> 
        </div>`;
  } 

  function bin(elem) {
        elem.parentNode.parentNode.remove();
    }
    

function edit(elem) {
  isEditMode = true;

  elem.parentNode.parentNode.remove();

  // Retrieve the task details from local storage
  taskhead = localStorage.getItem('text');
  duedate = localStorage.getItem('date');
  detail = localStorage.getItem('comment');

  // Fill the form with the task details
  document.getElementById('text').value = taskhead;
  document.getElementById('date').value = duedate;
  document.getElementById('comment').value = detail;

  // Update the task box when the mod
document.querySelector('#exampleModal').addEventListener('hide.bs.modal', function() {
  // Select the task box using a unique identifier
  const taskBox = document.querySelector('#taskbox');

  // Update the values in the task box
  taskBox.querySelector('h4').innerHTML = taskhead;
  taskBox.querySelector('#second').innerHTML = duedate;
  taskBox.querySelector('h6').innerHTML = detail;
});
}