<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import PrimaryHeading from "./PrimaryHeading.svelte";

	const { Story } = defineMeta({
		title: "Atoms/PrimaryHeading",
		component: PrimaryHeading,
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

<Story name="Primary heading">Primary heading</Story>