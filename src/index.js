// target targets the event children the child of the form and index for siblims-- value for contenct.
// https://github.com/jsoto007/phase-1-js-fetch-on-demand-with-forms
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userInput = e.target.children[1].value // here we are targetting the form. then the childrean from there we get an array
    const p = document.createElement('p')
    const ul = document.getElementById('tasks')
    ul.appendChild(p);
    p.innerText = userInput;
    form.reset()
})
// 