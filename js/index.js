$(function(){
    $("#main1 .boxbg").delay(300).fadeIn(500);
    $("#main1 .box").delay(500).fadeIn(500);
    $("#main1 .title").delay(700).fadeIn(500);
    $("#main1 .txt").delay(900).fadeIn(500);
    
   $("#gnb li").eq(0).addClass('on');
    
   $(".main").mousewheel(function(e, d){
        var i = $(this).index();
       console.log(i);
               
        if(d>0){     //휠올릴때
            var prev = $(this).prev().offset().top;                 
            $("html, body").stop().animate({scrollTop:prev},1000, "easeOutCubic");  
            if(i==5){
                $("#gnb li").eq(0).removeClass('on');
                $("#gnb li").eq(3).addClass('on');
            } else if(i==4){
                $("#gnb li").eq(3).removeClass('on');
                $("#gnb li").eq(2).addClass('on');
            } else if(i==3){
                $("#gnb li").eq(2).removeClass('on');
                $("#gnb li").eq(1).addClass('on');
            } else if(i==2){
                $("#gnb li").eq(1).removeClass('on');
                $("#gnb li").eq(0).addClass('on');
            }
            
            
        } else if(d<0){      //휠 내릴때
            var next = $(this).next().offset().top;
            $("html, body").stop().animate({scrollTop:next},1000, "easeOutCubic");
            if(i==1){
                $("#gnb li").eq(0).removeClass('on');
                $("#gnb li").eq(1).addClass('on');
            } else if(i==2){
                $("#gnb li").eq(1).removeClass('on');
                $("#gnb li").eq(2).addClass('on');
            } else if(i==3){
                $("#gnb li").eq(2).removeClass('on');
                $("#gnb li").eq(3).addClass('on');
            }
            
        }
    });
    
    var menu = $('#gnb li');
    var sct = $(window).scrollTop();

    $(".main").each(function(){
         var tg = $(this);
         var i = tg.index()-1;

        if(tg.offset().top <= sct){
          menu.removeClass('on');
          menu.eq(i).addClass('on');
        }
    });    
    
    $("#gnb li").click(function(e){
        e.preventDefault();
        
        var ht = $(window).height();
        var i = $(this).index();
        var nowTop = i*ht;
        
        $("html, body").stop().animate({scrollTop:nowTop}, 1000);
    });
    
    $("#gnb li").click(function(e){
        e.preventDefault();
        var i = $(this).index();
                
        $("#gnb li").removeClass("on");
        $("#gnb li").eq(i).addClass("on");
    });
    
    $(".nav a").click(function(e){ 
        e.preventDefault();
        var box_id = $(this).find('p').attr('data-tab');
        var box_id2 = $(this).find('p').attr('rel');
        

            $(".nav .btn").removeClass('on');
        
            $(this).find("p").addClass('on');
 
            $(".box_4").removeClass('on');
            $(".box_22").removeClass('on');
        
            $("#"+box_id).addClass('on');
            $("#"+box_id2).addClass('on');
        
        });
    
    
    
    
});