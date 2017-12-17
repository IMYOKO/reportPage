
var timeBar = echarts.init(document.getElementById('time-bar'));

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
        data: ['工作日通话', '节假日通话']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center'
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['00:00-02:00', '02:00-04:00', '04:00-06:00', '006:00-08:00', '08:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00','16:00-18:00',,'18:00-20:00','20:00-22:00','22:00-24:00']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '工作日通话',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            itemStyle: {
            	normal: {
            		color: '#48aaee',
            	}
            },
            data: [320, 332, 301, 334, 390, 320, 244, 736, 390, 320, 244, 736, 320]
        },
        {
            name: '节假日通话',
            type: 'bar',
            label: labelOption,
            itemStyle: {
            	normal: {
            		color: '#97da7c',
            	}
            },
            data: [220, 182, 191, 234, 290, 332, 301, 334, 191, 234, 290, 332, 234]
        }
    ]
};

timeBar.setOption(option);