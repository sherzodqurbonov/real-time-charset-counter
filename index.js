const textareaEl = document.getElementById("textarea")
const tatalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("temaining-counter")
textareaEl.addEventListener("keyup", () => {
    updateCounter()
})

updateCounter()

function updateCounter(){
   tatalCounterEl.innerText = textareaEl.value.length
   remainingCounterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}