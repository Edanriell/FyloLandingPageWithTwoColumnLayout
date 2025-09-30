<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import Header from "./Header.svelte";

	const { Story } = defineMeta({
		title: "Organisms/Header",
		component: Header,
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

<!-- Header -->
<Story name="Header" />