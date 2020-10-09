$(document).ready(()=>{
    var screenHeight = window.innerHeight;
    var screenWidth = window.innerWidth;
    var desktopHeightBanner = Math.ceil(screenHeight / 3);
    var mobileHeightBanner = Math.ceil(screenHeight / 4);
    var banner = $("#hightlight").height();
    var currentScroll = 0;

    // Close Search
    $('#closeSearch').click(()=>{
        $('#searchBanner').fadeOut('fast',()=> {
        })
    });
    //Open Search
    $('#openSearch').click(()=>{
        $('#searchBanner').fadeIn('fast');
        console.log("done")
    });

    $('#leftbar').css({"height":`${screenHeight}px`})
    
    // responsive banner
    if(screenWidth <= 500) {
        $('header').css({"height":`${mobileHeightBanner}px`})
        $('#leftbar').css({"top":`${mobileHeightBanner}px`})
    }
    else {
        $('header').css({"height":`${desktopHeightBanner}px`})
        $('#leftbar').css({"top":`${desktopHeightBanner}px`})
    }

    // left sidebar fixing 
    $(window).scroll(()=> {
        let posY = window.pageYOffset;
        // if scroll down
        if(posY > banner) {
            $('#leftbar').css({"position":"fixed"})
            $('#leftbar').css({"top":"0px"})
            $('#nav').addClass('bg-purple')
        }
        else {
            $('#leftbar').css({"position":"absolute"})
            $('#leftbar').css({"top":`${desktopHeightBanner}px`})
            $('#nav').removeClass("bg-purple")
            $('#nav').addClass('bg-alpha')

        }

        if(currentScroll < window.scrollY)
        {
            $("#nav").hide('fast')
            currentScroll = window.scrollY
        }
        else  {
            $("#nav").show('fast')
            currentScroll = window.scrollY;
        }
    })
})
