$(document).ready(function () {
    // $.fn.dataTable.moment( 'DD.MM.YYYY');
    // $('#data__table').DataTable({
    //     "info": false,
    //     pageLength: 10,
    //     // "paging":   false,
    //     "ordering": false,
    //     // stateSave: true,
    // });
    var table = $('#data__table').DataTable({
        searching: false,
        ordering: false,
        autoWidth: true,
        pageLength: 6
    });
    $('#search__number').on('keyup', function () {
        table.search(this.value).draw();
    });
    var code_table = $('#code__data__table').DataTable({
        searching: false,
        ordering: false,
        autoWidth: false,
        pageLength: 3
    });
    var request_table = $('#request__data__table').DataTable({
        searching: false,
        ordering: false,
        autoWidth: false,
        pageLength: 4
    });

    $(document).ready(function () {
        $('input,textarea').focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder'))
            $(this).attr('placeholder', '');
        });
        $('input,textarea').blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    });

    const burgerClass = document.querySelector('.burger');
    const headerPopup = document.querySelector('.popup-menu');
    const headerClose = document.querySelector('.header-close');

    burgerClass.onclick = () => {
        // burgerClass.classList.toggle('active');
        headerPopup.classList.toggle('active');
        let burger = document.getElementById("burger")
        let toggleBurger = () => {
            burger.classList.toggle("active")
        }
    }
    headerClose.onclick = (e) => {
        e.preventDefault();
        headerPopup.classList.remove('active');
    }

    // $('.questions-btn').on('click', function () {
    //     $(this).toggleClass('green');
    //     $('.card').removeClass('greenbg');
    //     if ($(this).hasClass('green')) {
    //         let parent = $(this).parents('.card').addClass('greenbg');
    //         console.log(parent);
    //     }
    //     else {
    //         $(this).parents('.card').removeClass('greenbg');
    //     }
    // })
    // $('#accordion').on('show.bs.collapse', function () {
    //     $(this).toggleClass('green');
    //     $('.card').removeClass('greenbg');
    //     if ($(this).hasClass('green')) {
    //         let parent = $(this).parents('.card').addClass('greenbg');
    //         console.log(parent);
    //     }
    //     else {
    //                 $(this).parents('.card').removeClass('greenbg');
    //             }
    //   })
    // $( function() {
    //     $( "#datepicker" ).datepicker();
    //   } );

    // $( "#datepicker-cabinet" ).datetimepicker();
    $('#datepicker-cabinet').datepicker({
        weekStart: 1,
        daysOfWeekHighlighted: "6,0",
        // autoclose: true,
        todayHighlight: true,
    });
    $('#datepicker').datepicker("setDate", new Date());

    var content = $('.footer-bottom__social').html();
    function transferContent() {
        if ($(this).width() < 768) {
            $(".footer-top__social").html(content);
            $(".footer-bottom__social").empty();
        } else {
            $(".footer-bottom__social").html(content);
            $(".footer-top__social").empty();
        }
    }
    // $(window).load(transferContent);
    $(window).on("resize", transferContent);

});
let aboutSlider = new Swiper('.about-slider', {
    // arrows
    // navigation: {
    //     nextEl: '.swiper-btn-next',//можно их поменять (поставить любой класс) или настроить стандарный
    //     prevEl: '.swiper-btn-prev',
    // },
    //переключение при клике на слайд
    slideToClickedSlide: true,
    //управление клавиатурой
    keyboard: {
        // вкл / выкл
        enabled: true,
        //слайдер будет переключаться стрелками клавиатуры только когда мы до него доскролим
        onlyInViewport: true,
        //управдение слайдером кнопаками pageDown-pageUp
        pageUpDown: true,
    },
    slidesPerView: 5,
    //отключение слайдера если слайдов меньше чем надо
    // watchOverflow: true,
    spaceBetween: 20,
    //активный слайд по центру страницы
    centeredSlides: true,
    //стартовый слайд начианется с 0
    // initialSlide: 1,
    //количество рядов
    slidesPerColumn: 1,
    //бесконечно (не работает если количество рядоров больше 1-го)
    loop: true,
    // передача управления
    // controller: {
    //     control: textSlider
    // },
    breakpoints: {
        300: {
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            spaceBetween: 0,
            // spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.8,
            centeredSlides: true,
            loop: true,
            spaceBetween: 5,
            watchOverflow: true,
        },
        380: {
            slidesPerView: 1.8,
            centeredSlides: true,
            loop: true,
            watchOverflow: true,
        },
        480: {
            slidesPerView: 1.8,
            centeredSlides: true,
            spaceBetween: 10,
            watchOverflow: true,
        },
        567: {
            slidesPerView: 2.2,
            spaceBetween: 15,
            centeredSlides: true,
            watchOverflow: true,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
            centeredSlides: true,
            watchOverflow: true,
        },
        992: {
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 15,
            watchOverflow: true,
        },
        1199: {
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 30,
            watchOverflow: true,
        },
        1499: {
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 30,
            watchOverflow: true,
        },
    }
});
let textSlider = new Swiper('.text-slider', {
    // arrows
    navigation: {
        nextEl: '.swiper-btn-next', //можно их поменять (поставить любой класс) или настроить стандарный
        prevEl: '.swiper-btn-prev',
    },
    // переключение при клике на слайд
    slideToClickedSlide: true,
    //управление клавиатурой
    keyboard: {
        // вкл / выкл
        enabled: true,
        //слайдер будет переключаться стрелками клавиатуры только когда мы до него доскролим
        onlyInViewport: true,
        //управдение слайдером кнопаками pageDown-pageUp
        pageUpDown: true,
    },
    slidesPerView: 5,
    // //отключение слайдера если слайдов меньше чем надо
    // watchOverflow: true,
    spaceBetween: 20,
    // //активный слайд по центру страницы
    centeredSlides: true,
    // //стартовый слайд начианется с 0
    // initialSlide: 1,
    // //количество рядов
    // slidesPerColumn: 1,
    // //бесконечно (не работает если количество рядоров больше 1-го)
    loop: true,
    // controller: {
    //     control: aboutSlider
    // },
    breakpoints: {
        300: {
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            spaceBetween: 0,
            // spaceBetween: 10,
        },
        320: {
            slidesPerView: 1.8,
            centeredSlides: true,
            loop: true,
            spaceBetween: 5,
            watchOverflow: true,
        },
        380: {
            slidesPerView: 1.8,
            centeredSlides: true,
            loop: true,
            watchOverflow: true,
        },
        480: {
            slidesPerView: 1.8,
            centeredSlides: true,
            spaceBetween: 10,
            watchOverflow: true,
        },
        567: {
            slidesPerView: 2.2,
            spaceBetween: 15,
            centeredSlides: true,
            watchOverflow: true,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
            centeredSlides: true,
            watchOverflow: true,
        },
        992: {
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 15,
            watchOverflow: true,
        },
        1199: {
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 30,
            watchOverflow: true,
        },
        1499: {
            slidesPerView: 5,
            centeredSlides: true,
            spaceBetween: 30,
            watchOverflow: true,
        },
    }
});

aboutSlider.controller.control = textSlider;
textSlider.controller.control = aboutSlider;



