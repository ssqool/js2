let x1 = document.getElementById('field_1');
let x2 = document.getElementById('field_2');
let x3 = document.getElementById('field_3');
let x4 = document.getElementById('field_4');
let x5 = document.getElementById('field_5');
let x6 = document.getElementById('field_6');
let x7 = document.getElementById('field_7');
let x8 = document.getElementById('field_8');
let x9 = document.getElementById('field_9');
let turns_value = document.getElementById('turns_value');

// players move
function playerMove () {
  if (counter_draw % 2 === 0) {
    document.getElementById('player_card1').style.background = 'yellow';
    document.getElementById('player_card2').style.background = 'lightgrey';
  } else {
    document.getElementById('player_card1').style.background = 'lightgrey';
    document.getElementById('player_card2').style.background = 'yellow';
  }
}

//draw
function draw () {
  if (counter_draw === 9) {
    document.getElementById('menu').style.background = 'yellow'; //draw
    who_win.insertAdjacentHTML(`beforeend`, `It's a draw!`)
    document.getElementById('player_card1').style.background = 'lightgrey';
    document.getElementById('player_card2').style.background = 'lightgrey';
  }
}
//clear color with box of players
function clearPlayer () {
  if (counter_draw % 2 === 0) {
    document.getElementById('player_card1').style.background = 'yellow';
    document.getElementById('player_card2').style.background = 'lightgrey';
  } else {
    document.getElementById('player_card1').style.background = 'lightgrey';
    document.getElementById('player_card2').style.background = 'yellow';
  }
}

//win style

function winStyle () {
  document.getElementById('menu').style.background = 'green';
  who_win.insertAdjacentHTML(`beforeend`, `Player ${counter1 === true ? '2' : '1'} win`)
  who_win.style.color = 'white';
  document.getElementById('player_card1').style.background = 'lightgrey';
  document.getElementById('player_card2').style.background = 'lightgrey';
  counter_draw += 1;
  counter_win = true;
}

//add x or o

function addElement (elem) {
  if (counter1 === true) {
    elem.insertAdjacentHTML(`beforeend`, `x`);
    counter1 = false;
  } else if (counter1 === false) {
    elem.insertAdjacentHTML(`beforeend`, `o`);
    counter1 = true;
  }
}

let menu = document.getElementsByClassName('menu')

let counter1 = true;
let counter_draw = 0;
let counter_win = false;

document.getElementById('player_card1').style.background = 'yellow';
let who_win = document.getElementById('who_won');

