const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];


chaptersArray.forEach(chapter => {
    displayList(chapter)
});

button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value)
        chaptersArray.push(input.value)
        setChapterList()
        input.value = ""
        input.focus();
    }
});

function displayList(item) {
    let newChap = document.createElement('li');
    let deleteBtn = document.createElement('button');

    newChap.textContent = item;
    deleteBtn.textContent = "❌";
    newChap.append(deleteBtn);
    list.append(newChap);

    deleteBtn.addEventListener('click', function () {
        list.removeChild(newChap);
        deleteChapter(item); //newChap.textContent
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('bomList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1)
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}


