
var myxfBar = echarts.init(document.getElementById('myxf-bar'));

var xAxisData = ['2017-01','2017-02','2017-03','2017-04','2017-05','2017-06'];
var data1 = [1.49,1.77,1.51,0.50,1.81,0.59];
var data2 = [-0.41,-0.99,-0.53,-0.49,-0.05,-0.49];

var itemStyle = {
    normal: {
    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    legend: {
        data: ['充值金额', '消费金额'],
        align: 'left',
        left: 'center'
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        silent: false,
        axisLine: {onZero: true},
        splitLine: {show: false},
        splitArea: {show: false}
    },
    yAxis: {
        inverse: false,
        splitArea: {show: false}
    },
    series: [
    	{
            name: '充值金额',
            type: 'bar',
            stack: 'one',
            itemStyle: {
            	normal: {
            		color: '#48aaee',
            	}
            },
            data: data1
       },
    	{
            name: '消费金额',
            type: 'bar',
            stack: 'one',
            itemStyle: {
            	normal: {
            		color: '#97da7c',
            	}
            },
            data: data2
        }
    ]
};

myxfBar.setOption(option);