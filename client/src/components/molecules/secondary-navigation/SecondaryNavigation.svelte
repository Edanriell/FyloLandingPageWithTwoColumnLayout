<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		groupBy?: number;
		children: Snippet;
		classes?: string;
		[key: string]: unknown;
	}

	const {
		groupBy = 4,
		children,
		classes = "",
		...restProps
	}: Props = $props();

	function getChildren() {
		const child = children?.();
		return Array.isArray(child) ? child : [child];
	}

	function splitChildren<T>(array: T[], size: number): T[][] {
		const result: T[][] = [];
		for (let i = 0; i < array.length; i += size) {
			result.push(array.slice(i, i + size));
		}
		return result;
	}
</script>

<nav {...restProps} class="relative {classes}">
	{#each splitChildren(getChildren(), groupBy) as childrenGroup, groupIndex (groupIndex)}
		<ul class="flex flex-col items-center gap-y-[20rem] flex-wrap desktop:gap-x-[50rem]">
			{#each childrenGroup as child, childIndex (childIndex)}
				<li>{child}</li>
			{/each}
		</ul>
	{/each}
</nav>