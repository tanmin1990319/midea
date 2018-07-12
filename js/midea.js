(function(){
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
})()

