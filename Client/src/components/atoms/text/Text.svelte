<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		classes?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		children,
		classes = "",
		...restProps
	}: Props = $props();
</script>

<p {...restProps} class="font-[OpenSans] font-normal text-[#07043b] text-center text-[14rem] leading-[150%] desktop:text-[17rem] desktop:leading-[141%] desktop:tracking-[0.03em] pl-[unset] pr-[30rem] {classes}">
	{@render children?.()}
</p> 