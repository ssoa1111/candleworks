const menuBtn = document.querySelector('header nav .menu_btn');
const menuIcon = document.querySelectorAll('header nav .menu_btn span');
const menuShow = document.querySelector('header nav .mobile .mobile__menu');
let menuToggle = false;
menuBtn.addEventListener('click',()=>{
    menuToggle = !menuToggle;
    if(menuToggle){
        menuBtn.classList.add('active');
        menuIcon[0].classList.add('off');
        menuIcon[1].classList.remove('off');
        menuShow.classList.add('active');
    }else{
        menuBtn.classList.remove('active');
        menuIcon[1].classList.add('off');
        menuIcon[0].classList.remove('off');
        menuShow.classList.remove('active');
    }
})

const pcMenu = document.querySelectorAll('header nav .pc .main .main_menu');
const pcSub = document.querySelectorAll('header nav .pc .main .main__sub');
pcMenu.forEach(function(item,index){
    item.addEventListener('mouseenter',()=>{
        pcSub[index].classList.add('active');
    });
    item.addEventListener('mouseleave',()=>{
        pcSub[index].classList.remove('active');
    });
})


new Swiper(".slider .mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});



const productBtn = document.querySelectorAll('.product .product__btn li');
const selectPage = document.querySelectorAll('.product .product__item div');
console.log(selectPage)

productBtn.forEach(function(item, index){
    item.addEventListener('click',()=>{
        // 이건 되고
        // for(let i = 0; i < productBtn.length; i++){
        //     productBtn[i].classList.remove('active');
        //     selectPage[i].classList.remove('active');
        // }
        // 이건 왜 안됩니까
        for(i in productBtn){
            productBtn[i].classList.remove('active');
            selectPage[i].classList.remove('active');
        }
        productBtn[index].classList.add('active');
        selectPage[index].classList.add('active');
    });
});

