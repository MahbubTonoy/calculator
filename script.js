let display = document.querySelector(".display span");
function btnInput(input){
    display.innerHTML += input;
}

function erase() {
    temp = display.innerHTML.substring(0,display.innerHTML.length-1);
    print(temp);
   }
   function reset() {
       display.innerHTML="";
   }
   function action(){
       let math = eval(display.innerHTML);
       display.innerHTML = math;
   }