// content on web events

let paragraph = document.getElementById('paragraph');
let okButton = document.getElementById('ok-button');

paragraph.style.display = 'none';

okButton.addEventListener('click', function() {
  paragraph.innerText = 'Button clicked...';
  paragraph.style.display = 'block';
});