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

<ul {...restProps} class="flex flex-col items-center gap-y-[20rem] flex-wrap desktop:gap-x-[50rem] {classes}">
	{@render children()}
</ul>