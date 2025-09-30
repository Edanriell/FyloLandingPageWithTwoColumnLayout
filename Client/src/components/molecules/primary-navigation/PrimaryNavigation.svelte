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

<nav {...restProps} class="relative {classes}">
	<ul class="flex flex-row items-center gap-x-[16rem] desktop:gap-x-[50rem] flex-wrap">
		{@render children()}
	</ul>
</nav>