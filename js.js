let title=document.getElementById("title")
let button=document.getElementById("but")
let count=document.getElementById("count")
let department=document.getElementById("dep")
let inputs=document.querySelectorAll("#cost input")
let mydiv=document.getElementById("td")
let tr=document.getElementsByTagName("tr")
let deleteall=document.getElementById("deleteall")
let del=document.getElementById("delete")
let upd=document.getElementById("update")
console.log(inputs)
for (i=0;i<inputs.length;i++){
    inputs[i].onkeyup=function(){
        let price=inputs[0].value;
        let tax=inputs[1].value;
        let trancost=inputs[2].value;
        let dis=inputs[3].value;
        let total=+price + +tax + +trancost - +dis
        console.log(total)
        inputs[4].value=+total
        }
}
console.log(total)

let counter=1
let pro=[];


let alldata=[
     counter,
     title.value,
     inputs[0].value,
     inputs[1].value,
    inputs[2].value,
    inputs[3].value,
     inputs[4].value,
     department.value, 
    

]


let adddiv =() =>{
mydiv.innerHTML +=`<div class="btnn"><p>ID: ${counter++}</p><p>title: ${title.value}</p><p>Price: ${inputs[0].value}</p>
<p>Taxes: ${inputs[1].value}</p><p>Transcount: ${inputs[2].value}</p><p>Discound: ${inputs[3].value}</p>
<p>Total: ${inputs[4].value}</p><p>department: ${dep.value}</p>Actions: <button onclick="remove()" class="delete btn btn-danger">remove</button>
<button onclick="updfun" class="btn btn-primary">update</button></div>
`
deleteall.classList.remove("hid")
console.log(title)
pro.push(alldata)
localStorage.setItem("pro",JSON.stringify(pro));


}


let delallbutton=()=>{
    deleteall.classList.add("hid")
    mydiv.remove()
}



document.addEventListener("click",function(i){
    if(i.target.classList.contains("delete")){
      i.target.parentElement.remove()

        
    
}
})




button.addEventListener("click", adddiv)
deleteall.addEventListener("click",delallbutton)

