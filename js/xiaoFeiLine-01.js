
var XFLine01 = echarts.init(document.getElementById('xiaoFei-line-01'));

option = {
	title: {
        text: '近6个月通话时长(分)',
        left: 'center',
        textStyle: {
        	color: '#999',
        	fontSize: 12,
        	fontWeight: 'normal'
        }
    },
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'通话时长',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220],
            itemStyle: {
            	normal: {
            		color: '#9ecffe',
            	}
            }
        }
    ]
};

XFLine01.setOption(option);