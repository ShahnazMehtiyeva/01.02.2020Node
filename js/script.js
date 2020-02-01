// let ulTag=document.querySelector('ul');

// console.log(ulTag.firstChild.nextSibling.innerHTML);

// let ptag = document.createElement('p');
// ptag.innerText = 'Hello World';

// let container = document.querySelector('.container');
// container.appendChild(ptag);


// create and remove with button
// let button=document.querySelectorAll('button')[0];
// let container = document.querySelector('.container');
// let i=1;
// button.addEventListener('click', function(){
//       let ptag = document.createElement('p');
//     ptag.innerText = 'Hello World '+ i;
//     container.appendChild(ptag);
//     i++;
// })



// let button2=document.querySelectorAll('button')[1];
// button2.addEventListener('click', function(){
//     if(container.children.length > 0){
//         let removetag= container.lastChild;
//         container.removeChild(removetag);
//         if(i!=1){
//             i--;
//         }
// }
// })


//chess
// let container = document.querySelector('.container');
// container.style.width='800px';
// container.style.border='1px solid black';
// container.style.display='flex';
// container.style.flexWrap='wrap';
// for (let i = 0; i <8; i++) {
//     for( let j=0;j<8;j++){
//         let divtag2=document.createElement('div');
//         if( j%2==0 && i%2==1 ||j%2==1 && i%2==0  ){
//             divtag2.style.backgroundColor='black';
//         }else{
//             divtag2.style.backgroundColor='white';
//         }
//         divtag2.style.width='100px';
//         divtag2.style.height='100px';
//         container.appendChild(divtag2);
//     }   
// }



let sbmt=document.querySelector('.sbmt');
let inputs=document.querySelectorAll('input');
let tbody= document.querySelector('tbody');
sbmt.addEventListener('click', function(){
    let firstname= inputs[0].value;
    let lastname= inputs[1].value;
    let age=inputs[2].value;

    let tr=document.createElement('tr');
    tr.innerHTML=`<td>${firstname}</td><td>${lastname}</td><td>${age}</td>`

    //or
    // let td=document.createElement('td');
    // td.innerText=firstname;
    // let td1=document.createElement('td');
    // td1.innerText=lastname;
    // let td2=document.createElement('td');
    // td2.innerText=age;
    // tr.appendChild(td);
    // tr.appendChild(td1);
    // tr.appendChild(td2);


    tbody.appendChild(tr);
})

