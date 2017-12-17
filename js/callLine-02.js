
var callLine02 = echarts.init(document.getElementById('call-line-02'));

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['工作时间通话','非工作时间通话','深夜时间通话']
    },
    series: [
        {
            name:'近6个月通话时间段分布',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {
                	value:335,
                	name:'工作时间通话',
                	itemStyle: {
		            	normal: {
		            		color: '#48aaee',
		            	}
		            },
                },
                {
                	value:335,
                	name:'非工作时间通话',
                	itemStyle: {
		            	normal: {
		            		color: '#97da7c',
		            	}
		            },
                },
                {
                	value:335,
                	name:'深夜时间通话',
                	itemStyle: {
		            	normal: {
		            		color: '#ffda6f',
		            	}
		            },
                }
            ]
        }
    ]
};

callLine02.setOption(option);