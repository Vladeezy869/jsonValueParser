const jsFile = require('./JSON Sample (2).json');
let counter=0;
let helper=0;
let filtered;

function findElems(){
for(var i=0;i<(jsFile.objects).length;i++){
    if(jsFile.objects[i]._id!==undefined){
        if(jsFile.objects[i].objectType==='activity' && jsFile.objects[i].externalObjectType==='Email'){
         console.log('There is an object with parameters we need, its ID = '+jsFile.objects[i]._id);
            counter++; //check if there are more than 1 element we need
             helper==i; // catch obj's number if it's only one specifed obj
        }
    }
}
if(counter===1){
    filtered = jsFile.objects[helper];
  }
  console.log(filtered);//filtered output if the obj is alone
  console.log('__________________whole document output____________________');
  console.log(jsFile);
}

module.exports = {
    findElems: findElems}





