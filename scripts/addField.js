document.querySelector("#add-time")
.addEventListener('click', cloneField);

function cloneField(){
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input');

    //Para cada campo limpar
    fields.forEach(field => {
        field.value = "";
    });

    document.querySelector('#schedule-items').appendChild(newFieldContainer);
};
