// Using the Shopping List files from the previous videos 
//update the shopping list app to do the following:

// 1. If you click on the list item, it toggles the
// .done  class on and off.

// 2. Add buttons next to each list item to delete 
//the item when clicked on its corresponding delete button.

// 3. BONUS: When adding a new list item, it automatically adds
// the delete button next to it (hint: be sure to check if new items are clickable too!)

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

//this loop is necessary as we start with few items inside the list. 
//We can skip it if we start with 0 items.
//we iterate through listItems in order to add a delete button 
//and toggle the class .done to each item on the list.
listItems.forEach(function(listItem){
	listItem.addEventListener("click", function(){
		listItem.classList.toggle("done");
	})
	var btn = document.createElement("button"); //create a button
		btn.innerHTML = "DELETE";
	btn.addEventListener("click", function(){  //adds a class at the click that deletes the item
		listItem.classList.add("delete-item");
	})
	listItem.appendChild(btn);
})

function getInputLength () {    //the value's length inside the input
	return input.value.length;
}

//any time we create a new item we add a delete button to it
function createListItem () {     //creates a list item 
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); //appends the new li at the end of the ul
	input.value = "";
	li.addEventListener("click",function(){ //when clicking on the new li
		li.classList.toggle("done");        //it toggles the class .done
	})
		var btn = document.createElement("button");
		btn.innerHTML = "DELETE";
		btn.addEventListener("click", function(){
			li.classList.add("delete-item"); //adds a class at the click that deletes the item
		})
		li.appendChild(btn); //appends the button to the new list item
}

function addListAfterClick (){
	if (getInputLength() > 0){
		createListItem();
	}
}

function addListAfterKeypress(event){
	if (getInputLength() > 0 && event.keyCode === 13){
		createListItem();
	}
}

button.addEventListener("click", addListAfterClick);  //add new li when clicking

input.addEventListener("keypress", addListAfterKeypress); // add new li when pressing enter





