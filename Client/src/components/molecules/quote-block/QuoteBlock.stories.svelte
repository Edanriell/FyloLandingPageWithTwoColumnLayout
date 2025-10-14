<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import QuoteBlock from "./QuoteBlock.svelte";

	const { Story } = defineMeta({
		title: "Molecules/QuoteBlock",
		component: QuoteBlock,
		tags: ["autodocs"],
		parameters: {
			layout: "centered",
		},
		argTypes: {
			classes: {
				control: "text",
				description: "Additional CSS classes",
			},
		},
		args: {
			classes: "",
		},
	});
</script>

<Story name="Quote Block">
	<Quote />
	<QuoteAuthor />
</Story>