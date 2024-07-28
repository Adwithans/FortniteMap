function RollDice(){
  
  let Rolldice = document.getElementById("RollDice");
  let numDice = document.getElementById("NumDice"); 
  // numDice = parseInt(numDice)
  const values = []
  const images = []
  numDice = parseInt(numDice.value);


  for(let i =0; i < numDice ;i++){
    const roll = Math.floor(Math.random()*6)+1; 
    values.push(roll);
    images.push(`<img src="./img/${roll}.png">`);
  }
  console.log(images);
  console.log(values); 
  let diceResults = document.getElementById("diceResults");
  diceResults.innerText = `dice ${values.join(", ")}`; 
  let diceimg = document.getElementById("diceimg");
  diceimg.innerHTML = images.join(" ");
}

