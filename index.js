let count = 0;
while(true){
  const userInput = prompt('enter password', '***');
  count++;
  alert('try = ' + count);
  if(count >= MAX_TRY){
    alert('try end');
    break;
  }
  if(userInput === CORRECT_PASSWORD){
    alert('welcome');
    break;
  }
}