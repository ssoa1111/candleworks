# 캔들웍스
안녕하세요. 캔들웍스이라는 사이트를 리뉴얼 해보았습니다.    
[캔들웍스 사이트 바로가기](https://candleworks.co.kr/)

## CDN와 플러그인

### Favicon(파비콘, favorite icon)
웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.
```
<link rel="shortcut icon" href="favicon.ico" /> 
<link rel="icon" href="./favicon.png" />
```
favicon.ico 64 x 64 (px) 또는 32 x 32 또는 16 x 16    
favicon.png 500 x 500 (px)

## Reset.css
> 각 브라우저의 기본 스타일을 초기화합니다.  
[jsdeliver이동](https://www.jsdelivr.com/package/npm/the-new-css-reset)
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

### Google icon
웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

### anmiate.css
복잡한 css작성 없이 다양한 애니메이션을 css내에서 구현할 수 있게 합니다.
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
```

### swiper slide
swiper에서 제공하는 다양한 속성을 활용하여 반응형과 PC형에서 슬라이드를 제작할 수 있습니다.
[스와이퍼 슬라이드 알아보기](https://swiperjs.com/)
```html
<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
```

## 함수

### forEach
>요소.addEventListener(인수, (index){ 내용 })
각각의 요소를 활용하여 해당하는 내용을 작동시킬 수 있습니다.
```javascript
productBtn.forEach(function(item, index){
    item.addEventListener('click',()=>{
        // 전체 초기화
        for(let i = 0; i < productBtn.length; i++){
            productBtn[i].classList.remove('active');
            selectPage[i].classList.remove('active');
        }
        productBtn[index].classList.add('active');
        selectPage[index].classList.add('active');
    });
});
```

for문을 for in함수로 변경해서 작성할 수도 있다.    
> for in    
(for 인자 in 배열){}    
(= for(인자 = 0; 인자 < 배열.length; 인자++))
객체.entries() : 객체의 [키,값]을 배열로 반환한다.    
```javascript
// for(let i = 0; i < productBtn.length; i++){
//     productBtn[i].classList.remove('active');
//     selectPage[i].classList.remove('active');
// }
for(i in productBtn.entries()){
    productBtn[i].classList.remove('active');
    selectPage[i].classList.remove('active');
}