<script lang="ts">
	import {SecondaryHeading, Text} from "@atoms";
	import {EmailSignup} from "@molecules";

	interface Props {
		classes?: string;
		[key: string]: unknown;
	}

	let {
		classes = "",
		...restProps
	}: Props = $props();
</script>

<section {...restProps} class="bg-[#575988] access desktop:grid desktop:grid-cols-[1.1fr_1fr] desktop:gap-x-[227rem] {classes}">
	<div class="flex flex-col items-center gap-y-[16rem] mb-[24rem]! desktop:items-start desktop:gap-y-[17rem] desktop:mb-[unset]!">
		<SecondaryHeading classes="text-[#fff]! leading-[133%]! desktop:leading-[150%]! access__heading">Get early access today</SecondaryHeading>
		<Text classes="pr-[unset]! leading-[150%]! text-[#fff]! desktop:tracking-[0.03em]! desktop:text-left! access__text">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</Text>
	</div>
	<EmailSignup
		buttonPlaceholder="Get Started For Free"
		classes="leading-[initial]! text-white ml-[18rem]! mr-[18rem]! grid grid-rows-[32rem_32rem] grid-cols-1 gap-y-[8rem] desktop:ml-[unset]! desktop:mr-[unset]! desktop:grid-rows-[48rem_48rem] desktop:gap-y-[16rem] desktop:grid-cols-[200rem_1fr] access__email-signup-form desktop:mt-[12rem]!"
		inputClasses="placeholder:text-[10rem]! pl-[8rem]! pr-[8rem]! pt-[10rem]! pb-[10rem]! desktop:col-span-2 desktop:placeholder:text-[12rem]! desktop:pt-[16rem]! desktop:pb-[18rem]! desktop:pl-[22rem]! desktop:pr-[22rem]! access__email-signup-form__input"
		inputPlaceholder="email@example.com"
	/>
</section>

<style lang="less">
	@import "../../../styles/fluid-space.less";
	@import "../../../styles/fluid-typography.less";

	.access {
		.fluid-space-clamp(padding-top, 54rem, 100rem);
		.fluid-space-clamp(padding-bottom, 71rem, 85rem);
		.fluid-space-clamp(padding-left, 48rem, 80rem);
		.fluid-space-clamp(padding-right, 47rem, 120rem);
	}
</style>