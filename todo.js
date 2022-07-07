
let inputfiled = document.getElementById('inputfiled');
let add = document.getElementById('add');

add.addEventListener('click',()=>{
    let inputfiledval = inputfiled.value;
    if(inputfiledval.trim()!=0){

        let webtask = localStorage.getItem('localtask');
        if(webtask==null){
            taskobj = [] ;
        }else{
             taskobj = JSON.parse(webtask);
        }
        taskobj.push(inputfiledval);
        localStorage.setItem("localtask",JSON.stringify(taskobj));
    }
   
   inputfiled.value = '';
    showtask();
});

const showtask = ()=>{
    let webtask = localStorage.getItem('localtask');
    if(webtask==null){
        taskobj = [] ;
    }else{
         taskobj = JSON.parse(webtask);
    }
    let html = '';
    let mytask = document.getElementById('mytask');
    taskobj.forEach((element , index)=>{
        html += `
        <div class="container">
                <div class="row">
                  <div class="col-12">
                   <p class="tasklist">${element}</p>
                   <button id="edit" onclick="editval(${index})">Edit</button>
                   <button id="del" onclick="delval(${index})">Del</button>
                  </div>
                </div>
            </div>
        `
    })
    mytask.innerHTML = html;

}

const editval = (index) =>{
    let webtask = localStorage.getItem('localtask');
    let saveinput = document.getElementById('saveinput');
      let taskobj = JSON.parse(webtask);
      inputfiled.value = taskobj[index];
      saveinput.value = index;
     let add = document.getElementById('add');
     let save = document.getElementById('save');
     add.style.display="none";
     save.style.display="block";
       
}

let save = document.getElementById('save');
save.addEventListener('click',()=>{
    let webtask = localStorage.getItem('localtask');
    let taskobj = JSON.parse(webtask);
    let saveinput = document.getElementById('saveinput').value;

    taskobj[saveinput] = inputfiled.value;
    localStorage.setItem("localtask",JSON.stringify(taskobj));
    let add = document.getElementById('add');
    let save = document.getElementById('save');
    add.style.display="block";
    save.style.display="none";
    inputfiled.value = '';
    showtask();

});
const delval = (index) =>{
    let webtask = localStorage.getItem('localtask');
    let taskobj = JSON.parse(webtask);
    taskobj.splice(index , 1);
    localStorage.setItem("localtask",JSON.stringify(taskobj));
    showtask();
 }



 