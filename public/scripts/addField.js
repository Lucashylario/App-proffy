// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no batão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false

    // Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    // Para cada campo, limpar
    fields.forEach(function(field){
        // Pegar o field do momento e limpa ele
        field.valeu = ""
    })

    // Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}