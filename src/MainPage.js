import React from 'react';
import {
    Link
} from "react-router-dom";
export default function MainPage(){
    return(
      <>
      <Link to = "/"> 主页链接</Link>
      <Link to = "/gpaScore"> 成绩相关</Link>
      <img alt = "mainpic" src ="images/mainTab.jpg" width = "100%"/>
      </>
    );
}