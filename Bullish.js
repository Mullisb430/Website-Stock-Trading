var marker = document.querySelector('#marker');
var item = document.querySelectorAll('#mainNav a');

function indicator(e){
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

item.forEach(link => {
    link.addEventListener('mouseover', (e)=>{
        indicator(e.target);
    })
})

