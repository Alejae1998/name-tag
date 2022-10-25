const nameDisplay = document.getElementById('name');
//console.log(`nameDisplay`, nameDisplay);

nameDisplay.textContent = 'Alejandra';
nameDisplay.classList.add('yellow');

const updateBtn = document.getElementById('btn');
updateBtn.addEventListener('click', () => {
    //console.log('I clicked the button');
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});

const colorDropdown = document.getElementById('dropdown');
colorDropdown.addEventListener('change', () => {
    //console.log('change is happening');
    //console.log(colorDropdown.value);

    nameDisplay.classList.remove('tomato');
    nameDisplay.classList.remove('green');
    nameDisplay.classList.remove('pink');
    nameDisplay.classList.add(colorDropdown.value);
});
