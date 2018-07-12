(function(){
    //-------------点击登录按钮将获取到的用户名与密码正则验证后发送到../php/login.php
    $('.sub').on('click',function(event){
        event = event || window.event;
        event.preventDefault();
        $params ={
           name:$('.username').val(),
           password:$('.password').val()
        }
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if(myreg.test($params.name)){
            $.post('../php/login.php',$params,function(json){
                $json =json;
                if(json.code==200){
                    location.href='../midea/midea.html';
                }
                else{
                    $('.login form span').eq(1).html(json.msg).css('color','red');
                }
            },'json')
        }else{
            $('.login form span').eq(0).html('请输入手机号').css('color','red');
        }
    })
    //------------点击登录界面的注册时  注册界面显示,登录界面隐藏----------------
    $('.gotoregiste').on('click',function(){
        $('.login').css('display','none');
        $('.registe').css('display','block');
    })
    //---------点击注册界面的注册按钮,获取注册的手机号与密码正则验证后发送到../php/subregiste.php
    $('.subregiste').on('click',function(event){
        event=event||window.event;
        event.preventDefault();
        $params={
             name:$('.phone').val(),
             password:$('.registe .password').val(),
             aginpassword:$('.aginpassword').val()
        }
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        var myreg1=/^[A-Za-z0-9]{6,16}$/;
        if($params.name==''){
            $('.registe  form span').eq(0).html('手机号未输入').css('color','red');
            return;
        }
        if($params.password==''){
            $('.registe  form span').eq(1).html('密码不能为空').css('color','red');
              return;
         }
        if(myreg.test($params.name)){
            if($params.password===$params.aginpassword){
                  if(myreg1.test($params.password)){
                     $.post('../php/subregiste.php',$params,function(json){
                        $json=json;
                        console.log($json)
                            if($json.code==200){
                                // $('.registe  form span').eq(0).html($json.msg).css('color','red');
                                alert($json.msg)
                                location.href='../midea/midea.html'
                            }else{
                                $('.registe  form span').eq(0).html($json.msg).css('color','red');
                            }
                     },'json')
                  }else{
                    $('.registe  form span').eq(1).html('只能为数字大小写字母').css('color','red');
                  }
             }else{
                $('.registe  form span').eq(1).html('两次输入的密码不对').css('color','red');
             }
        }else{
          $('.registe  form span').eq(0).html('手机号有误').css('color','red');
        }
    })
})()