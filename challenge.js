const chordsArray=['H7','G7','A','B7','B']
function chordsConcat(){
    for(let a=0; a<chordsArray.length; a++){
        if(chordsArray[a].endsWith("7")){
           chordsArray[a];
        } else{
            let result= chordsArray[a]+"7";
           chordsArray[a]= result;
        }   
    }
    return chordsArray;
}
