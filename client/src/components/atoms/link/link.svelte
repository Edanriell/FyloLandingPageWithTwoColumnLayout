<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		link?: string;
		textColor?: string;
		textHoverColor?: string;
		classes?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		link = "#",
		textColor = "#575989",
		textHoverColor = "#575989",
		children,
		classes = "",
		...restProps
	}: Props = $props();
</script>

<a {...restProps} class="font-[var(--second-family)] font-semibold text-[12rem] text-[{textColor}] hover:text-[{textHoverColor}] desktop:text-[16rem] {classes}" href="{link}">
	{@render children?.()}
</a>