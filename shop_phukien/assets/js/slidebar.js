const itemslidebar = document.querySelectorAll(".cate-left-li")
itemslidebar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
        
})