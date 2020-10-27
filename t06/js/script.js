const x = document.getElementById('hero');
const y = document.getElementById('lab');

btn.onclick = function() {
  if ( x.textContent === "Bruce Banner" ) {
    x.textContent = "Hulk";
    x.style.letterSpacing = '6px';
    x.style.fontSize = '130px';
    y.style.backgroundColor = '#70964b'
  }
  else {
    x.textContent = "Bruce Banner";
    x.style.letterSpacing = '2px';
    x.style.fontSize = '60px';
    y.style.backgroundColor = '#ffb300'
  }
};