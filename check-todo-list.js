function checking(id){
    var checkbox = document.getElementById(id)
    console.log(id)
    if(checkbox.checked){
        checkbox.parentElement.style.textDecoration = 'line-through';
    }
    else{
        checkbox.parentElement.style.textDecoration = 'none';
    }
}