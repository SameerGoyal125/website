var i = 0;

function increment() {
  if (i < 98) {
    i = i + 4;
    document.getElementById('number').innerHTML = i;
  }
}
setInterval('increment()', 50);


const stringd=['S','w','e','e','t',' ','C','o','n','e']
const colors=['#80B1FF','#C5C5FF','#A4A4F4','#FFD2EA','#FFC2DF','#FFA4D4','#FFCC99','#FFE98A','#79E8B3','#B3FFC7','#BBEFFF','#99E2FF']
var change=[100]
var no;
function randomchange()  {
  result=''
  for(let x in stringd){

result+=stringd[x].fontcolor(colors[Math.floor(Math.random()*colors.length)]);
}
document.getElementById('head').innerHTML = result;
change=[100];
}

setInterval('randomchange()', 500);


function chooseColor(){
  var no=Math.floor(Math.random()*colors.length);
  console.log(no);
  var found=0;
  // if(change.find(no)){
  //   chooseColor();
  // }
  // else{
  //   change.push(no)
  //   return no;
  for(let x in change){
    if (no==change[x]){
      found=1;
    }
  }
  if(found==1){
    chooseColor();
  }
  else{
    change.push(no);
    return no;
  }
  }
