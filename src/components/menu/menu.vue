<template>
	<section class="menu-sec1">
		<div class="btn_payVip">
			<img src="./freeHead_03.png" class="img-logo" alt="">
			<span class="btn-text">开通VIP，免费看此漫画</span>
		</div>
		<div class="info-layBox">
			<span class="info-time">{{menu.time}}</span>
			<span class="info-time">更新到{{menu.part}}话</span>
		</div>
	</section>
	<div class="list-box">
		<ul class="list">
			<li class="lis" v-for="list in menu.partData">
				<a class="lia">{{list}}</a>
			</li>
			<a class="list-btn">大人，查看更多目录</a>
		</ul>
	</div>
	<!--推荐作品-->
	<section class="mod-recom">
		<h2>骚年们都在看</h2>
		<ul class="re-item" id="re-item">
			<li class="re-item-li" v-cloak v-for="value in menu.item">
				<div class="img-cov">
					<img :src="value.pic" class="r-img" alt="">
					<!--把图片放在static中 在json中使用绝对路径 避免static中自动生成随机码 可直接拿到正确的路径-->
				</div>
				<div class="img-cont">
					<strong class="cont-title">{{value.title}}</strong>
					<small class="cont-con">{{value.con}}</small>
				</div>
			</li>
		</ul> 
	</section>
	<!--底部-->
	<footer class="footer">
		<div class="footer-box">
			<div class="left-box">
				<a class="foot-btn"></a>
				<a class="foot-btn"></a>
				<a class="foot-btn"></a>
			</div>
			<a class="btn-ok">开始阅读</a>
		</div>
	</footer>
</template>

<script>
export default {
	props:{
			head:{
				type:Object
			}
		},
		data(){
			return {
				menu:{}
			}
		},
		created(){
			this.$http.get('/api/menu').then((response)=>{
					response = response.body;
					if(response.errno==0){
					this.menu = response.data;
					}
				});
		}
}
</script>

<style lang="less">
	.menu-sec1{
		margin-left: 4%;
		margin-right: 4%;
		.btn_payVip{
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			align-items: center;
			padding-top: 0.75rem;
			.img-logo{
				display: block;
				width: 1.875rem;
				height: 1.5rem;
			}
			.btn-text{
				display: block;
				height: 1.25rem;
				line-height: 1.25rem;
				background-color: #C5C5C5;
				color:#fff;
				font-size: 0.7rem;
				padding-left: 0.5rem;
				padding-right: 0.5rem;
				margin-left: 0.5rem;
			}
		}
		.info-layBox{
			padding-top: 1rem;
			.info-time{
				color: #C5C5C5;
				font-size:0.6rem;
			}
		}
	}
	//集数开始
	.list-box{
		margin-top: 0.4rem;
		.list{
			display: -webkit-flex;
			display: -moz-flex;
			display: -ms-flex;
			display: -o-flex;
			display: flex;
			justify-content: space-around;
			flex-flow: row wrap;
			.lis{
				display: block;
				width: 28%;
				height:2.25rem;
				margin-bottom: 0.7rem;
				.lia{
					height:2.25rem;
					line-height: 2.25rem;
					display: block;
					font-size: 0.8rem;
					text-align: center;
					background: #fff;
					border: 1px solid #C5C5C5;
					border-radius: 2px;
					color:#535253;
				}
			}
			.list-btn{
				width: 92%;
				height:2.25rem;
				line-height: 2.25rem;
				display: block;
				font-size: 0.8rem;
				text-align: center;
				background: #fff;
				border: 1px solid #C5C5C5;
				border-radius: 2px;
				color:#535253;
			}
		}
	}
	//集数结束

	//推荐作品开始
	.mod-recom{
		padding-top: 0.75rem;
		padding-bottom:4rem;
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		h2{
			font-size: 0.7rem;
			color: #969696;
			padding-bottom: 0.75rem;
			line-height: 100%;
			font-weight: normal;
			padding-left: 0.75rem;
			box-sizing: border-box;
		}
		.re-item{
			width: 100%;
			overflow: hidden;
			display: flex;
			flex-flow:row wrap;
			justify-content:space-around;
			margin-top: -0.75rem;
			.re-item-li{
				width: 28%;
				margin-top:0.75rem;
				overflow: hidden;
				background-color:#fff;
				.img-cov{
					padding-bottom:140%;
					width: 100%;
					position: relative;
					.r-img{
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: auto;
						display: block;
					}
					.vip-logo{
						position: absolute;
						width: 1.6rem;
						height: 1.6rem;
						background:url("./viplogp.png")no-repeat;
						background-size: 1.6rem 1.6rem;
						right: 0;
						top: 0;
					}
				}

				.img-cont{
					.cont-title{
						display: block;
						font-size:0.7rem;
						color:#535252;
						text-align:center;
						white-space:nowrap;
						text-overflow:ellipsis;
						margin-top: 0.1rem;
						//overflow: hidden;
					}
					.cont-con{
						display: block;
						margin-bottom: 0.375rem;
						font-size: 0.6rem;
						color: #969696;
						white-space:nowrap;
						text-overflow:ellipsis;
						overflow: hidden;
						text-align: center;
					}
				}
			}
		}
	}
	//推荐作品结束

</style>
