const buttonn = document.getElementById("buttoooo")
const loginButton = document.getElementById("login_button")
const startQuiz = document.getElementById("startQuiz")
const selectquetion = document.getElementById("selectquetion")
const closeButton = document.getElementById("closebutton")
const quizStart = document.getElementById("quizStart")
const quetions = document.getElementById("secondclick")
const herosection = document.getElementById("herosection")



let nom = 15;
for (let i = 0; i < nom; i++) {
    const div = document.createElement("div")
    const button = document.createElement("button")
    button.innerText = "TagBadge"
    div.appendChild(button)
    buttonn.appendChild(div)
}

// function loginalert() {
//     if (loginButton.innerText == "Login") {
//         alert "login first"
//     }
// }

// loginalert()

function loginclick(event) {
    if (loginButton.innerText != "Login") {
         return false; 
        }
    else {
        let name = prompt("Enter Your Name");
        loginButton.innerHTML = `<span style="color: #FCC822; font-size: large;"><i class="fa-brands fa-servicestack"></i> ${name} <i class="fa-solid fa-caret-down"></i></span>`;
    }
}




function quetionstart(event) {
    quetions.classList.add("showdisplay")
}



function togglebar (event) {    
    selectquetion.classList.toggle("nonedisplay")
    selectquetion.classList.toggle("showdisplay")
}

function quizStartt(event) {
    selectquetion.classList.remove("showdisplay")
    selectquetion.classList.add("nonedisplay")
    herosection.classList.add("nonedisplay")
    quetions.classList.remove("nonedisplay")
    quetions.classList.add("showdisplay")
    
}





loginButton.addEventListener("click", loginclick);
startQuiz.addEventListener("click", togglebar);
closeButton.addEventListener("click", togglebar);
quizStart.addEventListener("click", quizStartt)
