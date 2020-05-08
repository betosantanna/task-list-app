	//Get the elements
 var textfield = document.getElementById("textfield");
 var taskToDo = document.getElementById("tasks-to-do");
 var btnCreate = document.querySelector("btn-create");
 var doneTasks = document.querySelector("done-tasks");

function createTask() {
  //Verify if the input isn't empty to create a task
  if(textfield.value.length == 0) {
  	alert("Por favor digite algum texto!");
  } else {
  	//Create a p element
  var paragraph = document.createElement("p");
  //Get the value from the textfiled and put inside the paragraph
  paragraph.appendChild(document.createTextNode(textfield.value));

  	//Create a span to hold the check icon
  var btnCheck = document.createElement("span");
  btnCheck.classList.add("btn-check");
  	// Put the span inside the paragraph
  paragraph.appendChild(btnCheck); 
  	//Create a i element to show the icon
  var checkIcon = document.createElement("i");
  	//Add the CSS class that show the icon
  checkIcon.classList.add("fas", "fa-check");
  	//Put the icon inside the span that hold the button
  btnCheck.appendChild(checkIcon);


  	//Create a span to hold the trash icon
  var btnDelete = document.createElement("span");
  btnDelete.classList.add("btn-delete");
  	// Put the span inside the paragraph
  paragraph.appendChild(btnDelete);
   	//Create a i element to show the icon
  var deleteIcon = document.createElement("i");
  	//Add the CSS class that show the icon
  deleteIcon.classList.add("fas", "fa-trash");
  	//Put the icon inside the span that hold the button
  btnDelete.appendChild(deleteIcon);
  	

 		//Put the paragraph inside the div element
  taskToDo.appendChild(paragraph);
  	//Add a class with the CSS style
  paragraph.classList.add("list-item");
  	//Make the input erase after submit the info
  textfield.value = "";
  	//Make the focus go back to the input after submit the info
  textfield.focus();

  console.log(textfield.length);
  }

  	//Function to to mark the task as done
  function doneTask() {
    paragraph.classList.toggle("task-done");
    doneTasks.appendChild(paragraph);
  }

  	// Function to delete a task
  function deleteTask() {
		paragraph.classList.add("task-deleted");
}	

	
 
btnCheck.addEventListener("click", doneTask);
btnDelete.addEventListener("click", deleteTask);

}







