document.body.onclick = function (event) {
    event = event || window.event;
    if (event.target.classList.contains('goodsCart__img')) {
        // remove .active class in .goods-img-min divs
        var allDivs = document.querySelectorAll('.goodsCart__image1 div');
        for (var i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.remove('goodsCart__image1_active');
        }

        document.querySelector('.goodsCart__img_big').src = event.target.src;
        event.target.parentElement.classList.add('goodsCart__image1_active');
    }

}