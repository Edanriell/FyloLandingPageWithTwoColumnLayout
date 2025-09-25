<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		description: string;
		link?: string;
		classes?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		description,
		link = "/",
		classes = "",
		children,
		...restProps
	}:Props = $props();
</script>

<a {...restProps} aria-label="{description}" class="w-[30rem] h-[30rem] rounded-full border-[1rem] border-[#fff] text-[#fff] hover:border-[#155EED] hover:text-[#155EED] {classes}" href="{link}">
	<span class="visually-hidden">{description}</span>
	{@render children?.()}
</a>