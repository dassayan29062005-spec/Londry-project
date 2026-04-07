function sendEmail(){
    
     if(document.getElementById("tbody").children.length===1&&document.getElementById("msg")){
        alert("ⓘ Add item to the cart");
        return;
    }
    else if(document.getElementById("fmname").value==""||
        document.getElementById("fmeml").value==""||
        document.getElementById("fmph").value==""){
            alert("fill the form");
        }
    else{
    let data={
        name: document.getElementById("fmname").value,
     eml: document.getElementById("fmeml").value,
     phn: document.getElementById("fmph").value,
     serv: document.getElementById("tbody").innerText,
     total: document.getElementById("total").innerText
    };

let servid="service_tnpdg8a";
let tempid="template_v3gnna1";
emailjs.send(servid,tempid,data).then(
    (res)=>{
        document.getElementById("fmname").value="";
        document.getElementById("fmeml").value="";
        document.getElementById("fmph").value="";
        document.getElementById("alert").innerHTML="Thank you For Booking the Service We will get back to you soon!";
        document.getElementById("tbody").innerHTML= `<center id='msg'><h1 style="color: rgb(125, 124, 124);">ⓘ<br>No Item added</h1><h3 style='color: rgb(209, 206, 206);'>Add Items to the cart from service bar</h3></center>`;
        document.getElementById("total").innerText="";
    }   

).catch((error)=>{
    console.log(error);
});}
}