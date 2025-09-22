<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		link?: string;
		children?: Snippet
	}

	let {link = "#", children}: Props = $props();
</script>

<a class="font-[var(--second-family)] font-semibold text-[12rem] text-[hsl(238, 22%, 44%)] desktop:text-[16rem]" href="{link}">
	{@render children?.()}
</a>