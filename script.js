// THIS CODE TARGETS BOTH THE INPUT FIELD AND
// THE BUTTON BESIDES IT AND ENBALES THEM TO ADD 
// AN ITEM TO THE LIST.
const button = document.querySelector('.btn-main');
button.addEventListener('click', () => {
    const input = document.querySelector('input');
    const list = document.querySelector('ul');

    list.insertAdjacentHTML(
        'afterbegin',
        `<li>${input.value}</li>`
    );
    input.value = '';
});
// THIS IS THE WIDE BUTTON WITH 'hide list' TEXT AND THIS CODE 
// ENABLES IT TO HIDE OR SHOW LIST ITEMS WHEN CLICKED
const toggler = document.querySelector('.btn-toggler');
toggler.addEventListener('click', () => {
    const listItems = document.querySelector('.list-items')
    if(listItems.style.display === 'none'){
        toggler.textContent = 'Hide List'
        listItems.style.display = 'block'
    }else{
        listItems.style.display = 'none'
    }
    
})
// LAST RED BUTTON, THIS ENABLES IT TO REMOVE ITEMS
// FROM THE LIST STARTING FROM THE LAST CHILD
const btnRemove = document.querySelector('.button-remove');
btnRemove.addEventListener('click', () => {
    const listChild = document.querySelector('li:last-child');

    listChild.remove()
})


