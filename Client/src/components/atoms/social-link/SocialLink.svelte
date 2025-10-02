<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		description: string;
		url?: string;
		classes?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		description,
		url = "/",
		classes = "",
		children,
		...restProps
	}:Props = $props();
</script>

<a {...restProps} aria-label="{description}" class="flex items-center justify-center w-[30rem] h-[30rem] rounded-full border-[1rem] border-[#fff] text-[#fff] hover:border-[#6f9bfa] hover:text-[#6f9bfa] {classes}" href="{url}">
	<span class="visually-hidden">{description}</span>
	{@render children?.()}
</a>