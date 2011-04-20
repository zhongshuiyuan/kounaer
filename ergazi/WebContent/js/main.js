$(document).ready(function(){
	//载入布局
	$('body').layout({ applyDefaultStyles: true });
	//左边菜单
	$("#accordion").accordion({ header: "h3" });
	//关闭tab
	$('#tabs span.ui-icon-close').live('click', function() {
			var index = $('li',$tabs).index($(this).parent());
			$tabs.tabs('remove', index);
		});
	//按模板格式创建tab
	var $tabs = $('#tabs').tabs({
			tabTemplate: '<li><a href="#{href}">#{label}</a> <span class="ui-icon ui-icon-close">Remove Tab</span></li>',
			add: function(event, ui) {
				var tab_content = $tab_content_input.val() || 'Tab '+tab_counter+' content.';
				$(ui.panel).append('<p>'+tab_content+'</p>');
			}
		});
	//增加tab初始化
	tabid = 1;
	var $tabs = $('#tabs').tabs({
	    add: function(event, ui) {
	        $tabs.tabs('select', '#' + ui.panel.id);
	    }
	});
	//改变按钮ui
	$("button, input:submit, a", ".demo").button();
	$("a", ".demo").click(function() { return false; });
						
	//表格
	jQuery("#list9").jqGrid({
		datatype: "local",
		height: 250,
	   	colNames:['编号','行业', '部门', '区域','法律级次','是否个案','优惠方式'],
	   	colModel:[
	   		{name:'id',index:'id', align:"center", sorttype:"int"},
	   		{name:'invdate',index:'invdate',align:"center", width:120},
	   		{name:'name',index:'name',align:"center"},
	   		{name:'amount',index:'amount', width:80, align:"center"},
	   		{name:'tax',index:'tax', width:80, align:"center"},		
	   		{name:'total',index:'total', width:120,align:"center", sorttype:"date"},		
	   		{name:'note',index:'note', width:150,align:"center", sortable:false}		
	   	],
	   	multiselect: true,
	   	caption: "支出列表"
	});
	var mydata = [
			{id:"100001",invdate:"金融",name:"业务部",amount:"北京市",tax:"二级",total:"2010-07-30",note:"免费"},
			{id:"110881",invdate:"旅游",name:"销售部",amount:"北京市",tax:"二级",total:"2010-07-30",note:"免费"},
			{id:"000881",invdate:"电子",name:"销售部",amount:"北京市",tax:"二级",total:"2010-07-30",note:"免费"},
			{id:"201001",invdate:"旅游",name:"业务部",amount:"北京市",tax:"二级",total:"2010-07-30",note:"免费"},
			{id:"700088",invdate:"旅游",name:"业务部",amount:"北京市",tax:"二级",total:"2010-07-30",note:"免费"},
			{id:"700088",invdate:"旅游",name:"业务部",amount:"北京市",tax:"二级",total:"2010-07-30",note:"免费"},
			{id:"700088",invdate:"旅游",name:"业务部",amount:"北京市",tax:"二级",total:"2010-07-30",note:"免费"},
			{id:"700088",invdate:"旅游",name:"业务部",amount:"北京市",tax:"二级",total:"2010-07-30",note:"免费"},
			{id:"700088",invdate:"旅游",name:"业务部",amount:"北京市",tax:"二级",total:"2010-07-30",note:"免费"},
			{id:"700088",invdate:"旅游",name:"业务部",amount:"北京市",tax:"二级",total:"2010-07-30",note:"免费"}
			];
	for(var i=0;i<=mydata.length;i++)
		jQuery("#list9").jqGrid('addRowData',i+1,mydata[i]);
	
	
});

//新开tab
function openTab(tabName,url){
	$('#tabs').tabs("add","#newtab"+tabid,tabName);
	$("div #newtab" + tabid ).load("query.html");
	tabid++;
	//$('#tabs').tabs('select', '#' + ui.panel.id);
}
function queryForm(id,list){
	alert('a');
}
