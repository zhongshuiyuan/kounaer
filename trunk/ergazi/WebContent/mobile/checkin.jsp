<!DOCTYPE html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<%@page contentType="text/html; charset=GBK"%>

<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0rc3/jquery.mobile-1.0rc3.min.css" />
<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
<script src="http://code.jquery.com/mobile/1.0rc3/jquery.mobile-1.0rc3.min.js"></script>

<div data-role="page" id="task">
   <div data-role="header">
      <a href="#input" data-role="button" data-icon="plus" data-transition="pop"></a>
      <h1>任务</h1>
      <a href="#" data-role="button" data-icon="refresh"></a>
   </div>
   <div data-role="content">   
      <p>What vehicles do you like?</p>      
      <p><a href="#Cars">Cars</a></p>
      <p><a href="#Trains">Trains</a></p>
      <p><a href="#Planes">Planes</a></p>
      <p><a href="http://www.madinc.co" rel="external">madinc.co</a></p>    
   </div>
   <div data-role="footer" data-position="fixed">
      <div data-role="navbar">
      <ul>
         <li><a href="#nav1" class="ui-btn-active">任务</a></li>
         <li><a href="#nav2">考勤</a></li>
         <li><a href="#nav2">差旅</a></li>
         <li><a href="/index.jsp" data-rel="dialog" data-transition="pop">关于</a></li>
      </ul>
      </div>
   </div>
</div>

<div data-role="page" id="input">
   <div data-role="header">
      <a href="#task" data-role="button" data-icon="home"></a>
      <h1>添加任务</h1>
      <a href="#" data-role="button" data-icon="refresh"></a>
   </div>
   <div data-role="content"> 
      <div data-role="fieldcontain">
	     <label for="username">任务名称:</label>
	     <input type="text" name="taskName" id="taskName" value="" placeholder="任务名称"/>
      </div>
   </div>
   <div data-role="footer" data-position="fixed">
      <div data-role="navbar">
      <ul>
         <li><a href="#nav1" class="ui-btn-active">提交</a></li>
         <li><a href="#nav2">保存</a></li>
         <li><a href="#nav2">放弃</a></li>
         <li><a href="/index.jsp" data-rel="dialog" data-transition="pop">关于</a></li>
      </ul>
      </div>
   </div>
</div>