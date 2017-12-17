
var financial02 = echarts.init(document.getElementById('financial-institution-02'));

var labelOption = {
    normal: {
        show: false,
        position: 'insideRight',
        distance: '15',
        align: 'left',
        verticalAlign: 'middle',
        rotate: '0',
        fontSize: 16,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

option = {
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['近6月通话次数', '近3月通话次数']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center'
    },
    calculable: true,
    yAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['银行', '投资理财', '其他金融机构', '证券', '基金', '期货', '典当拍卖', '保险']
        }
    ],
    xAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '近6月通话次数',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            itemStyle: {
            	normal: {
            		color: '#48aaee',
            	}
            },
            data: [320, 332, 301, 334, 390, 320, 244, 736]
        },
        {
            name: '近3月通话次数',
            type: 'bar',
            label: labelOption,
            itemStyle: {
            	normal: {
            		color: '#97da7c',
            	}
            },
            data: [220, 182, 191, 234, 290, 332, 301, 334]
        }
    ]
};

financial02.setOption(option);