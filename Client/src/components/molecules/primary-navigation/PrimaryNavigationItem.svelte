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

<li {...restProps} class=" {classes}">
	{@render children()}
</li>