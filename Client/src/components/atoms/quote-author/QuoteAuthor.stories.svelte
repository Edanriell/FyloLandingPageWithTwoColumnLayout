<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import QuoteAuthor from "./QuoteAuthor.svelte";

	const { Story } = defineMeta({
		title: "Atoms/QuoteAuthor",
		component: QuoteAuthor,
		tags: ["autodocs"],
		parameters: {
			layout: "centered",
		},
		argTypes: {
			authorImageUrl: {
				control: "text",
				description: "Quote author image url address"
			},
			authorFullName: {
				control: "text",
				description: "Quote author full name"
			},
			authorJobTitle: {
				control: "text",
				description: "Quote author current job title"
			},
			classes: {
				control: "text",
				description: "Additional CSS classes"
			},
		},
		args: {
			classes: "",
		},
	});
</script>

<Story args={{authorImageUrl:"", authorFullName:"Kyle Burton", authorJobTitle:"Founder & CEO, Huddle"}} name="Quote Author" />