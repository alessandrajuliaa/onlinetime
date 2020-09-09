// MENU FUNÇÕES
document.querySelector('.btnMenu').addEventListener('click', ()=>{
    document.querySelector('.divMenu').style.display = "flex"
    document.querySelector('body').style.overflow = 'hidden';
})
document.querySelector('.btnClose').addEventListener('click', ()=>{
    document.querySelector('.divMenu').style.display = "none"
    document.querySelector('body').style.overflow = 'auto';
})