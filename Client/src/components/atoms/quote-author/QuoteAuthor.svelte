<script lang="ts">
	interface Props {
		authorImageUrl?: string;
		authorImageAlt?: string;
		authorFullName: string;
		authorJobTitle: string;
		classes?: string;
		[key: string]: unknown;
	}

	let {
		authorImageUrl = "",
		authorImageAlt = "",
		authorFullName,
		authorJobTitle,
		classes = "",
		...restProps
	}: Props = $props();
</script>

<!-- svelte-ignore a11y_figcaption_parent -->
<figcaption {...restProps} class="flex flex-row items-center author {classes}">
	<img alt="{authorImageAlt}" class="rounded-full object-contain author__image" src="{authorImageUrl}">
	<div class="flex flex-col items-start gap-y-[1.8rem] desktop:gap-y-[unset]">
		<strong class="font-[OpenSans]! font-bold! tracking-[0.05em] text-[#07043b] author__full-name">{authorFullName}</strong>
		<small class="font-[OpenSans]! font-normal! leading-[197%] tracking-[0.05em] text-[#07043b] desktop:leading-[187%] author__job-title">{authorJobTitle}</small>
	</div>
</figcaption>

<style lang="less">
	@import "../../../styles/fluid-typography.less";
	@import "../../../styles/fluid-space.less";

	.author {
		.fluid-space-clamp(column-gap, 7.46rem, 8rem);
	}

	.author__image {
		.fluid-space-clamp(width, 24rem, 32rem);
		.fluid-space-clamp(height, 24rem, 32rem);
	}

	.author__full-name {
		.fluid-text-clamp(9rem, 11rem);
	}

	.author__job-title {
		.fluid-text-clamp(6rem, 8rem);
	}
</style>