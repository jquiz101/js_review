console.log("-----dom.js-----")

// 1.
// The DOM is the document object model.
// This is the webpage that is built up of objects.
// You program against it using JavaScript

// 2.
// document.getElementById() - takes in an ID as a parameter
// document.querySelector() - can take in other attributes to perform the seach
//   - such as ID, class, element type

// 3.
// document.getElementsByClassName()

// 4.
// *element*.addEventListener() - can accept the type of event you want to listen to
// *element*.onclick - listens to the onclick event only

// 5.
const myButton = document.getElementById("myButton");
console.log(myButton);

myButton.innerHTML = "Click Me";
myButton.style.color = "white";
myButton.style.backgroundColor = "black";

// 6.
myButton.addEventListener("click", function() {
    console.log("myButton is clicked");
    spanCounter.innerHTML++;
    document.body.style.backgroundColor = randomColor();
});

// 7.
const spanCounter = document.getElementById("counter");
console.log(spanCounter);

// 8.
myButton.addEventListener("contextmenu", function() {
    event.preventDefault();
    console.log("myButton right clicked");
    spanCounter.innerHTML--;
    document.body.style.backgroundColor = randomColor();
});

// event.preventDefault(); caused the context menu to no longer show up

// 9.
function randomColor() {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    
    let randomIndex = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1) + 0)
    
    return colors[randomIndex]
}

// 10.
const tableBody = document.querySelector("#quizQuestionsTable tbody");
console.log(tableBody);

let quizQuestions = [
    {
        "id": 79680,
        "answer": "anarchy",
        "question": "In 1921 the black flag flew at the funeral of Peter Kropotkin, philosopher of this government-negating ideology",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.721Z",
        "updated_at": "2014-02-11T23:38:41.721Z",
        "category_id": 10459,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10459,
            "title": "political science",
            "created_at": "2014-02-11T23:38:40.866Z",
            "updated_at": "2014-02-11T23:38:40.866Z",
            "clues_count": 5
        }
    },
    {
        "id": 79681,
        "answer": "Africa",
        "question": "In 2000 Rift Valley fever scared WHO by making its first appearance outside this continent",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.751Z",
        "updated_at": "2014-02-11T23:38:41.751Z",
        "category_id": 10460,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10460,
            "title": "who says",
            "created_at": "2014-02-11T23:38:40.880Z",
            "updated_at": "2014-02-11T23:38:40.880Z",
            "clues_count": 5
        }
    },
    {
        "id": 79682,
        "answer": "yew",
        "question": "\"It had to be\" this evergreen tree that is a homonym for a second-person-singular pronoun",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.780Z",
        "updated_at": "2014-02-11T23:38:41.780Z",
        "category_id": 10461,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10461,
            "title": "also a 3-letter tree",
            "created_at": "2014-02-11T23:38:40.895Z",
            "updated_at": "2014-02-11T23:38:40.895Z",
            "clues_count": 5
        }
    },
    {
        "id": 79683,
        "answer": "Alvin Ailey",
        "question": "In 1977 Madonna won a scholarship to the studio of this alliteratively named N.Y. choreographer",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.809Z",
        "updated_at": "2014-02-11T23:38:41.809Z",
        "category_id": 10462,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10462,
            "title": "prime madonna",
            "created_at": "2014-02-11T23:38:40.909Z",
            "updated_at": "2014-02-11T23:38:40.909Z",
            "clues_count": 5
        }
    },
    {
        "id": 79684,
        "answer": "Harry Potter",
        "question": "(Cheryl of the Clue Crew has a new review from the zoo--the London Zoo in Regent's Park, London.)  At the zoo in Regent's Park this character first discovers his unusual powers when he talks to the snakes",
        "value": 200,
        "airdate": "2007-02-26T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:42.318Z",
        "updated_at": "2014-02-11T23:38:42.318Z",
        "category_id": 10463,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10463,
            "title": "literary london",
            "created_at": "2014-02-11T23:38:42.190Z",
            "updated_at": "2014-02-11T23:38:42.190Z",
            "clues_count": 5
        }
    }
]

quizQuestions.forEach(elem => {
    console.log(elem);
    const newRow = `<tr>
                        <td>${elem.id}</td>
                        <td>${elem.question}</td>
                        <td>${elem.category.title}</td>
                        <td>${elem.value}</td>
                        <td>${elem.answer}</td>
                    </tr>`;
    tableBody.innerHTML += newRow;
});