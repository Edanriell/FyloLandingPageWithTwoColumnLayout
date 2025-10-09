<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import HeroIllustration from "./HeroIllustration.svelte";

	const { Story } = defineMeta({
		title: "Atoms/HeroIllustration",
		component: HeroIllustration,
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

<!-- HeroIllustration -->
<Story name="HeroIllustration" />