let boxes=document.querySelectorAll('.box-container .box');

boxes.forEach(box =>{

    let heading=box.querySelector('.heading');
    let icon=box.querySelector('.heading i');

    heading.onclick = () => {

for(var i=0;i<boxes.length;i++){
    if(boxes[i]!=box){
        boxes[i].classList.remove('active');
    }else{
        box.classList.toggle('active');
    }
}

if(icon.classList.contains('fa-minus')){
    icon.classList.replace('fa-minus','fa-plus');
}
else{
    document.querySelectorAll('.box-container .box .heading .fa-minus').forEach(minus =>{
       minus.classList.replace('fa-minus','fa-plus');
    });

    icon.classList.replace('fa-plus','fa-minus');
}

    };

});