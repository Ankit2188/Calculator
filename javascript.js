let input = document.getElementById('inputbox')
let buttons = document.querySelectorAll('button')
let a = ""

let arr = Array.from(buttons)
arr.forEach(button =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            a = eval(a)
            input.value = a
        }
        else if(e.target.innerHTML == 'AC'){
            a = ""
            input.value = a
        }
        else if(e.target.innerHTML == 'DEL'){
        a = a.substring(0, a.length-1)
        input.value = a
        }
        else{
            a += e.target.innerHTML
        input.value = a
        }
    })
})
