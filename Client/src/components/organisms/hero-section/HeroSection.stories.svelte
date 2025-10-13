<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import HeroSection from "./HeroSection.svelte";

	const { Story } = defineMeta({
		title: "Organisms/HeroSection",
		component: HeroSection,
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

<Story name="Hero Section" />