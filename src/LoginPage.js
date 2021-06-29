
import React from 'react';
import {
    Link
  } from "react-router-dom";
import { useHistory } from 'react-router-dom'
export default function Loginpage(){
    var temp;
    const history = useHistory();
     return(
    <>
    <img alt="" src = "images/logImg.jpg" width = "100%"></img>
    <form onSubmit = {() => CheckPassword()}>
    <p align= "center"> VATUU为途教学信息服务</p>
    <table border = "1" align = "center">
        <tr>
            <td>学号/工号:</td>
            <td><input type = "text" name = "name" id = "name1"size = "25"/> </td>
        </tr>
        <tr>
            <td>输入登录密码:</td>
            <td><input type = "password" name = "password" id = "pass1" size = "25"/></td>
        </tr>
        <tr>
            <td colspan = "2" align = "center">
            <input type = "submit" value = "登录系统"/>
            </td>
        </tr>
    </table>
    </form>
    <Link to = "/mainpage" hidden> 主页链接</Link>
    </>
    );
    function CheckPassword(){
        temp = document.getElementById("pass1").value;
        if (temp === '') {
            alert("please enter password");
        } else if (temp === "Aa121212") {
            history.push('/mainpage');
            alert("Welcome " + document.getElementById("name1").value);
            return true;
        } else {
            alert('wrong password');
            return false;
        }
    }
}