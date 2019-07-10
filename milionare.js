const answers = document.getElementsByClassName("answer");
const quest = document.getElementById("question");
const results = document.getElementById("results");
let score = 0;
let randArr = [];
//const questPool = 2;
// console.log(quest.innerHTML);
// console.log(answers);
// for (let i = 0; i < answers.length; i++) {
//     answers[i].addEventListener('click', function () {
//         //console.log(this.id);
//     })
// }

const promise = fetch('quest_ans.json').then(res => res.json()).then((data) => {
    main(data);
}).catch(err => { throw err });


function main(data) {
    for (let i = 0; i < data.length; i++) {
        setGame(data);
        game();
    }
}
function setGame(data) {
    const random = rand(data);
    console.log(random);
    quest.innerHTML = data[random].q;
    for (let i = 0; i < answers.length; i++) {
        // debugger;
        answers[i].innerHTML = JSON.stringify(data[random].a[i].aText);
        answers[i].dataset.true = data[random].a[i].isTrue;
    }
}
function game() {

    for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', check);
    }

}
function check() {
    if (this.dataset.true == 'true') {
        score++;
        this.style.backgroundColor = 'green';
        results.innerHTML = score;
        this.removeEventListener('click', check);
    }
    else {
        this.style.backgroundColor = 'red';
    }
    return;

}
function rand(data) {
    let rand = Math.floor(Math.random() * data.length);
    //console.log(rand);

    // console.log(randArr.find(rand));
    while (randArr.includes(rand) == true) {
        rand = Math.floor(Math.random() * data.length);
    }
    if (randArr.includes(rand) == false) {
        randArr.push(rand);
        //console.log(randArr);
        return rand;
    }
}


