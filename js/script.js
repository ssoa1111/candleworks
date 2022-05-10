// mobile, tab메뉴 실행 시 스크롤 막기 위함
const wrap = document.querySelector('#wrap');
// mobile, tab 메뉴
const menuBtn = document.querySelector('header nav .menu_btn');
const menuIcon = document.querySelectorAll('header nav .menu_btn span');
const menuShow = document.querySelector('header nav .mobile .mobile__menu');
// 검은색 배경
const menubg = document.querySelector('header nav .mobile .mobile__bg');
let menuToggle = false;
// 메뉴 클릭시
menuBtn.addEventListener('click',()=>{
    menuToggle = !menuToggle;
    if(menuToggle){
        menuBtn.classList.add('active');
        menuIcon[0].classList.add('off');
        menuIcon[1].classList.remove('off');
        menuShow.classList.add('active');
        menubg.classList.add('active');
        wrap.style.height = '100vh';
    }else{
        menuBtn.classList.remove('active');
        menuIcon[1].classList.add('off');
        menuIcon[0].classList.remove('off');
        menuShow.classList.remove('active');
        menubg.classList.remove('active');
        wrap.style.height = 'auto';
    }
})

// pc 메뉴
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


// 상단 slider
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


// best item
const productBtn = document.querySelectorAll('.product .product__btn li');
const selectPage = document.querySelectorAll('.product .product__item div');

// 전체 item메뉴 클릭 이벤트 적용
productBtn.forEach(function(item, index){
    item.addEventListener('click',()=>{
        // 전체 초기화
        for(let i = 0; i < productBtn.length; i++){
            productBtn[i].classList.remove('active');
            selectPage[i].classList.remove('active');
        }
        
        // >>> querySelectorAll로 들어가면 배열이 아닌가... 
        // >>> for in 함수가 작동하지 않아서 entries로 객체타입을 배열타입으로 변경해야 작동한다...
        // 전체 초기화(위에랑 동일 기능임)
        // for(i in productBtn.entries()){
        //     productBtn[i].classList.remove('active');
        //     selectPage[i].classList.remove('active');
        // }
        
        // 해당되는 것만 클래스 부여
        productBtn[index].classList.add('active');
        selectPage[index].classList.add('active');
    });
});

