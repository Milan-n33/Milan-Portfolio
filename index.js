var i = 0;
document.querySelector(".link1").addEventListener("click",function(){
    if(i==0){
    document.querySelector(".skills").classList.add("invisible");
    i++;
    }
    else{
        document.querySelector(".education").classList.remove("invisible");
        document.querySelector(".experience").classList.remove("invisible");
        document.querySelector(".skills").classList.add("invisible");
        i++;
    }
    setTimeout(function(){
        document.querySelector(".skills").classList.remove("invisible");
        i=0;
    },8000);

});
document.querySelector(".link2").addEventListener("click",function(){
    
    if(i==0){
        document.querySelector(".education").classList.add("invisible");
        document.querySelector(".education").classList.add("visible");
        i++;
    }
    else{
        document.querySelector(".skills").classList.remove("invisible");
        document.querySelector(".experience").classList.remove("invisible");
        document.querySelector(".education").classList.add("invisible");
        document.querySelector(".education").classList.add("visible");
        i++;
    }
    setTimeout(function(){
        document.querySelector(".education").classList.remove("invisible");
        i=0;
    },8000);

})
document.querySelector(".link3").addEventListener("click",function(){
    
    if(i==0){
        document.querySelector(".experience").classList.add("invisible");
        i++;
    }
    else{
        document.querySelector(".skills").classList.remove("invisible");
        document.querySelector(".education").classList.remove("invisible");
        document.querySelector(".experience").classList.add("invisible");
        i++;
    }
    setTimeout(function(){
        document.querySelector(".experience").classList.remove("invisible");
        i=0;
    },8000);
})
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0px";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}