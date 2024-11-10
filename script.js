const NoteContainer = document.querySelector('.note-container')
const btn = document.querySelector('.btn')
const notes = document.querySelectorAll('.input-box')

function showNotes() {
    NoteContainer.innerHTML = localStorage.getItem('notes')
}

showNotes()

function updateData() {
    localStorage.setItem('notes' , NoteContainer.innerHTML)
}

btn.addEventListener('click' , () => {
    let inputBox = document.createElement('p')
    let img = document.createElement('img')
    inputBox.className = 'input-box'
    inputBox.setAttribute('contenteditable' , 'true')
    img.src = "./images/delete.png"
    NoteContainer.appendChild(inputBox).appendChild(img)
    updateData()
})

NoteContainer.addEventListener('click' , (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
        updateData()
    } else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box')
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateData()
            }
        })
    }
})


document.addEventListener('keydown' , event => {
    if (event.key === 'Enter') {
        document.execCommand('insertLineBreak')
        event.preventDefault()
    }
})
