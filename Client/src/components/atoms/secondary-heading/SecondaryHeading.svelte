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

<h2 {...restProps} class="font-[Raleway] text-[#07043b] text-center font-bold leading-[150%] text-[16rem] text-pretty! desktop:text-[40rem] desktop:leading-none {classes}">
	{@render children?.()}
</h2>