// let a = "Hello world"
// alert(a);


var screen=document.querySelector('#screen');
var js=document.querySelectorAll('.js');

for (item of js) 
{
    item.addEventListener('click',(e)=>{
        jstext=e.target.innerText;
        if(jstext=='×')
        {
            jstext='*'
        }

        if(jstext=='÷')
        {
            jstext='/'
        }  

        screen.value+=jstext;
    });
 
}


   function sin()
   {
    screen.value=Math.sin(screen.value);
   }

   function cos()
   {
    screen.value=Math.cos(screen.value);
   }

   function tan()
   {
    screen.value=Math.tan(screen.value);
   }

   function pow()
   {
    screen.value=Math.pow(screen.value,2);
   }

   function sqrt()
   {
    screen.value=Math.sqrt(screen.value,2);
   }

   function log()
   {
    screen.value=Math.log(screen.value);
   }

   function pi()
   {
    screen.value=3.14159265359;
   }


   function e()
   {
    screen.value=2.71828183;
   }

function fact()
{
    var i,num,f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++)
    {
        f=f*i;
    }
    i=i-1;
    screen.value=f;
}

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1); 
}

function exp()
{
    screen.value=Math.exp(screen.value);
}