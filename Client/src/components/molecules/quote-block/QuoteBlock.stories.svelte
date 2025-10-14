<script lang="ts">
,

	import {defineMeta} from "@storybook/addon-svelte-csf";

	import {Quote} from "@atoms";

	import QuoteBlock from "./QuoteBlock.svelte";
	import {QuoteAuthor} from "@atoms/quote-author";

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
	<Quote>
		Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
	</Quote>
	<QuoteAuthor authorImageUrl="" authorFullName="Kyle Burton" authorJobTitle="Founder & CEO, Huddle"/>
</Story>