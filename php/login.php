<?php
$name=$_POST['name'];
$password=$_POST['password'];
$sqlconcat=new mysqli('localhost','root','','db_student_admin',3306);
$sql="select * from user_info where username = '$name'";
$sql1="select * from user_info where password='$password'";
$result = $sqlconcat->query($sql);
$result1 =$sqlconcat->query($sql1);
$row=$result->fetch_assoc();
$row1=$result1->fetch_assoc();
if($row){
    if($row&&$row1){
        $arr=array('code'=>'200');
    }else{
        $arr=array('code'=>'10001','msg'=>'密码错误');
    }
}else{
    $arr=array('code'=>'10001','msg'=>'该手机号未注册');
}
echo json_encode($arr);
?>