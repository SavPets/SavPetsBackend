const expandInterval = setInterval(expandRecords, 500)
const editingInterval = setInterval(enableOnClickEditing, 500)
const exclusionInterval = setInterval(enableOnClickExclusion, 500)

function expandRecords() {
    const btnsExpand = document.querySelectorAll('.dtr-control') 

    btnsExpand.forEach(btnExpand=> {
        btnExpand.addEventListener('click', () => {
            enableOnClickEditing()
        })
    })
}

function enableOnClickEditing() {
    const btnsActionEdit = document.querySelectorAll('li span.dtr-data .column-edit_btn')
            
    btnsActionEdit.forEach(btn => {
        btn.addEventListener('click', () => {

            const idEmployee = btn.dataset.id
            btn.setAttribute('href', `/atualizar-funcionario/${idEmployee}`)

            clearIntervals()
        })
    })
}

function enableOnClickExclusion() {
    const btnsActionDelete = document.querySelectorAll('li span.dtr-data .icon-action_delete')

    btnsActionDelete.forEach(btn => {
        btn.addEventListener('click', async () => {

            const idEmployee = btn.dataset.id

            const IsTrueDeleteEmployee = await onClickDeleteBtn()
            IsTrueDeleteEmployee ? window.location.href = `/deletar-funcionario/${idEmployee}` : false

            clearIntervals()
        })
    })
}

function clearIntervals() {
    clearInterval(exclusionInterval)
    clearInterval(editingInterval)
    clearInterval(expandInterval)
}