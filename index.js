let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");

function deleteTask(e){  //deleting the li tag from the todo list
    e.currentTarget.remove();
}
input.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        let task = input.value;
        if (!task) { // if empty input than alert message
            alert("Error- Adding empty task");
            return;
        }
        input.value = "";
        // adding tag li in ul tag of class task list
        let li = document.createElement("li");
        // console.log(li); // empty
        //  setTimeout(function(){
            li.innerText = task;
        // console.log(li); // task saved to the li
        // },3000)
        li.addEventListener("dblclick", deleteTask) // event check for double click on the li content
        // ul.appendChild(li);  // to add in last 
        ul.insertBefore(li, ul.firstChild); // to add in front
    }
    // console.log(e);
})