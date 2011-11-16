<!DOCTYPE html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<%@page contentType="text/html; charset=GBK"%>

<link rel="stylesheet"
	href="http://code.jquery.com/mobile/1.0rc3/jquery.mobile-1.0rc3.min.css" />
<link rel="stylesheet" type="text/css" href="/css/wqt.css" />
<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
<script
	src="http://code.jquery.com/mobile/1.0rc3/jquery.mobile-1.0rc3.min.js"></script>


<div data-role="page" id="task">
	<div data-role="header">
		<a href="main.jsp" data-role="button" data-icon="home"
			data-transition="pop">返回</a>
		<h1>任务管理</h1>
		<a href="#input-task" data-role="button"
			data-icon="refresh" data-transition="pop">刷新</a>
	</div>
	<div data-role="content"></div>
	<div data-role="footer" data-position="fixed" class="ui-bar">
	    <a href="#input-task" data-role="button" data-icon="plus">添加</a> 
		<a href="index.html" data-role="button" data-icon="delete">删除</a>
		<a href="index.html" data-role="button" data-icon="arrow-u">全选</a> 
		<a href="index.html" data-role="button" data-icon="arrow-d">不选</a>
	</div>
</div>

<div data-role="page" id="input-task">
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