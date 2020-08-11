console.log('i am working')

const headerText = document.querySelector('.title')

headerText.innerText = 'Scott Loves Fish Tanks'

headerText.style = 'color: red; text-decoration; underline;'

headerText.style.fontSize = '16px'

headerText.style.fontSize = '32px'

headerText.classList.add('dark-mode')

// const dynamicDiv = document.getElementById("dynamic-div")

// // dynamicDiv.innerHTML = '
// // <>
// //     <li>One</li>
// //     <li>Two</li>
// //     <li>Three</li>

const storyButton = document.getElementById('story-button')

function changeColor(e) {
    e.preventDefault()
    e.stopPropagation()
    console.log('i got clicked')

    const content = document.querySelector('.content-hold')
    const colorInput = document.getElementById('color-input')

    content.style.background = colorInput.value 

    colorInput.value = ''
}

storyButton.addEventListener('click', changeColor)

const content = document.querySelector('.story-hold')
content.addEventListener('click', () => {
    console.log("I CLICKED ON CONTENT HOLD")
})

document.getElementById('part-button').addEventListener('click', e => {
    e.stopPropagation()
    const input = document.getElementById('part-input')
    const list = document.getElementById('part-list')
    

    if(input.value) {
    const newLi = document.createElement('li')

    newLi.innerText = input.value

    newLi.addEventListener('dblclick', () => {
        newLi.remove()
    })

    list.appendChild(newLi)
    input.value = ''
    } else {
        const notification = document.getElementById('empty-field-notification')
        if(!notification) {
        const newP = document.createElement('p')
        newP.innerText = 'Please input a story'
        newP.classList.add('notification')
        newP.setAttribute('id', 'empty-field-notification')

        const container = document.querySelector('.part-form')
        container.appendChild(newP)
    }
    }
    console.log('YOU CLIKCED THE THING GOOD JOB')
})