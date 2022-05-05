
//[1,2,12) - winter
//[3,4,5) - spring
//[6,7,8) - summer
//[9-10-11) - autumn

const numberMonth = '8';
if (isNaN(numberMonth) || numberMonth <= 0){
  console.log('error')
} else if(numberMonth <=2){
  console.log('winter')
} else if(numberMonth <=5){
  console.log('spring')
} else if(numberMonth <=8){
  console.log('summer')
} else if(numberMonth <=11){
  console.log('autumn')
} else if(numberMonth <=12){
  console.log('winter')
} else {
  console.log('fail')
}


// const numberMonth = prompt("Choose number: ");
// switch (numberMonth) {
//   case "1":
//   case "2":
//   case "12":
//     console.log("winter");
//     break;
//   case "3":
//   case "4":
//   case "5":
//     console.log("spring");
//     break;
//   case "6":
//   case "7":
//   case "8":
//     console.log("summer");
//     break;
//   case "9":
//   case "10":
//   case "11":
//     console.log("autumn");
//     break;
//   default:
//     console.log("repeat choose");
//     break;
// }