// save reference to important DOM elements
 var timeDisplayEl = $('#time-display');
var projectDisplayEl = $('#project-display');
var projectModalEl = $('#project-modal');
var projectFormEl = $('#project-form');
var projectNameInputEl = $('#project-name-input');
var projectTypeInputEl = $('#project-type-input');
var hourlyRateInputEl = $('#hourly-rate-input');
var dueDateInputEl = $('#due-date-input');
var addProject = $('#add-project');

// handle displaying the time
function displayTime() {
 $(timeDisplayEl).text(moment().format("hh:mm:ss"));
}

// handle printing project data to the page
function printProjectData(name, type, hourlyRate, dueDate) {
  // TODO: Add your code here
}

function calculateTotalEarnings(rate, days) {
  var dailyTotal = rate * 8;
  var total = dailyTotal * days;
  return total;
}

function handleDeleteProject(event) {
  console.log(event.target);
  // TODO: Add your code here

}

// handle project form submission
function handleProjectFormSubmit(event) {
    // TODO: Add your code here

}

// modal pop-up
function projectModal(){
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
}

addProjectBtn.on('click', projectModal);

projectFormEl.on('submit', handleProjectFormSubmit);
projectDisplayEl.on('click', '.delete-project-btn', handleDeleteProject);
dueDateInputEl.datepicker({ minDate: 1 });

setInterval(displayTime, 1000);
