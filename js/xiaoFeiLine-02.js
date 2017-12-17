
var XFLine02 = echarts.init(document.getElementById('xiaoFei-line-02'));

option = {
	title: {
        text: '近6个月账单信息(元)',
        left: 'center',
        textStyle: {
        	color: '#999',
        	fontSize: 12,
        	fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'消费金额',
            type:'line',
            data:[11, -11, 15, 13, 12, 13, 10],
            itemStyle: {
            	normal: {
            		color: '#9ecffe',
            	},
            },
            lineStyle: {
            	normal: {
            		color: '#9ecffe',
            		width: '2'
            	},
            }
        }
       
    ]
};

XFLine02.setOption(option);