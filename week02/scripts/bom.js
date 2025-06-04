const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', addChap);
function addChap() {
    if (input.value.trim() !== '') {
        const newChap = document.createElement('li');
        const deleteBtn = document.createElement('button');

        newChap.textContent = input.value;
        deleteBtn.textContent = "❌";
        newChap.append(deleteBtn);
        list.append(newChap);

        deleteBtn.addEventListener('click', removeButton);
        function removeButton() {
            list.removeChild(newChap);
        }
        input.placeholder = 'Enter favorite chapter.';
    } else {
        input.placeholder = 'Try again.';
    }
    input.focus();
    input.value = '';
};





// Instead of (text content) you can use (innerHTML)
// newChap.textContent = input.value;
// newChap.innerHTML = input.value;
// textContent is preferred over innerHTML because it is more secure.
// However, if you need to include HTML tags, then you would use innerHTML.
// textContent will not render HTML tags.It will display the tags as text.
