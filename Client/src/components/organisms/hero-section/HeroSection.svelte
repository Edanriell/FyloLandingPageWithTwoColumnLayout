<script lang="ts">
	import {HeroIllustration} from "@atoms/hero-illustration";
	import {PrimaryHeading} from "@atoms/primary-heading";
	import {Text} from "@atoms/text";
	import {EmailSignup} from "@molecules";
</script>

<section class="flex flex-col-reverse items-center pt-[50rem] pb-[150rem] ml-[20rem]! mr-[20rem]! desktop:flex-row desktop:pt-[unset] desktop:mr-[50rem]! desktop:ml-[50rem]! desktop:gap-[50rem]">
	<div class="relative desktop:basis-[50%] desktop:pl-[40rem]!">
		<PrimaryHeading classes="mb-[38rem]! desktop:text-left desktop:pr-[20rem]! desktop:text-wrap!">All your files in one secure location, accessible anywhere.</PrimaryHeading>
		<Text classes="mb-[40rem]! desktop:text-left desktop:mb-[20rem]! desktop:pr-[10rem]!">Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</Text>
		<EmailSignup classes="grid grid-rows-[43rem] grid-cols-1 gap-y-[10rem] desktop:grid-cols-[1fr_220rem] desktop:gap-x-[20rem] desktop:mr-[50rem]!" inputClasses="border-[2rem] border-[rgba(128,128,128,0.651)]" />
	</div>
	<div class="desktop:basis-[50%]">
		<HeroIllustration classes="mb-[18rem]!" />
	</div>
</section>