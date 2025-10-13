<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import SecondaryHeading from "./SecondaryHeading.svelte";

	const { Story } = defineMeta({
		title: "Atoms/SecondaryHeading",
		component: SecondaryHeading,
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

<Story name="Secondary Heading">Secondary heading</Story>