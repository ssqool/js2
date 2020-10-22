function addWords(obj, wrds) {
  let wrdsToAdd = wrds.split(' ').filter((elem)=>{if(elem!="")return elem});
  let mainWrds = obj.words.split(" ").filter((elem)=>{if(elem!="")return elem});
  let newArray = mainWrds.concat(wrdsToAdd);
  let ar = newArray.splice(1,4);
  return obj.words = ar.join(' ');
}

function removeWords(obj, wrds) {
  let mainWrds = obj.words.split(' ').filter((elem)=>{if(elem!="") return elem});
  let wordsToRemove = wrds.split(' ').filter((elem)=>{if(elem!="") return elem});
  for (let i = 0; i < wordsToRemove.length; i++) {
    mainWrds.splice(mainWrds.indexOf(wordsToRemove[i]), 1);
  }
  return obj.words = mainWrds.join(' ');
}

function changeWords (obj, oldWrds, newWrds) {
  let mainWrds = obj.words.split(' ').filter((elem)=>{if(elem!="") return elem});
  let oldWords = oldWrds.split(' ').filter((elem)=>{if(elem!="") return elem});
  let newWords = newWrds.split(' ').filter((elem)=>{if(elem!="") return elem});
  for (let i = 0; i < oldWords.length; i++) {
    for (let j = 0; j < mainWrds.length; j++) {
      if (mainWrds[j] === oldWords[i]) {
        mainWrds.splice(mainWrds.indexOf(oldWords[i]), 1)
      }
    }
  }
  return obj.words = mainWrds.concat(newWords).join(' ');
}

const obj= {
  words: 'newspapers newspapers  books magazines'
};
console.log(obj); // {words: "newspapers newspapers  books magazines"}
addWords(obj, 'radio newspapers   ');
console.log(obj); // {words: "newspapers books magazines radio"}
removeWords(obj, 'newspapers   radio');
console.log(obj);// {words: "books magazines"}
changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}
