
const counterText = document.querySelector('#counter')

const minusBtn = document.querySelector('#minus-btn')
const plusBtn = document.querySelector('#plus-btn')
const resetBtn = document.querySelector('#reset-btn')

console.log(plusBtn)

let count = 0;



//event-handler function when the even happens
const increase = () => {
    count++
    console.log(count)
    counterText.textContent = count
}

const decrease = () => {
    count--
    console.log(count)
    //counterText.textContent = count
    counterText.textContent = count
}

const reset = () => {
    count = 0
    console.log(count)
   // counterText.textContent = count
   counterText.textContent = count
}

minusBtn.addEventListener('click',decrease)
plusBtn.addEventListener('click',increase)
resetBtn.addEventListener('click',reset)

//return a node-list that behave like an array
const themeBtns = document. querySelectorAll('.theme-buttons')

const selectTheme = (evt) => {
    //console.log(evt.target.textContent)
    const theme = evt.target.textContent

    document.querySelector('body').className = theme
    document.querySelector('main').className = theme

    const buttons = document.querySelectorAll('button')

    for (let i=0;i<buttons.length;i++){
        buttons[i].className = theme
    }
}

// console.log(themeBtns)
for(let i=0; i<themeBtns.length;i++){
    themeBtns[i].addEventListener('click',selectTheme)
}