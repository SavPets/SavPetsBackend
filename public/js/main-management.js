// =============== MENU ===============
function setCurrentPage() {
    const page = `/${document.body.classList}`
    const currentPage = document.querySelector(`.header-content_menu a[href="${page}"]`)

    return currentPage
}

(function activeMenuOnCurrentPage() {
    const headerListOption = setCurrentPage()
    
    headerListOption.classList.add('menu-management-active')
})()

const burger = document.querySelector('.burger')
const headerContent = document.querySelector('.header-content')

burger.addEventListener('click', () => openMobileMenu(burger))

function openMobileMenu(burger) {
    burger.classList.toggle('open')
    headerContent.classList.toggle('side-menu--management-active')
}

// =============== TOP BAR ===============
(function createBreadCrumb() {
    const topBarPath = document.querySelector('.top-bar_path:first-child')
    const currentPage = setCurrentPage().textContent.trim()
    let newPath

    switch(currentPage) {
        case 'Cargos':
            newPath = '<a class="top-bar_path" href="/cargos">Cargos</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break
        case 'Departamentos':
            newPath = '<a class="top-bar_path" href="/departamentos">Departamentos</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break
        case 'Funcionários':
            newPath = '<a class="top-bar_path" href="/funcionarios">Funcionários</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break
        case 'Clientes':
            newPath = '<a class="top-bar_path" href="/clientes">Clientes</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break
        case 'Adoções':
            newPath = '<a class="top-bar_path" href="/adocoes">Adoções</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break
        case 'Animais':
            newPath = '<a class="top-bar_path" href="/animais">Animais</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break
        case 'Relatórios de animais':
            newPath = '<a class="top-bar_path" href="/relatorios-animais">Relatórios de animais</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break
        case 'Categorias de animais':
            newPath = '<a class="top-bar_path" href="/categorias-animais">Categorias de animais</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break
        case 'Medicamentos':
            newPath = '<a class="top-bar_path" href="/medicamentos">Medicamentos</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break
        case 'Alimentos':
            newPath = '<a class="top-bar_path" href="/alimentos">Alimentos</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break
        case 'Equipamentos':
            newPath = '<a class="top-bar_path" href="/equipamentos">Equipamentos</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break
        case 'Fornecedores':
            newPath = '<a class="top-bar_path" href="/fornecedores">Fornecedores</a>'
            topBarPath.insertAdjacentHTML('afterend', newPath)
            break   
    }
})()

// =============== QUIT OPTIONS SETTINGS ===============
const quitOption = document.querySelectorAll('.option-quit')

quitOption.forEach(option => {
    option.addEventListener('click', (event) => {
        event.preventDefault()
        Swal.fire({
            title: 'Atenção',
            text: "Você deseja sair da sessão?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#a4cbe0',
            cancelButtonColor: '#ff7575',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim, sair!'
        }).then((result) => {
            if (result.isConfirmed) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
                })
                Toast.fire({
                icon: 'warning',
                title: 'Saindo da sessão'
                })
    
                setTimeout(() => window.location.href = "./index.html", 3100)
            }
        })
    })
})

// =============== DATATABLES SETTINGS ===============
$(document).ready(function () {
    $('#example').DataTable({
        responsive: true
    })
})

// =============== ACTIONS TABLE SETTINGS ===============
const deleteBtn = document.querySelectorAll('.column-action_delete')

deleteBtn.forEach(btn => {
    btn.addEventListener('click', onClickDeleteBtn)
})

function onClickDeleteBtn() {
    Swal.fire({
        title: 'Tem certeza?',
        text: "Você não poderá reverter isso!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#a4cbe0',
        cancelButtonColor: '#ff7575',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deletado!',
                'Registro apagado com sucesso.',
                'success'
            )
        }
    })
}