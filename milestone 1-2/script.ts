const btn = document.getElementById("btn") as HTMLButtonElement
const skills  = document.getElementById("skills") as HTMLElement

btn.addEventListener("click", ()=>{
    if(skills.style.display === "none"){
        skills.style.display = "block"
    }else{
        skills.style.display = "none"
    }
})