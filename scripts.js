
var darkBtn = document.getElementById('night')
var html = document.querySelector('html')
var footer = document.getElementById("foot")
var logo = document.getElementById('bawma-logo')

darkBtn.addEventListener('click', function(){
html.classList.toggle('darkmode')
// darkBtn.setAttribute("src", "Assets/Logos/night-mode.png")
})


value = 0
function ch(){
    if(value ==0){
        const img = document.getElementById('night')
        img.src = "Assets/Logos/night-mode.png"
        footer.style.backgroundColor = "#000000"
        img.style.filter = "drop-shadow(rgba(255, 255, 255, 0.507) 4px 2px 2px )"
        // logo.style.filter = "drop-shadow( rgb(0, 238, 255)2px 2px 8px)"
        value++
    }else{
        const img = document.getElementById('night')
        img.src =  "Assets/Logos/night-mode2.png"
        footer.style.backgroundColor = "#008CFF"
        img.style.filter = "drop-shadow(rgba(0, 0, 0, 0.507) 4px 2px 2px )"
        // logo.style.filter = "drop-shadow( rgb(0, 238, 255)2px 2px 8px)"
        value--
    }
}


    
