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

<ul {...restProps} class="flex flex-row items-center gap-x-[10rem] {classes}">
	{@render children?.()}
</ul>