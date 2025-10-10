<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		url?: string;
		classes?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		url = "#",
		children,
		classes = "",
		...restProps
	}: Props = $props();
</script>

<a {...restProps} class="font-[Raleway] font-normal link {classes}" href="{url}">
	{@render children?.()}
</a>

<style lang="less">
	@import "../../../styles/fluid-typography.less";

	.link {
		.fluid-text-clamp(12rem, 16rem);
	}
</style>