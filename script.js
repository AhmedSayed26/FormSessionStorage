let inputs = document.querySelectorAll("input")
inputs.forEach(input =>{
    input.addEventListener("input",function(){
        window.sessionStorage.setItem(input.id , input.value);
    })
    if(window.sessionStorage.getItem(input.id)){
        input.value = window.sessionStorage.getItem(input.id);
    }
});

