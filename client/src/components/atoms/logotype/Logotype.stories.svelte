<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import Logotype from "./Logotype.svelte";

	const { Story } = defineMeta({
		title: "Atoms/Logotype",
		component: Logotype,
		tags: ["autodocs"],
		parameters: {
			layout: "centered",
		},
		argTypes: {
			colorScheme: {
				control: "text",
				description: "Logotype color scheme. Values 'Light' and 'Dark' are only accepted",
			},
		},
		args: {
			colorScheme: "Light"
		},
	});
</script>

<!-- Light logotype -->
<Story args={{ colorScheme: "Light" }} name="Light logotype" />

<!-- Dark logotype -->
<Story args={{ colorScheme: "Dark" }} name="Dark logotype" />