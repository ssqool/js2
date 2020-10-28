// Correct errors in attibutes
let x = Object.values(document.getElementsByTagName("li"));
console.log(x);
let ar=x.find((elem)=>{if(elem.className=='')return elem});
ar.className = "unknown"; // make the class equal to unknown.

let chapter = document.querySelectorAll('li');

for (let i = 0; i < chapter.length; i++) {
  if (!chapter[i].getAttribute('data-element')) {
    chapter[i].setAttribute('data-element', 'none');
  }
} // make the data-element equal to none.

// Append circle div elements depending on the attributes.
for (let i = 0; i < chapter.length; i++) {
  let getDataElem = chapter[i].getAttribute("data-element");
  let splitedgetDataElem = getDataElem.split(" ");
  let br1 = document.createElement('br'); // append line break
  chapter[i].append(br1);
  for (let j = 0; j < splitedgetDataElem.length; j++) {
    let div1 = document.createElement('div');
    if(splitedgetDataElem[j] === 'none'){
      chapter[i].insertAdjacentHTML("beforeend", `<div class="elem"><div class="line"></div></div>`);//append to each none data-element
    } else {
      div1.classList.add(splitedgetDataElem[j]);// append class deppending on data-element attribute
      div1.classList.add('elem');
      chapter[i].append(div1);
    }
  }
}
