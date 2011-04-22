$(document).ready(function(){
	//载入布局
	$('body').layout({ applyDefaultStyles: true });
	//左边菜单
	$("div[class^='tab_menu_']").accordion({ header: "h3" });
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
	
	tabMenu('base');	//菜单初始化
});


//菜单功能
function tabMenu(t){
    $("div[class^='tab_menu_']").hide();
    $('.tab_menu_'+t).show();
}

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

//图表
var chart;
$(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            defaultSeriesType: 'spline',
            marginRight: 10,
            events: {
                load: function() {
    
                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function() {
                        var x = (new Date()).getTime(), // current time
                            y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },
        title: {
            text: 'Live random data'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function() {
                    return '<b>'+ this.series.name +'</b><br/>'+
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+ 
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [{
            name: 'Random data',
            data: (function() {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;
                for (i = -19; i <= 0; i++) {
                    data.push({
                        x: time + i * 1000,
                        y: Math.random()
                    });
                }
                return data;
            })()
        }]
    });
    
    
});

var chart;
$(document).ready(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container1'
        },
        title: {
            text: 'Combination chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
        },
        tooltip: {
            formatter: function() {
                var s;
                if (this.point.name) { // the pie chart
                    s = ''+
                        this.point.name +': '+ this.y +' fruits';
                } else {
                    s = ''+
                        this.x  +': '+ this.y;
                }
                return s;
            }
        },
        labels: {
            items: [{
                html: 'Total fruit consumption',
                style: {
                    left: '40px',
                    top: '8px',
                    color: 'black'				
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4]
        }, {
            type: 'column',
            name: 'John',
            data: [2, 3, 5, 7, 6]
        }, {
            type: 'column',
            name: 'Joe',
            data: [4, 3, 3, 9, 0]
        }, {
            type: 'spline',
            name: 'Average',
            data: [3, 2.67, 3, 6.33, 3.33]
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Jane',
                y: 13,
                color: '#4572A7' // Jane's color
            }, {
                name: 'John',
                y: 23,
                color: '#AA4643' // John's color
            }, {
                name: 'Joe',
                y: 19,
                color: '#89A54E' // Joe's color
            }],
            center: [100, 80],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
    
    
});