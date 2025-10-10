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

<a {...restProps} aria-label="{description}" class="flex items-center justify-center w-[28rem] h-[28rem] rounded-full border-[1rem] border-[#fff] text-[#fff] hover:border-[#6c9bff] hover:text-[#6c9bff] desktop:w-[32rem] desktop:h-[32rem] {classes}" href="{url}">
	<span class="visually-hidden">{description}</span>
	{@render children?.()}
</a>