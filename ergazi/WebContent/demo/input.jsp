<%@page contentType="text/html; charset=GBK"%>
<head>
<link rel="stylesheet" href="/js/jwysiwyg/jquery.wysiwyg.css"
	type="text/css" />
<link rel="stylesheet" type="text/css" href="/js/jwysiwyg/lib/blueprint/screen.css" media="screen, projection" />	
<script type="text/javascript" src="/js/jquery-1.5.2.js"></script>
<script type="text/javascript" src="/js/jwysiwyg/jquery.wysiwyg.js"></script>
<script type="text/javascript"
	src="/js/jwysiwyg/controls/wysiwyg.image.js"></script>
<script type="text/javascript"
	src="/js/jwysiwyg/controls/wysiwyg.link.js"></script>
<script type="text/javascript"
	src="/js/jwysiwyg/controls/wysiwyg.table.js"></script>
<script type="text/javascript">
	(function($) {
		$(document).ready(function() {
			$('#wysiwyg').wysiwyg();
		});
	})(jQuery);
</script>
</head>
<table>
	<tr>
		<td>涉及税种</td>
		<td><input type="text" name="1">
		</td>
		<td>政策代码</td>
		<td><input type="text" name="1">
		</td>
	</tr>
	<tr>
		<td colspan="1">税收优惠政策内容</td>
		<td colspan="3"><textarea id="wysiwyg" rows="10" cols="90"></textarea>
		</td>
	</tr>

</table>
