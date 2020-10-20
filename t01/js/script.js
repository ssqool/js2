function getFormattedDate(dateObject) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
  let todata = dateObject.getDate()<10?`0${dateObject.getDate()}`:dateObject.getDate();
  let tomonth = dateObject.getMonth()<10?("" + dateObject.getMonth()+1):dateObject.getMonth()+1;
  let toyear = dateObject.getFullYear();
  let tohours = dateObject.getHours()<10?("0" + dateObject.getHours()):dateObject.getHours();
  let tominutes = dateObject.getMinutes()<10?("0" + dateObject.getMinutes()):dateObject.getMinutes();
  let todays = days[dateObject.getDay()];

  return `${todata}.${tomonth}.${toyear} ${tohours}:${tominutes} ${todays}`;
}

const date0 = new Date(1993, 11, 1);
const date1 = new Date(1998, 0, -33);
const date2 = new Date('42 03:24:00');

console.log(getFormattedDate(date0));// 01.12.1993 00:00 Wednesday
console.log(getFormattedDate(date1));// 28.11.1997 00:00 Friday
console.log(getFormattedDate(date2));// 01.01.2042 03:24 Wednesday