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

<h1 {...restProps} class="font-[OpenSans] text-[#07043b] text-center font-bold leading-[150%] text-[24rem] desktop:text-[38rem] desktop:leading-[150%] desktop:font-[Raleway] desktop:text-[40rem] text-pretty! {classes}">
	{@render children?.()}
</h1>