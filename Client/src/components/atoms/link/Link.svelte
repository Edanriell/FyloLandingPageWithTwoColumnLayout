<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		url?: string;
		classes?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		url = "#",
		children,
		classes = "",
		...restProps
	}: Props = $props();
</script>

<a {...restProps} class="font-[var(--second-family)] font-semibold text-[12rem] desktop:text-[16rem] {classes}" href="{url}">
	{@render children?.()}
</a>