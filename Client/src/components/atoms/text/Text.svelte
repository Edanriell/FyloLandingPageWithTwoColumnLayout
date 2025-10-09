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

<p {...restProps} class="font-[var(--font-family)] font-medium text-[#0b0733] text-center text-[15rem] desktop:text-[18rem] {classes}">
	{@render children?.()}
</p> 