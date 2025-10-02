<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		groupBy?: number;
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

<nav {...restProps} class="relative flex flex-col gap-y-[50rem] {classes}">
	{@render children()}
</nav>