let sl=1;
let temp;
if (document.getElementById("tbody").innerText===""){
    document.getElementById("tbody").innerHTML= `<center id="msg"><h1 style="color: rgb(125, 124, 124);">ⓘ<br>No Item added</h1><h3 style='color: rgb(209, 206, 206);'>Add Items to the cart from service bar</h3></center>`;
}
let s=0;
let p=[];
function additem(btn){
    document.getElementById("alert").innerHTML="";
    if (document.getElementById("msg")){
        document.getElementById("msg").remove();
    }
    let par=btn.parentElement.parentElement;
    let item=par.children[0];
    let price=par.children[1];
    let tbd=document.getElementById("tbody");
    var str=item.innerText.slice(2,item.innerText.length-1).trim();

    sum="<tr id="+sl+"><td>"+sl+"</td><td id ='itemname'>"+str+"</td> <td>"+price.innerText+"</td></tr>"; 
    tbd.innerHTML+=sum;
    sl++;
    temp=sl;
    // change button name
    let bt=par.children[2];
    
    bt.innerHTML=`<button style="background-color: hsl(0, 94%, 76%);" class="cartbtn" onclick="removeitem(this)" >Remove Item ➖</button>`;
    // total calc
    
     s=0;
    p.push(Number(price.innerText));
    for(let i=0;i<p.length;i++){
         s=s+p[i];
    }
    document.getElementById("total").innerHTML=s;

}
function updateSL(){
    let rows = document.querySelectorAll("#tbody tr");
    let c = 1;
    rows.forEach((r)=>{
        r.children[0].innerText = c;
        c++;
    });
    sl = c; 
}
function removeitem(btn){
let par = btn.parentElement.parentElement;
    let item = par.children[0];
    let price = par.children[1];
    
    
    let tr=document.querySelectorAll("tbody tr");
    let str = item.innerText.slice(2, item.innerText.length-1).trim();
    console.log(str);
    tr.forEach((r) => {
        if(r.children[1].innerText.trim() ===str){
            r.remove();
             par.children[2].innerHTML=`<button class="cartbtn" onclick="additem(this)" >Add Item ➕</button>`;
            
        }
    });
    updateSL();
//    update total
    const num=Number(price.innerText)
    for (let i = 0; i < p.length; i++) {
        if(p[i]===num){
             p.splice(i,1);
        }
        
    }
    s=0;
    p.forEach((n) => {
        s+=n
    });
    
    document.getElementById("total").innerHTML=s;
    
    
    // empty msg
    if(document.getElementById("tbody").innerText===""){
        document.getElementById("tbody").innerHTML =
        `<center id="msg">
            <h1 style="color: rgb(125, 124, 124);">ⓘ<br>No Item added</h1>
            <h3 style='color: rgb(209, 206, 206);'>Add Items to the cart</h3>
        </center>`;
    }
  


}
function subscription(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    if(name!="" && email!=""){
        alert ("Thanks for Subscribing our Newsletter");
         name=document.getElementById("name").value="";
         document.getElementById("email").value="";
    }
    else{
        alert(" Please Fill the form");
    }
}
