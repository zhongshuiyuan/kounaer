<!DOCTYPE html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<%@page contentType="text/html; charset=GBK"%>

<link rel="stylesheet"
	href="http://code.jquery.com/mobile/1.0rc3/jquery.mobile-1.0rc3.min.css" />
<link rel="stylesheet" type="text/css" href="/css/wqt.css" />
<script src="http://code.jquery.com/jquery-1.6.4.min.js"></script>
<script
	src="http://code.jquery.com/mobile/1.0rc3/jquery.mobile-1.0rc3.min.js"></script>

<div data-role="page" id="main">
	<div data-role="header">
		<h1>外勤通</h1>
	</div>
	<div data-role="content">

		<div class="ui-grid-b">
			<div class="ui-block-a" align="center">
				<a class="productLink" href="task.jsp"><img
					src="/img/task.png" width="32" height="32" alt="任务管理" /><br>
					<span class="label">任务管理</span></a>
			</div>
			<div class="ui-block-b" align="center">
				<a class="productLink" href="/mobile/task/task.jsp"><img
					src="/img/qiandao.png" width="32" height="32" alt="签到服务" /><br>
					<span class="label">签到服务</span></a>
			</div>
			<div class="ui-block-c" align="center">
				<a class="productLink" href="/mobile/task/task.jsp"><img
					src="/img/487d2925586011893a59b67f648cd96e.png" width="32"
					height="32" alt="地图服务" /><br> <span class="label">地图服务</span></a>
			</div>
			<div class="ui-block-a" align="center">
				<a class="productLink" href="/mobile/task/task.jsp"><img
					src="/img/e8c3d24d5f2226f0bc9b0cab2b752ddc437caf22.jpg" width="32"
					height="32" alt="GPS服务" /><br> <span class="label">GPS服务</span></a>
			</div>
			<div class="ui-block-b" align="center">
				<a class="productLink" href="/mobile/task/task.jsp"><img
					src="/img/t1.jpg" width="32" height="32" alt="统计服务" /><br> <span
					class="label">统计服务</span></a>
			</div>
			<div class="ui-block-c" align="center">
				<a class="productLink" href="/mobile/task/task.jsp"><img
					src="/img/t2.png" width="32" height="32" alt="搜索服务" /><br> <span
					class="label">搜索服务</span></a>
			</div>
		</div>
	</div>
	<div data-role="footer" data-position="fixed">
		<div data-role="navbar">
			<ul>
				<li><a href="#nav1" class="ui-btn-active">任务</a></li>
				<li><a href="#nav2">考勤</a></li>
				<li><a href="#nav2">差旅</a></li>
				<li><a href="/index.jsp" data-rel="dialog"
					data-transition="pop">关于</a></li>
			</ul>
		</div>
	</div>
</div>