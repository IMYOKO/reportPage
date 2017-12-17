
var contactsScatter = echarts.init(document.getElementById('contacts-scatter'));

var contactsScatterData = [
    [16, 8, '广州'],
    [8, 6, '深圳'],
    [13, 7, '上海'],
    [9, 8, '北京'],
    [11, 8, '南京'],
    [14, 9, '福州'],
    [6, 7, '惠州'],
    [4, 4, '珠海'],
    [12, 10, '香港'],
    [7, 4, '澳门'],
    [1, 1, '南昌']
];

option = {
    title: {
        text: '前10联系人归属地分布',
        left: 'center',
        textStyle: {
        	color: '#999',
        	fontSize: 12,
        	fontWeight: 'normal'
        }
    },
    tooltip: {
        formatter: '({c})'
    },
    xAxis: [
        {
       		name: '通话次数(次)',
	       	gridIndex: 0,
	       	min: 0
        }
    ],
    yAxis: [
        {
        	name: '通话号码数量(个)',
        	gridIndex: 0,
        	min: 0
        }
    ],
    series: [
        {
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: contactsScatterData,
            symbolSize: function (data) {
	            return Math.sqrt(data[0]*data[1])*0.8e1;
	        },
	        itemStyle: {
            	normal: {
            		color: 'rgba(19, 143, 236, .8)',
            	}
            },
        }
    ]
};

contactsScatter.setOption(option);