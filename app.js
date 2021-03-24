let choices={
  'rock':{
    wins: 'scissors',
    loses: 'paper',
    tie: 'rock'
  },
  'paper':{
    wins: 'rock',
    loses: 'scissors',
    tie: 'paper'
  },
  'scissors':{
    wins: 'paper',
    loses: 'rock',
    tie: 'scissors'
  }

}


let options =['rock','paper','scissors']


function playerChoice(type){
  document.getElementById(type)
  
  let choice= choices[type]

  let challenger= options[Math.floor(Math.random() * options.length)]
 
  
  console.log(challenger)

  if (choice.wins==challenger){
    // console.log('winner')
    document.getElementById('msg').innerText = 'You Have WON!!!!'
  }else if(choice.loses==challenger){
    // console.log('loser') 
    document.getElementById('msg').innerText = 'You Have LOST!!!!'
  }else{
    // console.log('tie') 
    document.getElementById('msg').innerText = 'You Have TIED!!!!'
  }
}




