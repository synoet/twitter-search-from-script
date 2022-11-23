const input = document.querySelectorAll("[data-testid=SearchBox_Search_Input]")[0]
input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && input.parentElement.children.length === 2 && event.target.value === " ") {
      input.parentElement.children[1].remove()
       input.style.paddingLeft = "0px"
    }
    if (event.target.value.includes(":from")) {
        event.target.value = event.target.value.replace(":from", "")
        let p = document.createElement('p');
        input.parentElement.style.position = "relative"
        p.style.position = "absolute"
        p.style.color = "gray"
        p.style.top = "-5px"
        p.style.left = "10px"
        p.innerHTML = ":from"
        input.style.paddingLeft = "50px"
        input.parentElement.appendChild(p)
    }
})
