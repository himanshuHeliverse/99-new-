
function throttle(fn, wait) {
    var time = Date.now();
    return function () {
        if (time + wait - Date.now() < 0) {
            fn();
            time = Date.now();
        }
    };
}
let OpenAccBasedOnSlide = (activeSlide) => {
    var activeItem = $(`[data-slide-id=${activeSlide}]`)[0];
    if ($(activeItem).hasClass("active")) return;
   
    var otherItems = $(activeItem).siblings();
 
    otherItems.removeClass("active").children("dd").slideUp();
    $(activeItem).addClass("active").children("dd").slideDown();
};
var prevTop = 0;
var $win = $("#backgrounds");
var winH = $win.height();
let sl = 0;
let prev = 0;
let bgImages = $(".backgrounds .slide");
let activeSlide = 0;
let next = $("#backgrounds").scrollTop();
let handleScroll = throttle(function () {
    next = $("#backgrounds").scrollTop();

    if (prev < next) {
        activeSlide++;
     
        OpenAccBasedOnSlide(activeSlide);
        $(".backgrounds").animate(
            {
                scrollTop: bgImages[0].scrollHeight * activeSlide,
            },
            300
        );
    } //scroll up
    else if (prev > next) {
        activeSlide--;
        
        OpenAccBasedOnSlide(activeSlide);

        $(".backgrounds").animate(
            {
                scrollTop: bgImages[0].scrollHeight * activeSlide,
            },
            300
            // scroll down
        );
    }

    next = prev = bgImages[0].scrollHeight * activeSlide;
}, 1000);
$win.on("scroll", handleScroll).on("resize", function () {
    // If the user resizes the window
    winH = $(this).height(); // you'll need the new height value
});
jQuery.fn.simpleAccordion = function (options) {
    options = $.extend(
        {
            start: 0,
            activeClass: "active",
            itemClass: "item",
        },
        options || {}
    );

    function updateView(activeItem) {
        var otherItems = activeItem.siblings();
        otherItems.removeClass(options.activeClass).children("dd").slideUp();

        activeItem.addClass(options.activeClass).children("dd").slideDown();
    }

    return this.each(function () {
        var $this = $(this);

        var itemSelector = "." + options.itemClass;
        var items = $(itemSelector, $this);
        updateView(items.eq(options.start));

        $this.on("click", itemSelector + ">dt", function () {
            console.log(this);
            var activeItem = $(this).closest(itemSelector);
            if (activeItem.hasClass(options.activeClass)) return;

            // Scroll
            let newScrollPosition =
                $(bgImages[activeItem.attr("data-slide-id")])[0].scrollHeight *
                activeItem.attr("data-slide-id");
            $(".backgrounds").unbind("scroll", handleScroll);
            $(".backgrounds").animate(
                {
                    scrollTop: newScrollPosition,
                },
                500
            );

            setTimeout(() => {
                $(".backgrounds").bind("scroll", handleScroll);
            }, 600);
            next = prev = newScrollPosition;
            updateView(activeItem);
        });
    });
};

$("dl.stappen").simpleAccordion();
$(window).on("hashchange", function (e) {
    var activeItem = $(`${window.location.hash}-accordion`);
    if (activeItem.hasClass("active")) return;
    var otherItems = activeItem.siblings();
    otherItems.removeClass("active").children("dd").slideUp();

    activeItem.addClass("active").children("dd").slideDown();

    // updateView(activeItem);
    // myFullpage.moveTo(`${window.location.hash}`);
});



