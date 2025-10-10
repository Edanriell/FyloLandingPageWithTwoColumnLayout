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

<h1 {...restProps} class="font-[Raleway] text-[#0b0733] text-center font-extrabold leading-[110%] text-[32rem] desktop:text-[38rem] desktop:leading-[150%] {classes}">
	{@render children?.()}
</h1>