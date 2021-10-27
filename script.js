'use strict'


//             //DELETION
// //creating a close button for every li tasks
// const liList = document.querySelectorAll('li');
// liList.forEach((_,i)=>{
//     const span = document.createElement('span');        //span element for cross
//     const cross = document.createTextNode(' ✖️ ');      //create cross button
//     span.classList.add('delete__list');                  //giving className to span 
//     span.appendChild(cross);                            //append cross with span
//     liList[i].appendChild(span);                        //append span with liList
// })

// //dropping out the li task after clicking the close button
// const deleteBtn = document.querySelectorAll('.delete__list');
// deleteBtn.forEach((_,i)=>{
//     deleteBtn[i].addEventListener('click',function (e) {
//         deleteBtn[i].parentElement.style.display = 'none';
//     })
// })


            //CREATION
function createElement() {
    const toDO = document.querySelectorAll('.todo__input');
    if(toDO[0].value == ''){
        alert('U Havent Entered Any Todo.Try Again');
    }else{
        const li = document.createElement('li');                        //element li created
        const todoTask = document.createTextNode(toDO[0].value);        //text inserted
        li.appendChild(todoTask);                                       //text appended with li element
        document.querySelector('.section__task__lists').appendChild(li);
    }
    document.getElementsByClassName('todo__input')[0].value = '';

                //DELETION
    //creating a close button for every li tasks
    const liList = document.querySelectorAll('li');
    liList.forEach((_,i)=>{
        const span = document.createElement('span');        //span element for cross
        const cross = document.createTextNode(' ✖️ ');      //create cross button
        span.classList.add('delete__list');                  //giving className to span 
        span.appendChild(cross);                            //append cross with span
        liList[i].appendChild(span);                        //append span with liList
    })

    //dropping out the li task after clicking the close button
    const deleteBtn = document.querySelectorAll('.delete__list');
    deleteBtn.forEach((_,i)=>{
        deleteBtn[i].addEventListener('click',function (e) {
            deleteBtn[i].parentElement.style.display = 'none';
        })
    })

}
document.querySelector('.btn__Add').addEventListener('click',createElement)