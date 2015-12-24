// fullpage效果控制开始
$(document).ready(function() {
	$.fn.fullpage({
		slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#ef820'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		navigation:true,
        afterRender:function(){
            $('.section1').find('h3').delay(500).animate({
                top: '0'
            }, 1500, 'easeOutExpo');
            $('.section1').find('p').fadeIn(2000);
        },
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.section1').find('h3').delay(500).animate({
					top: '0'
				}, 1500, 'easeOutExpo');
                $('.section1').find('p').fadeIn(2000);
			}
			if(index == 2){
				$('.section2 .TabBox').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.section3').find('h3').fadeIn(2000);
                $('.section3 .chart_main').delay(500).animate({
                    bottom:'0'
                },1500,'easeOutExpo')
			}
			},
		onLeave: function(index, direction){
			if(index == 1){
				$('.section1').find('h3').delay(500).animate({
					top: '-120%'
				}, 1500, 'easeOutExpo');
                $('.section1').find('p').fadeOut(2000);
			}
			if(index == 2){
				$('.section2 .TabBox').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
                $('.section3').find('h3').fadeOut(2000);
                $('.section3 .chart_main').delay(500).animate({
                    bottom:'-120%'
                },1500,'easeOutExpo')
			}
		}
	});
});
// fullpage效果控制结束
//datatables效果设置
$(document).ready(function(){
	$('.data-table').dataTable({
		"searching": false,  //是否允许Datatables开启本地搜索
		"paging": true,  //是否开启本地分页
		"lengthChange": true,  //是否允许用户改变表格每页显示的记录数
		"info": true,   //控制是否显示表格左下角的信息
		"columnDefs": [{
			"targets": 'nosort',  //列的样式名
			"orderable": false    //包含上样式名‘nosort’的禁止排序
		}],
		//跟数组下标一样，第一列从0开始，这里表格初始化时，第四列默认降序
        "order": [3]  //asc升序   desc降序  "order": [[ 3, "desc" ]]默认第四列为降序排列
	});
});
//datatables效果结束
//highcharts效果开始
var chart;
$(function() {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart_combo' //关联页面元素div#id
        },

        title: {  //图表标题
            text: '江苏省2014年部分品牌汽车上牌统计'
        },

        xAxis: { //x轴
            categories: ['一汽大众', '上海大众','上海通用', '北京现代'],  //X轴类别
			labels:{y:18}  //x轴标签位置：距X轴下方18像素
        },
		yAxis: {  //y轴
            title: {text: '数量（千辆）'}, //y轴标题
			lineWidth: 2 //基线宽度
        },
        tooltip: {
            formatter: function() { //格式化鼠标滑向图表数据点时显示的提示框
                var s;
                if (this.point.name) { // 饼状图
                    s = '<b>' + this.point.name + '</b>: <br>' + this.y+ '千辆(' + twoDecimal(this.percentage) + '%)';
                } else {
                    s = '' + this.x + ': ' + this.y + '千辆';
                }
                return s;
            }
        },
        labels: { //图表标签
            items: [{
                html: '汽车上牌总量对比',
                style: {
                    left: '48px',
                    top: '8px'
                }
            }]
        },
		exporting: {
			enabled: true  //设置导出按钮不可用
		},
		credits: { 
			text: '#',
			href: '#'
		},
        series: [{ //数据列
            type: 'column',
            name: '南通',
            data: [7.583, 13.555, 16.07, 7.632]
        },
        {
            type: 'column',
            name: '泰州',
            data: [3.247, 6.691, 8.86, 3.711]
        },
        {
            type: 'column',
            name: '盐城',
            data: [3.707, 5.182, 10.724, 3.203]
        },
		{
            type: 'column',
            name: '扬州',
            data: [4.119, 7.177, 9.359, 2.993]
        },
        {
            type: 'spline',
            name: '平均值',
            data: [4.664, 8.151, 11.209, 4.384]
        },
        {
            type: 'pie', //饼状图
            name: '汽车上牌总量',
            data: [{
                name: '南通',
                y: 44.84,
                color: '#4572A7' 
            },
            {
                name: '泰州',
                y: 22.335,
                color: '#AA4643' 
            },
            {
                name: '盐城',
                y: 22.816,
                color: '#89A54E' 
            },
			{
                name: '扬州',
                y: 23.648,
                color: '#FFD306' 
            }],
            center: [100, 80],  //饼状图坐标
            size: 100,  //饼状图直径大小
            dataLabels: {
                enabled: false  //不显示饼状图数据标签
            }
        }]
    });
});
//保留2位小数
function twoDecimal(x) {
    var f_x = parseFloat(x);
    if (isNaN(f_x)) {
        alert('错误的参数');
        return false;
    }
    var f_x = Math.round(x * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}

//highcharts效果结束