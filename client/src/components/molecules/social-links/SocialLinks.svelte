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

	function getChildren() {
		const child = children?.();
		return Array.isArray(child) ? child : [child];
	}
</script>

<ul {...restProps} class=" {classes}">
	{#each getChildren() as child, socialLinkIndex (socialLinkIndex)}
		<li>{child}</li>
	{/each}
</ul>