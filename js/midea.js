(function(){
    $('.header-rg li').on('mouseenter',function(){
        if($(this).index()==0){
             $('._seach').css('{display:block}');

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
    
})()