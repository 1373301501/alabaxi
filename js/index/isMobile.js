$(function(){
   //判断设备是否是移动端或者PC端，使得显示方式不一样
   // var isMobile = {
   //     Android:function(){
   //         return navigator.userAgent.match(/Android/i) ? true: false;
   //     },
   //     Blackberry:function(){
   //         return navigator.userAgent.match(/BlackBerry/i) ? true: false;
   //     },
   //     IOS:function(){
   //         return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true: false;
   //     },
   //     Windows:function(){
   //         return navigator.userAgent.match(/IEMobile/i) ? true: false;
   //     },
   //     any:function(){
   //         return (isMobile.Android() || isMobile.Blackberry() || isMobile.IOS() || isMobile.Windows());
   //     }
   // };
   //
   // if(isMobile.any()){
   //     $(".viewport").css("width","100%");
   //     $(".viewport").css("height","100vh");
   //     $(".gotop").css("right","15px");
   // }else{
   //     $(".viewport").css("width","500px");
   //     $(".viewport").css("margin","0 auto");
   //     $("header").css("width","500px");
   //     $(".nav").css("width","500px");
   //     $("body").css("background","grey");
   //     $(".gotop").css("marginLeft","450px");
   //     $(".QRcode").css("display","block");
   // }

    //判断设备的宽度，使得网页字体随着设备的宽而增宽
    var W = $(window).width();

    if(W<=320){
        $("body").css("fontSize","10%");
        $(".viewport").css("width","100%");
        $(".viewport").css("height","100vh");
        $(".gotop").css("right","15px");
    }else if(W>320 && W<= 500){
        $("body").css("fontSize","12%");
        $(".viewport").css("width","100%");
        $(".viewport").css("height","100vh");
        $(".gotop").css("right","15px");
    }else if(W>500){
        $("body").css("fontSize","14%");
        $(".viewport").css("width","500px");
        $(".viewport").css("margin","0 auto");
        $("header").css("width","500px");
        $(".nav").css("width","500px");
        $("body").css("background","grey");
        $(".gotop").css("marginLeft","450px");
        $(".QRcode").css("display","block");
    }

});