const answers = document.getElementsByClassName("answer");
const quest = document.getElementById("question");
const results = document.getElementById("results");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
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
    let arr = data;
    let randomArr = [];
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        arr = setGame(data, randomArr);
        answer1.addEventListener('click', function () {
            check();
        });
        answer2.addEventListener('click', check);
        answer3.addEventListener('click', check);
        answer4.addEventListener('click', check);

    }
}
function setGame(arr, randomArr) {
    const random = rand(arr);
    randomArr.push(random);
    // console.log(randomArr);
    quest.innerHTML = arr[random].q;
    for (let i = 0; i < answers.length; i++) {
        // debugger;
        answers[i].innerHTML = JSON.stringify(arr[random].a[i].aText);
        answers[i].dataset.isTrue = arr[random].a[i].isTrue;
        //  
        console.log(answers[i].dataset.isTrue);

        // answers[i].innerHTML = "";
    }
    // arr.splice(random, 0);
    // console.log(arr);
    return arr;
}

function check() {
    //console.log(this.dataset);
    // debugger;
    if (this.dataset.isTrue == 'true') {
        score++;
        this.style.backgroundColor = 'green';
        results.innerHTML = score;
        quest.innerHTML = '';
        // this.parentNode.children.innerHTML = '';
        // this.removeEventListener('click', check);

        return;
    }
    else {
        this.style.backgroundColor = 'red';
    }


}
function rand(arr) {
    let rand = Math.floor(Math.random() * arr.length);
    //console.log(rand);

    // console.log(randArr.find(rand));
    while (arr.includes(rand) == true) {
        rand = Math.floor(Math.random() * arr.length);
    }
    // if (arr.includes(rand) == false) {
    //     arr.push(rand);
    //     //console.log(randArr);
    //     return rand;
    // }
    return rand;
}
main();


