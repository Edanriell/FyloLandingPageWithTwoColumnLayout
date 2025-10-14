<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		type?: "button" | "submit" | "reset";
		classes?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		type = "button",
		children,
		classes = "",
		...restProps
	}: Props = $props();
</script>

<button {...restProps} class="font-[Raleway]! font-bold! rounded-[3rem] shadow-[2rem_3rem_6rem_0_rgba(0,0,0,0.16)] text-[inherit]! w-full! h-[100%]! cursor-pointer {classes}" type="{type}">
	{@render children?.()}
</button>