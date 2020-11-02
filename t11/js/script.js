const clear = document.querySelector('.clear');
const add = document.querySelector('.add');
let notes = document.querySelector('.output-text');
let j = 0;

function firstDraw() {
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let j = 1; j <= ca.length; j++) {
    let name = j + "=";
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        if (i === 0) {
          notes.innerHTML = '';
          notes.innerHTML += `--> ${c.substring(name.length, c.length)}`;
        } else {
          notes.innerHTML += `<br>--> `
          notes.innerHTML += c.substring(name.length, c.length);
        }
      }
    }
  }
}

function clearCookies() {
  let question = confirm('Are you sure?','')
  if (question === true) {
    let clear = document.cookie.split(';');
    for (let i = 0; i < clear.length; i++) {
      let cookie = clear[i];
      let eqPos = cookie.indexOf("=");
      let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
      document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      notes.innerHTML = '[Empty]';
    }
  }
}
let textAreaValue;
function setCookie() {
  textAreaValue = document.querySelector('.text-color').value;
  ++j;
  document.cookie = `${j} = ${textAreaValue}`;
  getCookie();
}

function getCookie() {
  let name = j + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  if (textAreaValue === "") {
    alert('It\'s empty. Try to input something in "Text input"')
  }else {
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        if (i === 0) {
          notes.innerHTML = '';
          notes.innerHTML += `--> ${c.substring(name.length, c.length)}`;
        } else {
          notes.innerHTML += `<br>--> `
          notes.innerHTML += c.substring(name.length, c.length);
        }
      }
    }
  }
}
if (document.cookie === '') {
  notes.innerHTML = '[Empty]';
} else {
  firstDraw()
}
add.addEventListener('click', setCookie);
clear.addEventListener('click', clearCookies);
console.log(document.cookie)

