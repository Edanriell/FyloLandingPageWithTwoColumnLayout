<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		type?: "button" | "submit" | "reset";
		bgColor?: string;
		bgHoverColor?: string;
		classes?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		type = "button",
		bgColor = "#2d67f3",
		bgHoverColor = "#6f9bfa",
		children,
		classes = "",
		...restProps
	}: Props = $props();
</script>

<button {...restProps} class="font-[var(--second-family)] font-bold text-white rounded-[3rem] shadow-[1rem_1rem_10rem_1rem_rgba(128,128,128,0.329)] bg-[{bgColor}] text-[12rem] w-full max-h-[38rem] hover:bg-[{bgHoverColor}] desktop:text-[14rem] desktop:max-h-[42rem] {classes}" type="{type}">
	{@render children?.()}
</button>