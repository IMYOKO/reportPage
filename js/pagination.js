/*
 * author: YOKO
 * time: 2017-12-20
 * 
 * 参数说明
 * opt = {
 * 	listId: "#lsit",  //分页节点ID 
 *  selectOption: [5,10,15]  //每页显示的数目
 * }
 * 
 * 使用说明  例：
 * $('#pages-01').pagesPulgin({
 * 		listId: '#table-list-01',
 * 		selectOption: [5,10,15]
 * });
 */


;(function($, window, document, undefind) {
	//构造函数
	function PagesPulgin(ele, opt) {
		this.$element = ele,
		this.defaults = {
			listId: '',
			selectOption: [5]
		}
		this.options =  $.extend({}, this.defaults, opt),
		this.$list = $(this.options.listId),
		this.length = this.$list.find('tr').length,
		this.init()
	}
	
	//原型扩展方法
	PagesPulgin.prototype = {
		//初始化
		init: function(){
			var num = this.options.selectOption[0];
			this.creatElements();
			this.showPages(num,1);
			this.clickToPage(num,1);
			this.goToPage();
			this.showNumPage();
			this.nextClickPage();
		},
		
		//创建分页DOME
		creatElements: function(){
			//分页
			var pageAHtml = ''
			var num = this.options.selectOption[0];
			var count = Math.ceil(this.length/num);
			
			for(var i=1; i<=count; i++){
				pageAHtml += '<a href="javascript:;">'+ i +'</a>';
			}
			var pageHtml = '<div class="pages-main float-left">'+
								'<a href="javascript:;" class="prevNext"><</a>'+
								'<span class="pages">'+
									pageAHtml+
								'</span>'+
								'<a href="javascript:;" class="prevNext">></a>'+
							'</div>';
							
			//选择
			var selLen = this.options.selectOption.length;
			var optionHtml = ''
			for(var i=0; i<selLen; i++){
				optionHtml +=	'<option value="'+ this.options.selectOption[i] +'">'+ this.options.selectOption[i] +'条/页</option>'
			}
			var chooseHtml = '<div class="pages-choose float-left">'+
								'<select id="select-item">'+
									optionHtml+
								'</select>'
							'</div>';
							
							
			//跳转
			var gotoHtml = '<div class="pages-go float-left">'+
								'<span>跳至</span><input type="text" name="" id="gotoVal" value="" /><span>页</span><input type="button" name="" id="gotoBtn" value="确定" />'+
							'</div>';
			
			//添加到页面
			this.$element.append(pageHtml);
			this.$element.append(chooseHtml);
			this.$element.append(gotoHtml);
			
			//初始化第一页选中
			this.$element.find('.pages a').eq(0).addClass('active');
		},
		
		//初始化先显示5页
		showPages: function(num,count){
			this.$list.find('tr').hide();
			var starCount = (count-1)*num;
			var endCount = count*num-1;
			for(var i=starCount; i<=endCount; i++){
				this.$list.find('tr').eq(i).show();
			}
		},
		
		//点击跳转到某页
		clickToPage: function(num,index){
			var _this = this;
			this.$element.find('.pages a').each(function(){
				$(this).click(function(){
					var index = parseInt($(this).index())+1;
					console.log(index);
					$(this).siblings().removeClass('active');
					$(this).addClass('active');
					_this.showPages(num,index);
				})
			})
		},
		
		//输入跳转到第N页
		goToPage: function(){
			var _this = this;
			var goBtn = this.$element.find('#gotoBtn');
			var countVal = this.$element.find('#gotoVal');
			goBtn.click(function(){
				var count = parseInt(countVal.val());
				var len = $(this).parent().parent().find('.pages a').length;
				var num = $(this).parent().parent().find('#select-item').val();
				console.log(count);
				if(isNaN(count)){
					return false;
				}
				if(count<1||count>len){
					return false;
				}
				_this.$element.find('.pages a').removeClass('active');
				_this.$element.find('.pages a').eq(count-1).addClass('active');
				_this.showPages(num,count);
			})
		},
		
		//每页显示N条
		showNumPage: function(){
			var _this = this;
			var listNum = '';
			var selectItem = this.$element.find('#select-item');
			
			//选择显示N条
			selectItem.change(function(){
				listNum = selectItem.val();
				console.log(listNum);
				
				//重新拼接分页
				var newPageAHtml = '';
				var newCount = Math.ceil(_this.length/listNum);
				for(var i=1; i<=newCount; i++){
					newPageAHtml += '<a href="javascript:;">'+ i +'</a>';
				}
				console.log(newCount);
				//添加到页面
				_this.$element.find('.pages').empty();
				_this.$element.find('.pages').append(newPageAHtml);
				_this.$element.find('.pages a').eq(0).addClass('active');
				
				_this.showPages(listNum,1);
				_this.clickToPage(listNum,1);
			})
		},
		
		//点击上一页  下一页
		nextClickPage: function(){
			var _this = this;
			var count = 0;
			var nextBtn = this.$element.find('a.prevNext');
			nextBtn.each(function(){
				$(this).click(function(){
					var index = $(this).index();
					var len = $(this).parent().parent().find('.pages a').length;
					var listNum = $(this).parent().parent().find('#select-item').val();
					count = $(this).parent().find('.pages a.active').index();
					//上一页
					if(index==0){
						count--;
						if(count<=0){
							count = 0;
						}
						$(this).parent().find('.pages a').removeClass('active');
						$(this).parent().find('.pages a').eq(count).addClass('active');
					}else{//下一页
						count++;
						if(count>=len-1){
							count = len-1;
						}
						$(this).parent().find('.pages a').removeClass('active');
						$(this).parent().find('.pages a').eq(count).addClass('active');
					}
					
					var pageIndex = count+1;
					_this.showPages(listNum,pageIndex);
					_this.clickToPage(listNum,pageIndex);
				})
			})
		}
	},
	
	
	
	//扩展到jQuery
	$.fn.pagesPulgin = function(listId){
		var pagesPulgin = new PagesPulgin(this, listId);
	}
})(jQuery, window, document);
