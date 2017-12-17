
var riskContant02 = echarts.init(document.getElementById('riskContant-02'));

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['主叫通话时长', '被叫通话时长']
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
        data: ['小代公司','澳门电话','律师电话','110','120','法院号码']
    },
    series: [
        {
            name: '主叫通话时长',
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
            name: '被叫通话时长',
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

riskContant02.setOption(option);