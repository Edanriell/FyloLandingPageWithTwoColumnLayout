<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import Footer from "./Footer.svelte";

	const { Story } = defineMeta({
		title: "Organisms/Footer",
		component: Footer,
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

<Story name="Footer" />