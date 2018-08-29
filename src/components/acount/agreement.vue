<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<div class="agreementTitle">
			糖果世纪用户服务协议
		</div>
		<p>重要提示： 杭州佳卓网络科技有限公司（以下简称“本公司”）通过旗下运营管理的糖果世纪（以下简称“本网站”）依据本协议的规定向本公司的用户（以下简称“您或用户”）提供信息咨询与管理服务。本协议在您和本公司之间具有合同法上的法律效力。为保障您的合法权益，请您在通过本网站注册成为网站用户时，务必仔细阅读以下条款并完全理解本协议的全部内容，特别是其中所涉及的免除及限制本公司责任的条款，对用户权利限制的条款。请您审慎阅读并选择接受或不接受本协议。 若您一旦注册，即视为您已不加修改地无条件完全接受本协议所包含的内容和本公司通过本网站已经发布的或将来可能发布的各类规则。各类规则为协议不可分割的一部分，与本协议具有同等法律效力。本协议是由您与本公司共同签订的，适用于您在本网站的全部行为。如您不接受本协议的任一条款，请您立即停止注册或主动停止使用本公司的服务。 本公司有权根据法律的规定及业务发展的需要不时地制定、修改本协议或各类规则，如本协议及规则有任何变更，一切变更以本网站最新公布的为准。经修订的协议、规则一经在本网站公布，即自动生效或在该等协议、规则指定的时间生效。您应不时地注意本协议及附属规则地变更，若您不同意相关变更，本公司有权不经任何告知终止、中止本协议或限制您使用本网站的全部或部分功能且不承担任何法律责任，或您主动停止使用本网站的服务。但该终止、中止或限制行为并不能豁免您通过本网站已经进行的交易下所应承担的义务。</p>
	</div>

</template>

<script>
	import HeaderNav from '../base/headerNav'
	export default {
		data() {
			return {
				pageTitle: "注册协议"
			}
		},
		components: {
			HeaderNav,
		},
	}
</script>

<style scoped>
	.agreementTitle {
		width: 100%;
		padding-top: 60px;
		height: 98px;
		font-size: 38px;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 38px;
	}
	
	p {
		width: 100%;
		padding: 0 40px;
		height: auto;
		font-size: 28px;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		line-height: 50px;
		padding-top: 50px;
		text-indent: 56px;
		text-align: left;
		padding-bottom: 50px;
	}
</style>