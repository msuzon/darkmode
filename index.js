const addToDoButton = document.getElementById('todobutton')
const inputField = document.getElementById('inputfield')
const toDoContainer = document.getElementById('todocontainer')

addToDoButton.addEventListener('click',function(){
    var paragraph  = document.createElement('p');
    toDoContainer.appendChild(paragraph)
    paragraph.innerText = inputField.value
    inputField.value = ""
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through'
    })

    paragraph.addEventListener('dblclick',function(){
        paragraph.style.textDecoration = this.remove('line-through')
    })
})