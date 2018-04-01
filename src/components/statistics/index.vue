<template>
  <el-row class="sta-container">
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				<div @click="$router.push('/')">{{collapsed?'':logo}}</div>
			</el-col>
			<el-col :span="14">
				<div class="tools" @click="collapse">
					<i class="menu-icon el-icon-menu "></i>
				</div>
			</el-col>
		</el-col>

		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!-- 导航菜单——折叠前 -->
				<el-menu background-color="#545c64" 
					text-color="#fff"
      		active-text-color="#ffd04b" 
					:default-active="$router.path" 
					class="el-menu" 
					v-show="!collapsed" 
					router>
					<el-menu-item index='/statistics/overview'>
						<i class="el-icon-document"></i> 
						<span>概览</span> 
					</el-menu-item>
					<el-menu-item index='/statistics/event'>
						<i class="el-icon-share"></i> 
						<span>事件</span> 
					</el-menu-item>
					<el-menu-item index='/statistics/user'>
						<i class="el-icon-edit"></i> 
						<span>用户</span> 
					</el-menu-item>
				</el-menu>

				<!-- 导航菜单——折叠后 -->
				<ul class="el-menu collapsed" v-show="collapsed" background-color="#545c64">
					<li class="el-submenu__title" @click="$router.push('/statistics/overview')"><i class="el-icon-document"></i></li>
					<li class="el-submenu__title" @click="$router.push('/statistics/event')"><i class="el-icon-share"></i></li>
					<li class="el-submenu__title" @click="$router.push('/statistics/user')"><i class="el-icon-edit"></i></li>
				</ul>
			</aside>

			<section class="content-container">
				<el-col :span="24" class="content-wrapper">
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
				</el-col>
			</section>
		</el-col>

	</el-row>
</template>

<script>

export default {
	data() {
		return {
			logo: 'SHALLOWNIGHT',
			collapsed: false 
		}
	},
	methods: {
		collapse: function() {
			this.collapsed = !this.collapsed;
		}
	}
}
</script>

<style scoped>
	el-menu-item {
		width: 100%;
	}
	.sta-container {
		width: 100%;
		position: absolute;
		top: 0px;
		bottom: 0px;
	}
	.header{
		height: 50px;
		background-color: rgba(0,0,0,0.8);
	}
	.logo{
		cursor: pointer;
		height:50px;
		line-height: 50px;
		font-size: 22px;
		color:white;
		padding-left:20px;
		padding-right:20px;
		border-color: rgba(238,241,146,0.3);
		border-right-width: 1px;
		border-right-style: solid;
	}
	.logo-width{
		width: 230px;
	}
	.logo-collapse-width{
		width: 60px;
	}
	.menu-icon{
		margin-left: 20px;
		margin-top: 16px;
		cursor: pointer;
	}
	.main{
		display: flex;
		position: absolute;
		top: 50px;
		bottom: 0px;
		overflow: hidden;
	}
	.el-menu{
		height: 100%;
		width: 230px;
	}
	.menu-collapsed{
		flex:0 0 60px;
		width: 60px;
	}
	.menu-expanded{
		flex:0 0 230px;
		width: 230px;
	}
	.collapsed{
		width: 60px;
	}
	.content-container{
		flex:1;
		overflow-y: scroll;
		padding: 20px;
	}
	.content-wrapper {
		box-sizing: border-box;
	}
</style>
