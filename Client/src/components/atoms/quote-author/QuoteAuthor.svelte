<script lang="ts">
	interface Props {
		authorImageUrl?: string;
		authorFullName: string;
		authorJobTitle: string;
		classes?: string;
		[key: string]: unknown;
	}

	let {
		authorImageUrl = "",
		authorFullName,
		authorJobTitle,
		classes = "",
		...restProps
	}: Props = $props();
</script>

<figcaption {...restProps} class="flex flex-row items-center gap-x-[7.46rem] {classes}">
	<img alt="Portrait of Kyle Burton, Founder & CEO of Huddle" class="rounded-full object-contain w-[24rem] h-[24rem] desktop:w-[32rem] desktop:h-[32rem]" src="{authorImageUrl}">
	<div class="flex flex-col items-start gap-y-[1.8rem] desktop:gap-y-[8rem] desktop:gap-y-[unset]">
		<strong class="font-[OpenSans]! font-bold! text-[9rem]! tracking-[0.05em] text-[#07043b] desktop:text-[11rem]!">{authorFullName}</strong>
		<small class="font-[OpenSans]! font-normal! text-[6rem]! leading-[197%] tracking-[0.05em] text-[#07043b] desktop:text-[8rem]! desktop:leading-[187%]">{authorJobTitle}</small>
	</div>
</figcaption>