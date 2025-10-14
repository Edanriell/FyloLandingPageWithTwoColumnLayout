<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		children: Snippet;
		classes?: string;
		[key: string]: unknown;
	}

	const {
		children,
		classes = "",
		...restProps
	}: Props = $props();
</script>
 
<figure {...restProps} class="rounded-[4rem] shadow-[0_0_8rem_4rem_rgba(56,56,56,0.05)] bg-[#FFF] pt-[18.62rem] pr-[12.74rem] pb-[18.62rem] pl-[25.96rem] desktop:pt-[26rem] desktop:pr-[34rem] desktop:pb-[26rem] desktop:pl-[33rem] desktop:rounded-[5rem] desktop:shadow-[0_0_10rem_5rem_rgba(56,56,56,0.05)] {classes}">
	{@render children?.()}
</figure>