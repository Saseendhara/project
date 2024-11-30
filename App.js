// entro pic change
var i=0
var img=[]
var time=4000

// img list


img[0]='desk3.jpg'
img[1]='desk.jpg'
img[2]='deskk.jpg'

function changImg(){
    document.slide.src=img[i]
    if(i<img.length-1){
        i++
    }
    else{
        i=0
    }
    setTimeout('changImg()',time)
}

window.onload=changImg

// text change


const text=document.querySelector('.auto-type');

const textLoad =()=>{
    setTimeout(()=>{
        text.textContent='Spicy'

    },0)

    setTimeout(()=>{
        text.textContent='Delicious'

    },3000)
}
textLoad();
setInterval(textLoad,12000)

// product searching

var search=document.getElementById('search')
var products=document.getElementById('products')
var productbox=products.querySelectorAll('.prodect-box')
console.log(productbox);

search.addEventListener('keyup',function(event){
    searchText=event.target.value.toUpperCase()
    console.log(searchText);


    for(count=0; count<productbox.length; count=count+1){
      var productName=productbox[count].querySelector('h5').textContent
      
      
       if(productName.toUpperCase().indexOf(searchText)<0){
          productbox[count].style.display='none'
       }
       else{
        productbox[count].style.display='block'
       }



    }
    
})

// 

var btn=document.getElementsByClassName('indicator-btn')
var slide=document.getElementById('slide');

btn[0].onclick=function(){
    slide.style.transform= 'translateX(0px)';
    for(i=0;i<4;i++){
        btn[i].classList.remove('active')
    }
    this.classList.add('active')
}

btn[1].onclick=function(){
    slide.style.transform= 'translateX(-800px)';
    for(i=0;i<4;i++){
        btn[i].classList.remove('active')
    }
    this.classList.add('active')
}


btn[2].onclick=function(){
    slide.style.transform= 'translateX(-1600px)';
    for(i=0;i<4;i++){
        btn[i].classList.remove('active')
    }
    this.classList.add('active')
}


btn[3].onclick=function(){
    slide.style.transform= 'translateX(-2400px)';
    for(i=0;i<4;i++){
        btn[i].classList.remove('active')
    }
    this.classList.add('active')
}




