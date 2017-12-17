
var callLine01 = echarts.init(document.getElementById('call-line-01'));

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['仅主叫号码','仅被叫号码','互通号码']
    },
    series: [
        {
            name:'近6个月通话号码分布',
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
                	name:'仅主叫号码',
                	itemStyle: {
		            	normal: {
		            		color: '#48aaee',
		            	}
		            },
                },
                {
                	value:335,
                	name:'仅被叫号码',
                	itemStyle: {
		            	normal: {
		            		color: '#97da7c',
		            	}
		            },
                },
                {
                	value:335,
                	name:'互通号码',
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

callLine01.setOption(option);