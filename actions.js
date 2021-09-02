let out = document.querySelector(".output");


function result(val){
           out.innerHTML=out.innerHTML+val;  //adding 
}


function clr()
{
    out.innerHTML='';
}
function equalto()
{
    
    out.innerHTML=eval(out.innerHTML);

}

function clickMe(x,y)
{
    console.log(x+y);
    
}