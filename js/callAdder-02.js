
var callAdder02 = echarts.init(document.getElementById('callAdder-02'));

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
    	left: 'center',
        data: ['工作日通话活跃(天)', '节假日通话活跃(天)']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['广东省深圳市','广东省潮汕市','广东省佛山市','广东省广州市','广东省惠州市','广东省珠海市']
    },
    series: [
        {
            name: '工作日通话活跃(天)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            itemStyle: {
            	normal: {
            		color: '#48aaee',
            	}
            },
            data: [130, 240, 34, 234, 387, 765]
        },
        {
            name: '节假日通话活跃(天)',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                    position: 'insideRight'
                }
            },
            itemStyle: {
            	normal: {
            		color: '#97da7c',
            	}
            },
            data: [110, 230, 44, 32, 243, 876]
        }
    ]
};

callAdder02.setOption(option);