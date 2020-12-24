var form = document.querySelector('.needs-validation');
const alert = document.querySelector('#alertContainer');
const nameInput = document.querySelector('#name');
const phonenumberInput = document.querySelector('#number');
const addBtn = document.querySelector('#btn-add');
const clearBtn = document.querySelector('#btn-clear');

form.addEventListener('submit', onSubmit);
clearBtn.addEventListener('click', OnClick);

//Add button function
function onSubmit()
{
    event.preventDefault();
    event.stopPropagation();

    if(form.checkValidity() === false)
    {
        addBtn.classList.remove('btn-primary');
        addBtn.classList.remove('btn-success');
        addBtn.classList.add('btn-danger');
        alert.innerHTML = '<div class="row"> <div class="col"> <div class="alert alert-danger alert-dismissable fade show" role="alert"> <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span></button> Error! Check for empty fields </div> </div> </div>';
    }
    else
    {
        addBtn.classList.remove('btn-primary');
        addBtn.classList.remove('btn-danger');
        addBtn.classList.add('btn-success');
        alert.innerHTML = '<div class="row"> <div class="col"> <div class="alert alert-success alert-dismissable fade show" role="alert"> <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span></button> Added ' + nameInput.value + ' to numbers!' + '</div> </div> </div>';
    }
    form.classList.add('was-validated');
}


//Clear button function
function OnClick()
{
    nameInput.value = '';
    phonenumberInput.value = '';
    addBtn.classList.remove('btn-success');
    addBtn.classList.remove('btn-danger');
    addBtn.classList.add('btn-primary');
    form.classList.remove('was-validated');
}