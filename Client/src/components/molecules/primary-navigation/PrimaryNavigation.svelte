<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		children: Snippet;
		classes?: string;
		[key: string]: unknown;
	}

	const {
		children,
		classes = "",
		...restProps
	}: Props = $props();
</script>

<nav {...restProps} class="relative {classes}">
	<ul class="primary-navigation flex flex-row items-center flex-wrap">
		{@render children()}
	</ul>
</nav>

<style lang="less">
	@import "../../../styles/fluid-space.less";

	.primary-navigation {
		.fluid-space-clamp(column-gap, 24rem, 57rem);
	}
</style>