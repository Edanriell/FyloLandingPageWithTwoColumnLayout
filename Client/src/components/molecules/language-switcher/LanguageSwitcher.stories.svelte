<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import LanguageSwitcher from "./LanguageSwitcher.svelte";

	const { Story } = defineMeta({
		title: "Molecules/LanguageSwitcher",
		component: LanguageSwitcher,
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
 
<Story name="Language Switcher" />