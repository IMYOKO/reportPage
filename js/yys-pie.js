
var yysPie = echarts.init(document.getElementById('yys-pie'));

option = {
    title: {
        text: '近6个月消费金额分布',
        left: 'center',
        textStyle: {
        	color: '#999',
        	fontSize: 12,
        	fontWeight: 'normal'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        bottom: 10,
        left: 'center',
        data: ['通话消费金额', '流量消费金额','增值业务消费金额','短信消费金额','其他消费金额']
    },
    series : [
        {
        	name: '近6个月消费金额分布',
            type: 'pie',
            radius : '45%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {
                	value:1548,
                	name: '通话消费金额',
                	itemStyle: {
		            	normal: {
		            		color: '#48aaee',
		            	}
		            },
		            selected: true
                },
                {
                	value:535,
                	name: '流量消费金额',
                	itemStyle: {
		            	normal: {
		            		color: '#97da7c',
		            	}
		            }
                },
                {
                	value:510,
                	name: '增值业务消费金额',
                	itemStyle: {
		            	normal: {
		            		color: '#fed870',
		            	}
		            }
                },
                {
                	value:634,
                	name: '短信消费金额',
                	itemStyle: {
		            	normal: {
		            		color: '#f3877a',
		            	}
		            }
                },
                {
                	value:735,
                	name: '其他消费金额',
                	itemStyle: {
		            	normal: {
		            		color: '#8897e5',
		            	}
		            }
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

yysPie.setOption(option);