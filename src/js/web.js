console.log('web...');

let paragraph = document.getElementById('paragraph');
let okButton = document.getElementById('ok-button');

okButton.addEventListener('click', function() {
  paragraph.innerText = 'Button clicked...';
});