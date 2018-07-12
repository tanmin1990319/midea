(function(){
    //与首页公用头部样式开始
    $('.header-rg li').on('mouseenter',function(){
        if($(this).index()==0){
             $('._seach').css('display','block');

        }else if($(this).index()==1){
             $('._weixin').css('display','block');
        }
        else if($(this).index()==2){
            $('._shoppingcart').css('display','block');
        }
        else if($(this).index()==3){
        $('._login').css('display','block');
   }    
    })
    //点击头部右侧的登录跳转到登录页
    $('.header-rg li').eq(3).on('click',function(){
        location.href='login.html';
     })
    $('.header-rg li').on('mouseleave',function(){
        $('._seach').on('mouseenter',function(){
            $('._seach').css('display','block');
        })
        $('._seach').on('mouseleave',function(){
            $('._seach').css('display','none');
        })
        $('._seach').css('display','none');
     //    移出时先进行移入到隐藏的部分判断,移入到隐藏部分就不隐藏,移除时隐藏
        $('._weixin').on('mouseenter',function(){
            $('._weixin').css('display','block');
        })
        $('._weixin').on('mouseleave',function(){
            $('._weixin').css('display','none');
    })
        $('._weixin').css('display','none');
     //    移出时先进行移入到隐藏的部分判断,移入到隐藏部分就不隐藏,移除时隐藏   
        $('._shoppingcart li').on('mouseenter',function(){
            $('._shoppingcart').css('display','block');
        })
        $('._shoppingcart li').on('mouseleave',function(){
            $('._shoppingcart').css('display','none');
        })
        $('._shoppingcart').css('display','none');
     //    移出时先进行移入到隐藏的部分判断,移入到隐藏部分就不隐藏,移除时隐藏
        $('._login li').on('mouseenter',function(){
            $('._login').css('display','block');
        })
        $('._login li').on('mouseleave',function(){
            $('._login').css('display','none');
        })
        $('._login').css('display','none');
    })
    //---------轮播图区域左边导航
    //鼠标穿过时将隐藏部分显示
    $('.hot li').on('mouseenter',function(){
        $('.commondity').css('display','block')
    })
    //鼠标离开时将commondity隐藏,但是要先判断离开后鼠标是否穿过了commondity
    $('.hot li').on('mouseleave',function(){
        //若穿过就不隐藏,
        $('.commondity').on('mouseenter',function(){
            $('.commondity').css('display','block')
        })
        //离开commondity时 ,commondity隐藏
        $('.commondity').on('mouseleave',function(){
            $('.commondity').css('display','none')
        })
        //离开$('.hot li')时 ,commondity隐藏
        $('.commondity').css('display','none')
    })
    //-----------rec_wrap鼠标经过是图片向上移动,鼠标离开时复原
    $('.rec_wrap img').on('mouseenter',function(){
        $(this).animate({top:'-6px'})
    })
    $('.rec_wrap img').on('mouseleave',function(){ 
        $(this).animate({top:'0px'})      
    })
    //------------starbox鼠标经过是图片向上移动,鼠标离开时复原
    $('.starbox img').on('mouseenter',function(){
        $(this).animate({top:'-6px'})
    })
    $('.starbox img').on('mouseleave',function(){
        $(this).animate({top:'0px'})
    })
    //-----------memberarea鼠标经过是图片向上移动,鼠标离开时复原
    $('.memberarea img').on('mouseenter',function(){
        $(this).animate({top:'-6px'})
    })
    $('.memberarea img').on('mouseleave',function(){
        $(this).animate({top:'0px'})
    })
    //--------------与头部公用的样式结束------------------
    //放大镜
   $('.bigimg').on('mouseover',function(){
        $('.mirror').css('display','block');
        $('.largestimg').css('display','block');
   })
   $('.bigimg').on('mouseout',function(){
        $('.mirror').css('display','none');
        $('.largestimg').css('display','none');
   })
   $('.bigimg').on('mousemove',function(ev){
    ev = ev || window.event
    // 获取移动后，小盒子的位置
    var l = ev.clientX - $('.bigimg').offset().left - $('.mirror').width() / 2;
    var t = ev.clientY - $('.bigimg').offset().top - $('.mirror').height() / 2;
    // 获取最大边界
    console.log($('.bigimg').width())
    var maxL = $('.bigimg').width() - $('.mirror').width();
    var maxT = $('.bigimg').height() - $('.mirror').height();
    //边界处理
    if(l > maxL) {
        l = maxL;
    } else if(l < 0) {
        l = 0;
    }
    if(t > maxT) {
        t = maxT;
    } else if (t < 0) {
        t = 0;
    }
    $('.mirror').css('left',l);
    $('.mirror').css('top',t);
    $('.showcase_inner').css('left',-2*l);
    $('.showcase_inner').css('top',-2*t);
   })
   //--------点击图片切换大盒子与放大镜里的图片
   $('.smallimg img').on('click',function(){
      $('#showcase').attr('src',$(this).attr('src')) ;
      $('.changeimg').attr('src',$(this).attr('src')) ;
   })
})()