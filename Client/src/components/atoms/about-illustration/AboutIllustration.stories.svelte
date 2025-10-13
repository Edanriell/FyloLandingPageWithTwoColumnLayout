<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import AboutIllustration from "./AboutIllustration.svelte";

	const { Story } = defineMeta({
		title: "Atoms/AboutIllustration",
		component: AboutIllustration,
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
			classes: ""
		},
	});
</script>

<Story name="About Illustration" />