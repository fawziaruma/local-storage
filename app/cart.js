document.getElementById('btn-add-name').addEventListener("click" , function(){
    const  nameField = document.getElementById('name-filed')
    const nameValue = nameField.value 

    localStorage.setItem('Name' , nameValue )

}  )


document.getElementById('btn-remove-ls').addEventListener('click' ,  function(){
    localStorage.removeItem('Name')
})


document.getElementById('btn-add-age').addEventListener('click', function(){
    const ageField = document.getElementById('age-filed')
    const ageValue = ageField.value 

    localStorage.setItem('age', ageValue)
})
document.getElementById('btn-remove-age').addEventListener('click', function(){
    localStorage.removeItem('age')
})

document.getElementById('btn-clear-LS').addEventListener('click', function(){
    localStorage.clear()
})