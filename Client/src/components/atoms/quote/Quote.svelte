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
 
<blockquote {...restProps} class="font-[OpenSans] font-normal leading-[181%] tracking-[0.04em] text-[#07043b] desktop:leading-[177%] quote {classes}">
	<svg class="w-[10rem] h-[9rem] desktop:w-[13rem] desktop:h-[10rem]" fill="none" viewBox="0 0 13 10" xmlns="http://www.w3.org/2000/svg">
		<path
				d="M0.835 9.725V6.53C0.835 5.69 0.91 4.91 1.06 4.19C1.24 3.47 1.525 2.765 1.915 2.075C2.335 1.355 2.875 0.664999 3.535 0.00499886L5.29 1.31C4.78 1.88 4.375 2.42 4.075 2.93C3.775 3.44 3.565 3.935 3.445 4.415C3.325 4.895 3.265 5.39 3.265 5.9L2.185 5.135H5.425V9.725H0.835ZM8.305 9.725V6.53C8.305 5.69 8.38 4.91 8.53 4.19C8.71 3.47 8.995 2.765 9.385 2.075C9.805 1.355 10.345 0.664999 11.005 0.00499886L12.76 1.31C12.25 1.88 11.845 2.42 11.545 2.93C11.245 3.44 11.035 3.935 10.915 4.415C10.795 4.895 10.735 5.39 10.735 5.9L9.655 5.135H12.895V9.725H8.305Z"
				fill="currentColor"
		/>
	</svg>
	{@render children?.()}
</blockquote>

<style lang="less">
	@import "../../../styles/fluid-typography.less";

	.quote {
		.fluid-text-clamp(10rem, 13rem);
	}
</style>