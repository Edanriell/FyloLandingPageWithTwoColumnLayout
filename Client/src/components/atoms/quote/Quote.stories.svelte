<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import Quote from "./Quote.svelte";

	const { Story } = defineMeta({
		title: "Atoms/Quote",
		component: Quote,
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

<Story name="Quote">
	Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
</Story>