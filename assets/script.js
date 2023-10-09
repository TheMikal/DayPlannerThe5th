// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const sB = document.querySelector('.saveBtn');
const sT = document.querySelector('.description')
const todayEl = document.getElementById('currentDay');
const appContainer = document.querySelector('.container-lg');
const userInput = $("#saveBtn").val();
const todayJs = dayjs().format('YYYY-MM-DD');
const fullDayHrs = 8;

// get the current time
const HHMM = dayjs().format('HH:mm');


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  appContainer.addEventListener('click', function(event){
    if (event.target.classList.contains('saveBtn')){
    event.stopPropagation();
    const text = sT.value;
    console.log(text)
    localStorage.setItem('Plan', text);
    console.log("user input: ", text);
    }
  });
  // on save button click, it takes the text of the class description and saves it to local storage
  $(init());

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // code to loop over every time block and assign it past, present, and future classes based on current time

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // call the data from the local storage and display it to the page
  // TODO: Add code to display the current date in the header of the page.
  todayEl.textContent = `Today's date is currently ${todayJs}`
});

function init() {
  for (let index = 0; index < fullDayHrs + 1; index++) {
    const hourBlock = document.createElement('div');
    const hourText = document.createElement('div'); 
    const textBox = document.createElement('textarea');
    const button = document.createElement('button');
    const sI = document.createElement('i');

    switch (index) {
      case 0:
        hourBlock.id = `hour-${index + 9}`;
        hourText.textContent = `${index + 9}AM`;
        appContainer.appendChild(hourBlock);
        hourBlock.classList.add('row', 'time-block', 'past');
        hourBlock.appendChild(hourText);
        hourText.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
        hourBlock.appendChild(textBox);
        textBox.classList.add('col-8', 'col-md-10', 'description');
        hourBlock.appendChild(button);
        button.id = "saveBtn"
        button.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
        button.appendChild(sI);
        sI.classList.add('fas', 'fa-save');

        break;
      
      case 1:
        hourBlock.id = `hour-${index + 9}`;
        hourText.textContent = `${index + 9}AM`;
        appContainer.appendChild(hourBlock);
        hourBlock.classList.add('row', 'time-block', 'past');
        hourBlock.appendChild(hourText);
        hourText.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
        hourBlock.appendChild(textBox);
        textBox.classList.add('col-8', 'col-md-10', 'description');
        hourBlock.appendChild(button);
        button.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
        button.appendChild(sI);
        sI.classList.add('fas', 'fa-save');

        break;

      case 2:
        hourBlock.id = `hour-${index + 9}`;
        hourText.textContent = `${index + 9}AM`;
        appContainer.appendChild(hourBlock);
        hourBlock.classList.add('row', 'time-block', 'present');
        hourBlock.appendChild(hourText);
        hourText.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
        hourBlock.appendChild(textBox);
        textBox.classList.add('col-8', 'col-md-10', 'description');
        hourBlock.appendChild(button);
        button.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
        button.appendChild(sI);
        sI.classList.add('fas', 'fa-save');

        break;

      case 3:
        hourBlock.id = `hour-${index + 9}`;
        hourText.textContent = `${index + 9}PM`;
        appContainer.appendChild(hourBlock);
        hourBlock.classList.add('row', 'time-block', 'future');
        hourBlock.appendChild(hourText);
        hourText.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
        hourBlock.appendChild(textBox);
        textBox.classList.add('col-8', 'col-md-10', 'description');
        hourBlock.appendChild(button);
        button.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
        button.appendChild(sI);
        sI.classList.add('fas', 'fa-save');

        break;
      
      case 4:
        hourBlock.id = `hour-${index - 3}`;
        hourText.textContent = `${index - 3}PM`;
        appContainer.appendChild(hourBlock);
        hourBlock.classList.add('row', 'time-block', 'future');
        hourBlock.appendChild(hourText);
        hourText.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
        hourBlock.appendChild(textBox);
        textBox.classList.add('col-8', 'col-md-10', 'description');
        hourBlock.appendChild(button);
        button.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
        button.appendChild(sI);
        sI.classList.add('fas', 'fa-save');

        break;

      case 5:
        hourBlock.id = `hour-${index - 3}`;
        hourText.textContent = `${index - 3}PM`;
        appContainer.appendChild(hourBlock);
        hourBlock.classList.add('row', 'time-block', 'future');
        hourBlock.appendChild(hourText);
        hourText.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
        hourBlock.appendChild(textBox);
        textBox.classList.add('col-8', 'col-md-10', 'description');
        hourBlock.appendChild(button);
        button.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
        button.appendChild(sI);
        sI.classList.add('fas', 'fa-save');

        break;

      case 6:
        hourBlock.id = `hour-${index - 3}`;
        hourText.textContent = `${index - 3}PM`;
        appContainer.appendChild(hourBlock);
        hourBlock.classList.add('row', 'time-block', 'future');
        hourBlock.appendChild(hourText);
        hourText.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
        hourBlock.appendChild(textBox);
        textBox.classList.add('col-8', 'col-md-10', 'description');
        hourBlock.appendChild(button);
        button.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
        button.appendChild(sI);
        sI.classList.add('fas', 'fa-save');

        break;
      
      case 7:
        hourBlock.id = `hour-${index - 3}`;
        hourText.textContent = `${index - 3}PM`;
        appContainer.appendChild(hourBlock);
        hourBlock.classList.add('row', 'time-block', 'future')
        hourBlock.appendChild(hourText);
        hourText.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
        hourBlock.appendChild(textBox);
        textBox.classList.add('col-8', 'col-md-10', 'description');
        hourBlock.appendChild(button);
        button.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
        button.appendChild(sI);
        sI.classList.add('fas', 'fa-save');

        break;

      case 8:
          hourBlock.id = `hour-${index - 3}`;
          hourText.textContent = `${index - 3}PM`;
          appContainer.appendChild(hourBlock);
          hourBlock.classList.add('row', 'time-block', 'future');
          hourBlock.appendChild(hourText);
          hourText.classList.add('col-2', 'col-md-1', 'hour', 'text-center', 'py-3');
          hourBlock.appendChild(textBox);
          textBox.classList.add('col-8', 'col-md-10', 'description');
          hourBlock.appendChild(button);
          button.classList.add('btn', 'saveBtn', 'col-2', 'col-md-1');
          button.appendChild(sI);
          sI.classList.add('fas', 'fa-save');

          break;

      default:
        break;
    }
  };
}