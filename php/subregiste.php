<?php
$name=$_POST['name'];
$password=$_POST['password'];
$sqlconcat=new mysqli('localhost','root','','db_student_admin',3306);
$sql="select * from user_info where username = '$name'";
$sql1="INSERT into user_info (username,password) value($name,$password)";
$result = $sqlconcat->query($sql);
$row=$result->fetch_all();
if($row){
    $arr=array('code'=>'10001','msg'=>'用户已注册');
}else{
    $result1 =$sqlconcat->query($sql1);
    if($result1){
        $arr=array('code'=>'200','msg'=>'注册成功');
    }else{
        $arr=array('code'=>'10001','msg'=>'注册失败');
    }
}
echo json_encode($arr);
?>