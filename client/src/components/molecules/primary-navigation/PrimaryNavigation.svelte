<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		children: Snippet;
		classes?: string;
		[key: string]: unknown;
	}

	const { children, classes = "", ...restProps }: Props = $props();

	function getChildren() {
		const child = children?.();
		return Array.isArray(child) ? child : [child];
	}
</script>

<nav {...restProps} class="relative {classes}">
	<ul class="flex flex-row items-center gap-x-[16rem] desktop:gap-x-[50rem] flex-wrap">
		{#each getChildren() as child, index (index)}
			<li>{child}</li>
		{/each}
	</ul>
</nav>