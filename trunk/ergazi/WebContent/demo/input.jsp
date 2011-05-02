<%@page contentType="text/html; charset=utf-8"%>
<head>
<link rel="stylesheet" href="/js/jwysiwyg/jquery.wysiwyg.css"
	type="text/css" />
<link rel="stylesheet" href="/css/huabo.css" type="text/css" />
<link rel="stylesheet" type="text/css"
	href="/js/jwysiwyg/lib/blueprint/screen.css" media="screen, projection" />
<script type="text/javascript" src="/js/jquery-1.5.2.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.11.custom.min.js"></script>
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
			$('#beizhu').wysiwyg();
			$("#datestart").datepicker();
			$("#datend").datepicker();
			$("#datex").datepicker();
		});
	})(jQuery);
	var availableTags = [ "ActionScript", "AppleScript", "Asp", "BASIC", "C",
			"C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran",
			"Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP",
			"Python", "Ruby", "Scala", "Scheme" ];
	$("#tags1").autocomplete( {
		source : availableTags
	});
	$("#tags2").autocomplete( {
		source : availableTags
	});
	$("#tags3").autocomplete( {
		source : availableTags
	});
	$("#tags4").autocomplete( {
		source : availableTags
	});
	$("#tags5").autocomplete( {
		source : availableTags
	});
	$("#tags6").autocomplete( {
		source : availableTags
	});
</script>
</head>

<form name="mainform" action="#">
<div class="toggler">
<div id="effect" class="ui-widget-content ui-corner-all">
<h3 class="ui-widget-header ui-corner-all">录入信息</h3>
<p>
<table cellspacing="1" cellpadding="1" class="class_form" width="100%">
	<tr class="ui-widget-content">
		<td align="center">涉及税种：</td>
		<td><select name="ord" style="width: 150px;">
			<option value="">--请选择--</option>
			<option value="">--AAA--</option>
			<option value="">--BBB--</option>
		</select></td>
		<td align="center">政策代码：</td>
		<td><input type="text" name="type"
			style="width: 120; overflow-x: visible; overflow-y: visible;" /></td>
	</tr>
	<tr class="ui-widget-content">
		<td align="center">税收优惠政策名称：</td>
		<td><textarea id="zcname" rows="3" cols="20"></textarea></td>
		<td align="center">法律法规名称及文号：</td>
		<td><textarea id="zcno" rows="3" cols="20"></textarea></td>
	</tr>
	<tr class="ui-widget-content">
		<td>税收优惠政策内容：</td>
		<td colspan="3"><textarea id="wysiwygs" rows="3" cols="110"></textarea>
		</td>
	</tr>
	<tr class="ui-widget-content">
		<td align="center">政策出台时间：</td>
		<td><input type="text" id="datestart"></td>
		<td align="center">政策开始时间：</td>
		<td><input type="text" id="datend"></td>
	</tr>
	<tr class="ui-widget-content">
		<td align="center">政策有无截至期限：</td>
		<td><input type="radio" name="ex" value="0" /> 无截至日期 <input
			type="radio" name="ex" value="1" /> 有截至日期</td>
		<td align="center">政策截至时间：</td>
		<td><input type="text" id="datex"></td>
	</tr>
	<tr class="ui-widget-content">
		<td align="center">优惠方式：</td>
		<td><input id="tags1" /></td>
		<td align="center">政策目标：</td>
		<td><input id="tags2" /></td>
	</tr>
	<tr class="ui-widget-content">
		<td align="center">国民经济行业：</td>
		<td><input id="tags3" /></td>
		<td align="center">部门分类：</td>
		<td><input id="tags4" /></td>
	</tr>
	<tr class="ui-widget-content">
		<td align="center">区域：</td>
		<td><input id="tags5" /></td>
		<td align="center">法律级次：</td>
		<td><input id="tags6" /></td>
	</tr>
	<tr class="ui-widget-content">
		<td>是否个案：</td>
		<td colspan="3"><input type="radio" name="gean" value="0" /> 是 <input type="radio" name="gean" value="0" /> 否 </td>
	</tr>
	<tr class="ui-widget-content">
		<td>备注：</td>
		<td colspan="3"><textarea id="beizhu" rows="3" cols="110"></textarea>
		</td>
	</tr>
	<tr>
		<td colspan="4" align="center">
		<div class="demo">
		<button>保存</button>
		&nbsp;<input type="reset" value="重置" /></div>
		</td>
	</tr>
</table>
</p>
</div>
</div>
</form>
