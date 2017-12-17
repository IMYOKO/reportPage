
var fxScatter = echarts.init(document.getElementById('fx-scatter'));

var fxScatterData = [
	[
	    [12, 1, '深圳'],
	    [24, 1, '香港'],
	    [35, 1, '广州']
	],
	[
	    [11, 0, '惠州'],
	    [14, 0, '长沙'],
	    [23, 0, '南昌']
	]
];

option = {
    tooltip: {
        formatter: '{a}:({c})'
    },
    legend: {
        data: ['频繁通话', '偶尔通话']
    },
    xAxis: {
    		show: false,
	       	gridIndex: 0,
	       	min: 0
    },
    yAxis: {
    		show: false,
        	gridIndex: 0
    },
    series: [
        {
        	name: '频繁通话',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: fxScatterData[0],
            symbolSize: function (data) {
	            return Math.sqrt(data[0])*1e1;
	        },
	        itemStyle: {
            	normal: {
            		color: 'rgba(255, 191, 0, .8)',
            	}
            },
        },
        {
        	name: '偶尔通话',
            type: 'scatter',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: fxScatterData[1],
            symbolSize: function (data) {
	            return Math.sqrt(data[0])*1e1;
	        },
	        itemStyle: {
            	normal: {
            		color: 'rgba(255, 218, 111, .8)',
            	}
            },
        }
    ]
};

fxScatter.setOption(option);