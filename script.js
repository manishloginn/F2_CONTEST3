const Start_solving = document.getElementById("Start_solving")




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
];

const herosection = document.getElementById("herosection")
const selectquetion = document.getElementById("selectquetion")
let score = 0;

const login = document.getElementById("login_button")

login.addEventListener("click", () =>{
    prompt("enter your name")
})

if(login.innerText === "Login") {
    alert("please login first")
}

function togglebar(event) {
    selectquetion.classList.toggle("showdisplay")
    selectquetion.classList.toggle("hidedisplay")
}



const closebutton = document.getElementById("closebutton")

const categories = quizQuestions.map((quetiongroup) => quetiongroup.topic)


const form = document.getElementById("categories")
const chips = document.querySelector(".chips")


categories.forEach((category, index) => {
    const container = document.createElement("div")
    container.innerHTML = `
  <input type="checkbox" id="${index}" name="${category.toLowerCase()}"  value="${category}" />
  <label for="${index}">${category}</label>
  `
    chips.appendChild(container)
})


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let count = 0;
    const selectedtopics = [];

    categories.forEach((category) => {
        const input = form[category.toLowerCase()]
        if (input.checked) {
            count++
            selectedtopics.push(input.value)
        }
    })
    //   console.log(count)
    console.log(selectedtopics)
 
    if (count < 1 ) {
        
    } else {
        enterQuiz(selectedtopics)
    }
})

let selectquetionss = [];
let activequetionindex = -1;


function enterQuiz(selectedtopics) {
    quizQuestions.forEach((quizQuestion) => {
        if (selectedtopics.filter(topic => topic === quizQuestion.topic).length > 0) {
            selectquetionss.push(...quizQuestion.questions)
            console.log(selectquetionss)
        }
    })

    if (selectquetionss.length) {
        activequetionindex++;
        startquiz()
    }
    else alert("no quetion found")
}


const question = document.getElementById("question")
const description = document.getElementById("description")
const optionsContainer = document.getElementById("options")
const next = document.getElementById("next")

let selectedOption = null;

function optiondata(option) {
    optionsContainer.innerHTML = "";
    for (let key in option) {
        const div = document.createElement("div");
        div.innerHTML = `
        <input id="${key}" value = "${option[key]}" type="radio" name="option"/>
        <label for ="${key}">${option[key]}</label>`;
        optionsContainer.appendChild(div);

    }
    const radioButton = document.querySelectorAll('input[name="option"]');
    radioButton.forEach((radio) => {
        radio.addEventListener('change', (e) => {
            selectedOption = e.target.value;
        })
    })
}

let ans = null
function startquiz() {
    if (activequetionindex >= selectquetionss.length) {
        question.classList.add("nonedisplay");
        herosection.style.display = "block";
        selectquetion.style.display = "none";
        selectquetion.classList.remove("showdisplay");
        selectquetion.classList.add("hidedisplay");
        herosection.innerHTML = `
            <h1>Your score is ${score}</h1>
            <button id="restart">Restart</button>
        `;
        
        const restart = document.getElementById("restart");
        restart.addEventListener("click", () => {
            location.reload();
        });
        return;
    } 
    else {

    selectquetion.style.display = "none"
    herosection.style.display = "none"
    question.classList.remove("nonedisplay")
    console.log(selectedOption)
    ans = selectquetionss[activequetionindex].correct;

    const selectedquetions = selectquetionss[activequetionindex].question;
    description.innerText = selectedquetions


    let option = selectquetionss[activequetionindex].options;



    console.log(score)

    console.log("activeindex" + activequetionindex)
    console.log(option)


    optiondata(option)
}

}

next.addEventListener("click", () => {
    if (!selectedOption) {
        alert("Please select")
        activequetionindex--
    }
    if (selectedOption == ans) {
        score += 5
    }
    console.log(score)
    activequetionindex++
    startquiz()
    selectedOption = null;

})



















closebutton.addEventListener("click", togglebar)
Start_solving.addEventListener("click", togglebar)