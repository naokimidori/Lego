$(function () {
	//初始化
	totalNumPrice();
	
	//增加数量
	$(".add").click(function () {
		//找到当前的输入框
		var buyInput=$(this).prev().find(".buyNumber");
		//获取输入框的值
		var buyNum=parseInt(buyInput.val());
		//把值+1赋给输入框
		buyInput.val(buyNum+1);
		
		//找到单价
		var rowPrice=$(this).parent().parent().prev().text();
		
		//找到当前行的小计
		var rowSum=$(this).parent().parent().next();
		
		//重新获取更新后的数量
		buyNum=parseInt(buyInput.val());
		
		//更新小计
		//toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
		rowSum.text((rowPrice*buyNum).toFixed(2));
		
		
		totalNumPrice();
	});
	
	//减少数量
	$(".minus").click(function () {
		//找到当前的输入框
		var buyInput=$(this).next().find(".buyNumber");
		//获取输入框的值
		var buyNum=parseInt(buyInput.val());
		//把值+1赋给输入框
		if(buyNum>1)
		{
		   buyInput.val(buyNum-1);
		}
		
		//找到单价
		var rowPrice=$(this).parent().parent().prev().text();
		
		//找到当前行的小计
		var rowSum=$(this).parent().parent().next();
		
		//重新获取更新后的数量
		buyNum=parseInt(buyInput.val());
		
		//更新小计
		//toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
		rowSum.text((rowPrice*buyNum).toFixed(2));
		
		totalNumPrice();
	});
	
	//阻止默认行为（不让选中+和-）
	$(".minus,.add").mousedown(function () {
		return false;
	});
	
	//全选
	$(".checkAll").click(function () {
		//获取全选的值
		var isChecked=$(this).prop("checked");
		//设置行的选择框
		$(".rowsCheck,.checkAll").prop("checked",isChecked);
		
		totalNumPrice();
	});
	
	//取消单行的时候,调用函数
	$(".rowsCheck").click(function () {
		totalNumPrice();
	});
	
	//获取原来的购买数量
	var oldBuyNumber=0;
	$(".buyNumber").focus(function () {
		oldBuyNumber=$(this).val();
	});
	
	//输入框失去焦点时候,调用函数	
	$(".buyNumber").blur(function () {
		//数量
		var buyNumber=$(this).val();
		
		//验证是否是数字
		//isNaN() 函数用于检查其参数是否是非数字值。 不是数字true  是数字false
		
		if(isNaN(buyNumber))
		{
			//不是数字就报错
			$(this).next().show();
		}
		else
		{
			//是数字才进行以下操作
			if(buyNumber>0)
			{
				//找到单价
				var buyNumberParent=$(this).parent().parent().parent();
				var rowsPrice=buyNumberParent.prev().text();
				
				
				//更新小计
				buyNumberParent.next().text((rowsPrice*parseInt(buyNumber)).toFixed(2));
				
				$(this).next().hide();
				
				totalNumPrice();
			}
			else
			{
				$(this).val(oldBuyNumber);
			}
		}
	});
	
	
	//删除单个行的产品
	$(".delRows").click(function () {
		$(this).parent().parent().remove();
		
		totalNumPrice();
	});
	
	//删除用户选中的商品
	$("#delSelectedProduct").click(function () {
		$(".rowsCheck").each(function () {
			var isChecked=$(this).prop("checked");
			if(isChecked)
			{
				$(this).parent().parent().remove();
				totalNumPrice();
			}
		});
	});
	
	//任何触发一个事件，都要更新已选的商品数量，已选的商品总价
	//已经加入购物车的商品条目数,本来应该在页面初始化就更新,为了提高执行性能
	function totalNumPrice() {
		var totalNum=0;
		var totalPrice=0;
		var selectedNum=0;
		//遍历实现累加和
		$(".rowsSumPrice").each(function () {
			//总数量累加
			totalNum++;
			
			//已选中的商品数量和累加总价要判断是否选中
			var isChecked=$(this).parent().find(".rowsCheck").prop("checked");
			if(isChecked)
			{
				//单行小计的价格
				var rowsSumPrice=parseFloat($(this).text());
				
				//累加总价
				totalPrice+=rowsSumPrice;
				
				//找到当前行的数量
				var buyNum=parseInt($(this).prev().find(".buyNumber").val());
				
				//已选中的商品数量
				selectedNum+=buyNum;
			}
		});
		
		//遍历结束后把 总价\总数量\选中的数量 更新
		$("#cartTotalNum").text(totalNum);
		$("#selectedNum").text(selectedNum);
		$("#totalPrice").text(totalPrice.toFixed(2));
	}
});