console.log('Loaded!');
if (typeof element !== 'undefined') {
  // Now we know that element is defined, we are good to go.
}
console.log('avi');
var element=document.getElementById('main-text');  

element.innerHTML='new value';
//move image

var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft + 1;
    img.style.marginLeft-marginLeft + 'px';
}
img.onclick=function(){
    var inteval = setInterval(moveRight, 50);
};