field_1.onclick = function () {
  if(x1.innerHTML !== 'x' && x1.innerHTML !== 'o' && counter_win !== true) {
    addElement (x1);
    playerMove();
    clearPlayer ();
    let check1 = x1.innerHTML.concat(x3.innerHTML,x2.innerHTML);
    let check2 = x1.innerHTML.concat(x4.innerHTML,x7.innerHTML);
    let check3 = x1.innerHTML.concat(x5.innerHTML,x9.innerHTML);
    if (check1 === 'xxx' || check1 === 'ooo' || check2 === 'xxx' || check2 === 'ooo' || check3 === 'xxx' || check3 === 'ooo') {
      winStyle ();
      if (check1 === 'xxx' || check1 === 'ooo') {
        let green11 = [x1, x3, x2];
        green11.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else if (check2 === 'xxx' || check2 === 'ooo') {
        let green12 = [x1, x4, x7];
        green12.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else {
        let green13 = [x1, x5, x9];
        green13.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      }
    } else {
      counter_draw += 1;
      draw ();
    }
    //output turn
    turns_value.innerHTML = '';
    turns_value.innerHTML = counter_draw;
  }
}
field_2.onclick = function () {
  if (x2.innerHTML !== 'x' && x2.innerHTML !== 'o' && counter_win !== true) {
    addElement (x2);
    playerMove();
    clearPlayer ();
    check1 = x2.innerHTML.concat(x1.innerHTML,x3.innerHTML);
    check2 = x2.innerHTML.concat(x5.innerHTML,x8.innerHTML);
    if (check1 === 'xxx' || check1 === 'ooo' || check2 === 'xxx' || check2 === 'ooo') {
      winStyle ();
      if (check1 === 'xxx' || check1 === 'ooo') {
        let green21 = [x1, x2, x3];
        green21.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else if (check2 === 'xxx' || check2 === 'ooo') {
        let green22 = [x2, x5, x8];
        green22.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      }
    }else {
      counter_draw += 1;
      draw ();
    }
    //output turn
    turns_value.innerHTML = '';
    turns_value.innerHTML = counter_draw;
  }
}
field_3.onclick = function () {
  if(x3.innerHTML !== 'x' && x3.innerHTML !== 'o' && counter_win !== true) {
    addElement (x3);
    playerMove();
    clearPlayer ();
    check1 = x3.innerHTML.concat(x1.innerHTML,x2.innerHTML);
    check2 = x3.innerHTML.concat(x5.innerHTML,x7.innerHTML);
    check3 = x3.innerHTML.concat(x6.innerHTML,x9.innerHTML);
    if (check1 === 'xxx' || check1 === 'ooo' || check2 === 'xxx' || check2 === 'ooo' || check3 === 'xxx' || check3 === 'ooo') {
      winStyle ();
      if (check1 === 'xxx' || check1 === 'ooo') {
        let green31 = [x1, x2, x3];
        green31.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else if (check2 === 'xxx' || check2 === 'ooo') {
        let green32 = [x3, x5, x7];
        green32.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else {
        let green33 = [x3, x6, x9];
        green33.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      }
    }else {
      counter_draw += 1;
      draw ();
    }
    //output turn
    turns_value.innerHTML = '';
    turns_value.innerHTML = counter_draw;
  }
}
field_4.onclick = function () {
  if (x4.innerHTML !== 'x' && x4.innerHTML !== 'o' && counter_win !== true) {
    addElement (x4);
    playerMove();
    clearPlayer ();
    check1 = x4.innerHTML.concat(x1.innerHTML, x7.innerHTML);
    check2 = x4.innerHTML.concat(x5.innerHTML, x6.innerHTML);
    if (check1 === 'xxx' || check1 === 'ooo' || check2 === 'xxx' || check2 === 'ooo') {
      winStyle ();
      if (check1 === 'xxx' || check1 === 'ooo') {
        let green41 = [x1, x4, x7];
        green41.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else if (check2 === 'xxx' || check2 === 'ooo') {
        let green42 = [x4, x5, x6];
        green42.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      }
    } else {
      counter_draw += 1;
      draw ();
    }
    //output turn
    turns_value.innerHTML = '';
    turns_value.innerHTML = counter_draw;
  }
}
field_5.onclick = function () {
  if (x5.innerHTML !== 'x' && x5.innerHTML !== 'o' && counter_win !== true) {
    addElement (x5);
    playerMove();
    clearPlayer ();
    check1 = x5.innerHTML.concat(x2.innerHTML, x8.innerHTML);
    check2 = x5.innerHTML.concat(x4.innerHTML, x6.innerHTML);
    if (check1 === 'xxx' || check1 === 'ooo' || check2 === 'xxx' || check2 === 'ooo') {
      winStyle ();
      if (check1 === 'xxx' || check1 === 'ooo') {
        let green51 = [x2, x5, x8];
        green51.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else if (check2 === 'xxx' || check2 === 'ooo') {
        let green52 = [x4, x5, x6];
        green52.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      }
    } else {
      counter_draw += 1;
      draw ();
    }
    //output turn
    turns_value.innerHTML = '';
    turns_value.innerHTML = counter_draw;
  }
}
field_6.onclick = function () {
  if (x6.innerHTML !== 'x' && x6.innerHTML !== 'o' && counter_win !== true) {
    addElement (x6);
    playerMove();
    clearPlayer ();
    check1 = x6.innerHTML.concat(x3.innerHTML, x9.innerHTML);
    check2 = x6.innerHTML.concat(x4.innerHTML, x5.innerHTML);
    if (check1 === 'xxx' || check1 === 'ooo' || check2 === 'xxx' || check2 === 'ooo') {
      winStyle ();
      if (check1 === 'xxx' || check1 === 'ooo') {
        let green61 = [x3, x6, x9];
        green61.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else if (check2 === 'xxx' || check2 === 'ooo') {
        let green62 = [x4, x5, x6];
        green62.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      }
    } else {
      counter_draw += 1;
      draw ();
    }
    //output turn
    turns_value.innerHTML = '';
    turns_value.innerHTML = counter_draw;
  }
}
field_7.onclick = function () {
  if(x7.innerHTML !== 'x' && x7.innerHTML !== 'o' && counter_win !== true) {
    addElement (x7);
    playerMove();
    clearPlayer ();
    check1 = x7.innerHTML.concat(x3.innerHTML, x5.innerHTML);
    check2 = x7.innerHTML.concat(x1.innerHTML, x4.innerHTML);
    check3 = x7.innerHTML.concat(x8.innerHTML, x9.innerHTML);
    if (check1 === 'xxx' || check1 === 'ooo' || check2 === 'xxx' || check2 === 'ooo' || check3 === 'xxx' || check3 === 'ooo') {
      winStyle ();
      if (check1 === 'xxx' || check1 === 'ooo') {
        let green71 = [x3, x5, x7];
        green71.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else if (check2 === 'xxx' || check2 === 'ooo') {
        let green72 = [x1, x4, x7];
        green72.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else {
        let green73 = [x7, x8, x9];
        green73.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      }
    } else {
      counter_draw += 1;
      draw ();
    }
    //output turn
    turns_value.innerHTML = '';
    turns_value.innerHTML = counter_draw;
  }
}
field_8.onclick = function () {
  if (x8.innerHTML !== 'x' && x8.innerHTML !== 'o' && counter_win !== true) {
    addElement (x8);
    playerMove();
    clearPlayer ();
    check1 = x8.innerHTML.concat(x7.innerHTML, x9.innerHTML);
    check2 = x8.innerHTML.concat(x2.innerHTML, x5.innerHTML);
    if (check1 === 'xxx' || check1 === 'ooo' || check2 === 'xxx' || check2 === 'ooo') {
      winStyle ();
      if (check1 === 'xxx' || check1 === 'ooo') {
        let green21 = [x7, x8, x9];
        green21.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else if (check2 === 'xxx' || check2 === 'ooo') {
        let green22 = [x2, x5, x8];
        green22.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      }
    }else {
      counter_draw += 1;
      draw ();
    }
    //output turn
    turns_value.innerHTML = '';
    turns_value.innerHTML = counter_draw;
  }
}
field_9.onclick = function () {
  if (x9.innerHTML !== 'x' && x9.innerHTML !== 'o' && counter_win !== true) {
    addElement (x9);
    playerMove();
    clearPlayer ();
    check1 = x9.innerHTML.concat(x7.innerHTML, x8.innerHTML);
    check2 = x9.innerHTML.concat(x3.innerHTML, x6.innerHTML);
    check3 = x9.innerHTML.concat(x1.innerHTML, x5.innerHTML);
    let green93 = [];
    if (check1 === 'xxx' || check1 === 'ooo' || check2 === 'xxx' || check2 === 'ooo' || check3 === 'xxx' || check3 === 'ooo') {
      winStyle ();
      if (check1 === 'xxx' || check1 === 'ooo') {
        let green91 = [x7, x8, x9];
        green91.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else if (check2 === 'xxx' || check2 === 'ooo') {
        let green92 = [x3, x6, x9];
        green92.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      } else {
        let green93 = [x1, x5, x9];
        green93.forEach(function stcolor (elem) {
          elem.style.color = 'green';
          elem.style.fontSize = "120%"
        });
      }
    } else {
      counter_draw += 1;
      draw ();
    }
    //output turn
    turns_value.innerHTML = '';
    turns_value.innerHTML = counter_draw;
  }
}
document.getElementById('reset').onclick = function() {
  location.reload(); // перезагружаем страницу
}