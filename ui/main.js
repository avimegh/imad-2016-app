//counter code
var button=document.getElementsById('counter');
button.onclick=function(){
    //create a request to the counter endpoint
    var request=new XMLHttpRequest();
    
    //capture the response  and store  it  in a variable
    request.onreadystatechange=function(){
      if(request.readystate ===XMLHttpRequest.DONE) {
          //take some action
          if(request.status===200){
              var counter=request.responseText;
               var span=document.getElementsById('count');
               span.innerHTML=counter.toString();
          }
      } 
      //not done yet
    };
    //make the request
    request.open('GET','http://avimegh.imad.hasura-app.io/counter',true);
    request.send(null);
    
};