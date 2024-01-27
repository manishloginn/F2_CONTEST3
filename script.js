const buttonn = document.getElementById("buttoooo")
const loginButton = document.getElementById("login_button")
const startQuiz = document.getElementById("startQuiz")
const selectquetion = document.getElementById("selectquetion")
const closeButton = document.getElementById("closebutton")
const quizStart = document.getElementById("quizStart")
const quetions = document.getElementById("secondclick")
const herosection = document.getElementById("herosection")
const appendiv = document.getElementById("appendiv")


const quizQuestions = [
    {
      topic: "Indian Festivals",
      questions: [
        {
          question: "During which Hindu month is Diwali usually celebrated?",
          options: {
            A: "Kartika",
            B: "Chaitra",
            C: "Ashadha",
            D: "Magha",
          },
          correct: "Kartika",
        },
        {
          question:
            "In which state is the Hornbill Festival, a celebration of Nagaland's indigenous tribes, held?",
          options: {
            A: "Assam",
            B: "Manipur",
            C: "Arunachal Pradesh",
            D: "Nagaland",
          },
          correct: "Nagaland",
        },
      ],
    },
    {
      topic: "Indian History",
      questions: [
        {
          question:
            "Who was the first Emperor of the Maurya Dynasty in ancient India?",
          options: {
            A: "Chandragupta Maurya",
            B: "Ashoka the Great",
            C: "Bindusara",
            D: "Chanakya",
          },
          correct: "Chandragupta Maurya",
        },
        {
          question: "The famous 'Battle of Plassey' took place in which year?",
          options: {
            A: "1757",
            B: "1764",
            C: "1772",
            D: "1780",
          },
          correct: "1757",
        },
      ],
    },
    {
      topic: "Indian Geography",
      questions: [
        {
          question:
            "Which river is known as the 'Sorrow of Bengal' due to its devastating floods?",
          options: {
            A: "Yamuna",
            B: "Ganges",
            C: "Brahmaputra",
            D: "Godavari",
          },
          correct: "Brahmaputra",
        },
        {
          question: "In which state is the Western Ghats mountain range located?",
          options: {
            A: "Kerala",
            B: "Maharashtra",
            C: "Gujarat",
            D: "Odisha",
          },
          correct: "Maharashtra",
        },
      ],
    },
    {
      topic: "Indian Politics",
      questions: [
        {
          question: "Who was the first woman Prime Minister of India?",
          options: {
            A: "Sonia Gandhi",
            B: "Indira Gandhi",
            C: "Sushma Swaraj",
            D: "Mayawati",
          },
          correct: "Indira Gandhi",
        },
        {
          question:
            "Which article of the Indian Constitution deals with the President's rule in states?",
          options: {
            A: "Article 352",
            B: "Article 360",
            C: "Article 356",
            D: "Article 370",
          },
          correct: "Article 356",
        },
      ],
    },
    {
      topic: "Indian Wildlife",
      questions: [
        {
          question:
            "In which national park can you find the Bengal Tiger in India?",
          options: {
            A: "Jim Corbett National Park",
            B: "Sundarbans National Park",
            C: "Bandipur National Park",
            D: "Ranthambhore National Park",
          },
          correct: "Ranthambhore National Park",
        },
        {
          question:
            "Which state in India is home to the famous Kaziranga National Park, known for one-horned rhinoceros?",
          options: {
            A: "Assam",
            B: "Madhya Pradesh",
            C: "Uttarakhand",
            D: "Rajasthan",
          },
          correct: "Assam",
        },
      ],
    },
    {
      topic: "Science and Technology",
      questions: [
        {
          question: "What does the acronym DNA stand for?",
          options: {
            A: "Deoxyribonucleic Acid",
            B: "Dihydroxy Nitric Acid",
            C: "Digital Nucleic Alloy",
            D: "Dynamite Nitrogen Atom",
          },
          correct: "Deoxyribonucleic Acid",
        },
        {
          question: "Who is known as the 'Father of Modern Physics'?",
          options: {
            A: "Isaac Newton",
            B: "Albert Einstein",
            C: "Galileo Galilei",
            D: "Niels Bohr",
          },
          correct: "Albert Einstein",
        },
      ],
    },
    {
      topic: "Literature and Books",
      questions: [
        {
          question:
            "Which Shakespeare play begins with the line 'If music be the food of love, play on'?",
          options: {
            A: "Romeo and Juliet",
            B: "Twelfth Night",
            C: "Hamlet",
            D: "Macbeth",
          },
          correct: "Twelfth Night",
        },
        {
          question: "Who wrote the novel 'To Kill a Mockingbird'?",
          options: {
            A: "Harper Lee",
            B: "J.K. Rowling",
            C: "Ernest Hemingway",
            D: "George Orwell",
          },
          correct: "Harper Lee",
        },
      ],
    },
    {
      topic: "Space and Astronomy",
      questions: [
        {
          question: "What is the largest planet in our solar system?",
          options: {
            A: "Mars",
            B: "Jupiter",
            C: "Saturn",
            D: "Earth",
          },
          correct: "Jupiter",
        },
        {
          question:
            "Which famous comet is visible from Earth approximately every 76 years?",
          options: {
            A: "Halley's Comet",
            B: "Hale-Bopp",
            C: "Comet ISON",
            D: "Comet Lovejoy",
          },
          correct: "Halley's Comet",
        },
      ],
    },
    {
      topic: "Indian Cuisine",
      questions: [
        {
          question:
            "Which Indian state is famous for its 'Dhokla' and 'Thepla' dishes?",
          options: {
            A: "Gujarat",
            B: "Maharashtra",
            C: "Punjab",
            D: "Kerala",
          },
          correct: "Gujarat",
        },
        {
          question:
            "What is the main ingredient of the South Indian dish 'Sambhar'?",
          options: {
            A: "Tomato",
            B: "Tamarind",
            C: "Coconut",
            D: "Onion",
          },
          correct: "Tamarind",
        },
      ],
    },
    {
      topic: "Indian Mythology",
      questions: [
        {
          question: "Who is considered the 'God of Cricket' in Indian mythology?",
          options: {
            A: "Sachin Tendulkar",
            B: "Virat Kohli",
            C: "Rahul Dravid",
            D: "Virender Sehwag",
          },
          correct: "Sachin Tendulkar",
        },
        {
          question:
            "In Hindu mythology, who is the goddess of wealth and prosperity?",
          options: {
            A: "Lakshmi",
            B: "Saraswati",
            C: "Durga",
            D: "Kali",
          },
          correct: "Lakshmi",
        },
      ],
    },
    {
      topic: "Indian Cinema",
      questions: [
        {
          question:
            "Which Indian film won the Academy Award for Best Foreign Language Film in 1993?",
          options: {
            A: "Lagaan",
            B: "Mother India",
            C: "Salaam Bombay!",
            D: "Gandhi",
          },
          correct: "Salaam Bombay!",
        },
        {
          question: "Who is often referred to as the 'Bollywood Badshah'?",
          options: {
            A: "Amitabh Bachchan",
            B: "Shah Rukh Khan",
            C: "Aamir Khan",
            D: "Salman Khan",
          },
          correct: "Shah Rukh Khan",
        },
      ],
    },
    {
      topic: "Indian Architecture",
      questions: [
        {
          question:
            "Which iconic monument in India was built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal?",
          options: {
            A: "Qutub Minar",
            B: "Fatehpur Sikri",
            C: "Taj Mahal",
            D: "Charminar",
          },
          correct: "Taj Mahal",
        },
        {
          question:
            "In which city is the ancient stepwell 'Rani ki Vav' located?",
          options: {
            A: "Jaipur",
            B: "Ahmedabad",
            C: "Udaipur",
            D: "Jodhpur",
          },
          correct: "Ahmedabad",
        },
      ],
    },
    {
      topic: "Indian Independence Movement",
      questions: [
        {
          question:
            "Who was the first woman president of the Indian National Congress?",
          options: {
            A: "Annie Besant",
            B: "Sarojini Naidu",
            C: "Vijaya Lakshmi Pandit",
            D: "Sucheta Kripalani",
          },
          correct: "Annie Besant",
        },
        {
          question:
            "In which year did India gain independence from British rule?",
          options: {
            A: "1942",
            B: "1947",
            C: "1950",
            D: "1962",
          },
          correct: "1947",
        },
      ],
    },
    {
      topic: "Art and Culture",
      questions: [
        {
          question: "Who painted the Mona Lisa?",
          options: {
            A: "Vincent van Gogh",
            B: "Pablo Picasso",
            C: "Leonardo da Vinci",
            D: "Claude Monet",
          },
          correct: "Leonardo da Vinci",
        },
        {
          question:
            "Which ancient civilization is known for its hieroglyphic writing system?",
          options: {
            A: "Greek",
            B: "Roman",
            C: "Egyptian",
            D: "Mesopotamian",
          },
          correct: "Egyptian",
        },
      ],
    },
    {
      topic: "Economics and Finance",
      questions: [
        {
          question: "What is the main currency of Japan?",
          options: {
            A: "Won",
            B: "Yuan",
            C: "Yen",
            D: "Ringgit",
          },
          correct: "Yen",
        },
        {
          question: "Who is often referred to as the 'Father of Economics'?",
          options: {
            A: "Adam Smith",
            B: "John Maynard Keynes",
            C: "Karl Marx",
            D: "Milton Friedman",
          },
          correct: "Adam Smith",
        },
      ],
    },
    // Add 10 more topics with 2 questions each.
  ];


const creat = document.createElement("a")

function highlightcontent(e) {
    e.target.classList.toggle("selected");
}

quizQuestions.forEach((e) => {
    const div = document.createElement("div")
    div.classList.add("options")
    div.innerText = e.topic
    buttonn.appendChild(div)
    div.addEventListener("click", highlightcontent)
})

function topiccollect() {
    const userselecttopic = document.querySelector(".selected")
    if (userselecttopic.length < 6) {
        alert( "select atleast 6 topic")
        return;
    }

    
}



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




// appendiv.addEventListener("")
loginButton.addEventListener("click", loginclick);
startQuiz.addEventListener("click", togglebar);
closeButton.addEventListener("click", togglebar);
quizStart.addEventListener("click", quizStartt)