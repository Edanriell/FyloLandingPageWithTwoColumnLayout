<script lang="ts">
	import type {PageData} from "../../../../.svelte-kit/types/src/routes/$types";

	import {HeroIllustration, PrimaryHeading, Text} from "@atoms";
	import {EmailSignup} from "@molecules";

	interface Props {
		data: PageData;
		classes?: string;
		[key: string]: unknown;
	}

	let {
		data,
		classes = "",
		...restProps 
	}: Props = $props();
</script>

<section {...restProps} class="hero flex flex-col-reverse items-center desktop:flex-row {classes}">
	<div class="relative desktop:basis-[50%]">
		<PrimaryHeading classes="mb-[24rem]! desktop:text-left desktop:text-wrap! desktop:mb-[15rem]!">All your files in one secure location, accessible anywhere.</PrimaryHeading>
		<Text classes="mb-[32rem]! desktop:text-left desktop:mb-[25rem]!">Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</Text>
		<EmailSignup classes="text-white grid grid-rows-[40rem_40rem] grid-cols-1 gap-y-[16rem] text-[14rem]! desktop:grid-rows-[45rem] desktop:grid-cols-[0.77fr_200rem] desktop:gap-x-[16rem]" data={data} inputClasses="border-[0.62rem] border-[#07043b] shadow-[2rem_3rem_6rem_0_rgba(0,0,0,0.16)]" />
	</div>
	<div class="desktop:basis-[50%]">
		<HeroIllustration classes="mb-[40rem]!" />
	</div>
</section>

<style lang="less">
	@import "../../../styles/fluid-space.less";
 
	.hero {
		.fluid-space-clamp(padding-top, 74rem, 21rem);
		.fluid-space-clamp(padding-bottom, 90rem, 164rem);
		.fluid-space-clamp(margin-left, 28rem, 80rem);
		.fluid-space-clamp(margin-right, 27rem, 80rem);
	}
</style>