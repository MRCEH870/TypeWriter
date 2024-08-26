// const textEL = document.getElementById('text');
// const texts=["welcome","MR.CEH","YouTube","Channel"];
// let index =0;
// let textIndex = 0;
// let isAdding = true;

// function type(){
//     if(isAdding){
//         if(index<texts[textIndex].length){
//             textEL.innerHTML += texts[textIndex].charAt(index);
//             index++;
//             setTimeout(type,200);
//         }else{
//             isAdding=false;
//             setTimeout(type,2000);
//         }
//     }else{
//         if(index>0){
//             textEL.innerHTML = texts[textIndex].substring(0,index-1);
//             index--;
//             setTimeout(type,200);
//         }else{
//             textIndex = (textIndex + 1)%texts.length;
//             isAdding=true;
//             setTimeout(type,500);
//         }
//     }
// }
// type();