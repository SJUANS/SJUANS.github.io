const inputUserName = document.getElementById("input_username");
const greetingForm = document.getElementById("greeting_form");
const greetUser = document.getElementById("greeting_message");
const savedUserName = localStorage.getItem("CurrentUserName");
const forgetMeBtn = document.getElementById("forget_me");
const toDoList = document.getElementById("todolist_area");

const greetingMsg = [
    "Have a nice day",
    "Keep going",
    "Do your best",
    "You are doing good",
    "Nice to see you again",
    "Make today your day",
    "Today will be your day"
]

const CLASSNAME_HIDDEN = "hidden";

function saveNewUserName(event){
    const CurrentUserName = inputUserName.value;
    event.preventDefault();
    inputUserName.classList.add(CLASSNAME_HIDDEN);
    localStorage.setItem("CurrentUserName", CurrentUserName);
    greetUser.innerText = `Nice to meet you, ${CurrentUserName}!`;
    forgetMeBtn.classList.remove(CLASSNAME_HIDDEN);
}

function greetSavedUser(){
    const rand = Math.floor(Math.random()*greetingMsg.length);
    greetUser.innerText = `${greetingMsg[rand]}, ${savedUserName}.`;
    forgetMeBtn.classList.remove(CLASSNAME_HIDDEN);
}

// function changeUserName(){
//     const changedUserName = 
//     const changeMyName = confirm(`Change your name as ${}?`)
// }

function deleteUserName(){
    const forgetMe = confirm("Do you really want to delete your name?")
    if (forgetMe){
        localStorage.removeItem("CurrentUserName");
        forgetMeBtn.classList.add(CLASSNAME_HIDDEN);
        toDoList.classList.add(CLASSNAME_HIDDEN);
        greetUser.innerText = "Hope to see you again soon. Take care!"
    }
}

greetingForm.addEventListener("submit", saveNewUserName);
forgetMeBtn.addEventListener("click", deleteUserName);


if (savedUserName !== null){
    greetSavedUser()
    greetingForm.classList.remove(CLASSNAME_HIDDEN);
    inputUserName.classList.add(CLASSNAME_HIDDEN);
    forgetMeBtn.classList.remove(CLASSNAME_HIDDEN);
    toDoList.classList.remove(CLASSNAME_HIDDEN);
} else {
    greetUser.innerText = "Hello, stranger. What can I call you?"
    greetingForm.classList.remove(CLASSNAME_HIDDEN);
}
