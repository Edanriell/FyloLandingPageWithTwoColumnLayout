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

<address {...restProps} class="{classes}">
	<dl class="flex flex-col gap-y-[16rem] desktop:gap-y-[15rem]">
		{@render children?.()}
	</dl>
</address>