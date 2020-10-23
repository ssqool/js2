1
function urlDirection (domain) {
  return function (url) {
    return (`https://${url}.${domain}`)
  }
}

const google = urlDirection('net');
console.log(google('google'));
// const ucode = urlDirection('world');


// console.log(ucode('ucode'));
// function concat(string1, string2) {
//   if (string2 == null) {
//     return function get() {
//       if (get.count == undefined) {
//         get.count = 0;
//       }
//       let enter = prompt("Enter the value: ", "")
//       return string1.concat(enter);
//     }
//   } else {
//     return string1.concat(" " + string2)
//   }
// }

function concat(string1, string2) {
  if (string2 == null) {
    return function get() {
      if (get.count == null) get.count = 0;
      let enter = prompt("Enter the value:", "");
      return (get.count += 1), string1.concat(" " + enter);
    }
  } else {
    return string1.concat(" " + string2)
  }
}


let phrase1 = concat("Hulk", "smash!");
let output = phrase1;
console.log(output); // Hulk smash!

let phrase2 = concat("Leave");
output = phrase2();
// a prompt appears. Enter "Hulk alone!" into the prompt

console.log(output); // Leave Hulk alone!
console.log(phrase2.count); // 1

output= phrase2();
// a prompt appears. Enter "me alone, please!" into the prompt

console.log(output); // Leave me alone, please!

output = phrase2();
// a prompt appears. Enter "HULK ALONE!" into the prompt

console.log(output); // Leave HULK ALONE!
console.log(phrase2.count); // 3

let phrase3 = concat("Go");
output = phrase3();
// a prompt appears. Enter "away!" into the prompt

console.log(output); // Go away!
console.log(phrase3.count); // 1
console.log(phrase2.count); // 3

/* Result in Console panel:
Hulk smash!
Leave Hulk alone!
1
Leave me alone, please!
Leave HULK ALONE!
3
Go away!
1
3
*/

// function concat (string1, string2) {
//   if (string2==null) {
//     return function get () {
//       let x = prompt("enter the value:", "")
//       return string1.concat(" " + x)
//     }
//   }else {
//     return string1.concat(" "+string2);
//   }
// }