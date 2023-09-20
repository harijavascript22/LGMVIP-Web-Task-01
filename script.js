const addNoteButton = document.getElementById('addNote');
const main = document.querySelector('main');

addNoteButton.addEventListener('click', () => {
    createNoteCard();
});

function createNoteCard() {
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');

    const closeIcon = document.createElement('span');
    closeIcon.classList.add('close-icon');
    closeIcon.innerHTML = '&#10006;';
    closeIcon.addEventListener('click', () => {
        noteCard.remove();
    });

    const textArea = document.createElement('div');
    textArea.classList.add('textarea');
    textArea.contentEditable=true;
    textArea.placeholder = 'Take a note...';


    const tickIcon = document.createElement('span');
    tickIcon.classList.add('tick-icon');
    tickIcon.innerHTML = '&#10003;';
    tickIcon.addEventListener('click', () => {
        const color = noteCard.style.backgroundColor;
        console.log(color)
        if(color !=='#888') noteCard.style.backgroundColor="#888"
        else noteCard.style.backgroundColor='#222'
      
    });

    noteCard.appendChild(closeIcon);
    noteCard.appendChild(textArea);
    noteCard.appendChild(tickIcon);

    main.appendChild(noteCard);
}
