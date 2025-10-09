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

<h1 {...restProps} class="font-[var(--second-family)] font-bold text-[#0b0733] text-center font-extrabold text-[32rem] desktop:text-[38rem] {classes}">
	{@render children?.()}
</h1>