<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import AccessSection from "./AccessSection.svelte";

	const { Story } = defineMeta({
	title: "Organisms/AccessSection",
		component: AccessSection,
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

<Story name="Access Section" />