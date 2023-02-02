const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    const myChapter = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const delButton = document.createElement('button');
    
    listItem.textContent = myChapter;
    delButton.textContent = '❌';

    listItem.appendChild(delButton);
    list.appendChild(listItem, delButton);
    
    delButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();

})