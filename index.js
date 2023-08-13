const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const titleCasedTutotirals = tutorials.map(capitalizer)
  return titleCasedTutotirals
}
function capitalizer(line){
  let newStr = ""
  let isSpace = true;
  let x = 0;
  while(x < line.length){
    if(isSpace){
      newStr += line[x].toUpperCase();
      isSpace = false;
    } else {
      newStr += line[x];
    }
    if(line[x] === " "){
      isSpace = true;
    }
    x++;
  }
  line = newStr;
  return line;
}