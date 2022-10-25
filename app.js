const nameDisplay = document.getElementById('name');
console.log(`nameDisplay`, nameDisplay);

nameDisplay.textContent = 'Alejandra';
nameDisplay.classList.add('yellow');

const updateBtn = document.getElementById('btn');
updateBtn.addEventListener('click', () => {
    console.log('I clicked the button');
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});
