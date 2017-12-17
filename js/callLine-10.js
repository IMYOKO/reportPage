
var callLine10 = echarts.init(document.getElementById('call-line-10'));

option = {
	title: {
        text: '近6个月通话频率前十',
        left: 'center',
        textStyle: {
        	color: '#999',
        	fontSize: 12,
        	fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['号码1','号码2','号码3','号码4','号码5','号码6','号码7','号码8','号码9','号码10']
    },
    series: [
        {
            name:'近6个月通话频率前十',
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
                	name:'号码1',
                	itemStyle: {
		            	normal: {
		            		color: '#c02229',
		            	}
		            },
                },
                {
                	value:335,
                	name:'号码2',
                	itemStyle: {
		            	normal: {
		            		color: '#b5c431',
		            	}
		            },
                },
                {
                	value:335,
                	name:'号码3',
                	itemStyle: {
		            	normal: {
		            		color: '#fdd00e',
		            	}
		            },
                },
                {
                	value:335,
                	name:'号码4',
                	itemStyle: {
		            	normal: {
		            		color: '#e97d25',
		            	}
		            },
                },
                {
                	value:335,
                	name:'号码5',
                	itemStyle: {
		            	normal: {
		            		color: '#25737a',
		            	}
		            },
                },
                {
                	value:335,
                	name:'号码6',
                	itemStyle: {
		            	normal: {
		            		color: '#fe8661',
		            	}
		            },
                },
                {
                	value:335,
                	name:'号码7',
                	itemStyle: {
		            	normal: {
		            		color: '#9bce64',
		            	}
		            },
                },
                {
                	value:335,
                	name:'号码8',
                	itemStyle: {
		            	normal: {
		            		color: '#fadc5f',
		            	}
		            },
                },
                {
                	value:335,
                	name:'号码9',
                	itemStyle: {
		            	normal: {
		            		color: '#f2aa3b',
		            	}
		            },
                },
                {
                	value:335,
                	name:'号码10',
                	itemStyle: {
		            	normal: {
		            		color: '#60c3de',
		            	}
		            },
                }
            ]
        }
    ]
};

callLine10.setOption(option);