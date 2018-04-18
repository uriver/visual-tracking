<template>
  <div class="footer">
		<div class="footer-content">
			<a href="" target="_blank">联系我们</a>
			<span>|</span>
			<a href="" target="_blank">招贤纳士</a>
			<span>|</span>
			<a href="" target="_blank">官方论坛</a>
			<span>|</span>
			<a href="" target="_blank">官方微信</a>
		</div>
		<div class="copy">
			&copy; 哈尔滨工业大学（威海）地址：山东省威海市文化西路2号 | 邮编：264209
		</div>
	</div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.footer{
	box-sizing: border-box;
	height: 100px;
	width: 100%;
	background-color: #f5f5f5;
	text-align: center;
}
.footer-content{
	padding-top:30px;
	color: rgb(116, 128, 139);
	font-size: 12px;
}
.footer-content span{
	padding-left: 3px;
	padding-right: 3px;
}
.footer-content a{
	text-decoration: none;
	color: rgb(116, 128, 139);;
}
.footer-content a:hover{
	color:black;
}
.copy{
	margin-top: 8px;
	color: rgb(116, 128, 139);
	font-size: 12px;
}
</style>
