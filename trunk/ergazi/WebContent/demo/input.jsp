<%@page contentType="text/html; charset=utf-8"%>
<head>
<link rel="stylesheet" href="/js/jwysiwyg/jquery.wysiwyg.css"
	type="text/css" />
<link rel="stylesheet" href="/css/huabo.css"
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
<table cellspacing="0" cellpadding="5" border="1">
	<tr>
		<td class="admin_input_name">涉及税种：</td>
		<td class="admin_input_value">
		  <div class="errorbox-good" id="ucpr_nameErrorBox">
		    <input type="text" size="30" value="" name="ucpr_name">
            <div id="ucpr_nameErrorMessage" class="errormsg-group"></div>
          </div>
        </td>
		<td class="admin_input_name">政策代码：</td>
		<td class="admin_input_value">
		  <div class="errorbox-good" id="dm_nameErrorBox">
		    <input type="text" size="30" value="" name="dm_name">
            <div id="dm_nameErrorMessage" class="errormsg-group"></div>
          </div>
        </td>
	</tr>
	<tr>
		<td class="admin_input_name">税收优惠政策内容：</td>
		<td colspan="3"><textarea id="wysiwyg" rows="10" cols="90"></textarea>
		</td>
	</tr>

</table>
