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

<button {...restProps} class="font-[Raleway]! font-bold! text-white rounded-[3rem] shadow-[1rem_1rem_10rem_1rem_rgba(128,128,128,0.329)] text-[13.3rem]! w-full! h-[100%]! cursor-pointer desktop:text-[14rem]! {classes}" type="{type}">
	{@render children?.()}
</button>