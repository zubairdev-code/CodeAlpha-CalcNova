const display = document.getElementById("display");


// Add values to display
function appendValue(value){
  display.value += value;
}


// Clear display
function clearDisplay(){
  display.value = "";
}


// Delete last character
function deleteLast(){
  display.value = display.value.slice(0, -1);
}


// Calculate result
function calculateResult(){

  try{
    display.value = eval(display.value);
  }

  catch(error){
    display.value = "Error";
  }
}


// Keyboard Support
document.addEventListener("keydown", function(event){

  const key = event.key;

  // Numbers and Operators
  if(
    (key >= '0' && key <= '9') ||
    key === '+' ||
    key === '-' ||
    key === '*' ||
    key === '/' ||
    key === '.' ||
    key === '%'
  ){
    appendValue(key);
  }

  // Enter Key
  else if(key === 'Enter'){
    calculateResult();
  }

  // Backspace Key
  else if(key === 'Backspace'){
    deleteLast();
  }

  // Escape Key
  else if(key === 'Escape'){
    clearDisplay();
  }

});