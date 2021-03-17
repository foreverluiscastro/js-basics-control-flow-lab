function scuberGreetingForFeet(ride){
  // Write your code here!
if (ride < 400) {
  return 'This one is on me!';
  } else if (ride > 2500) {
      return 'No can do.';
  } else if (ride > 2000) {
      return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(destination){
  // Write your code here!
  return (destination == 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(goodbye){
  // Write your code here!
  switch (goodbye) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    case 'thanks for everything':
      return 'Bye.';
  }
}