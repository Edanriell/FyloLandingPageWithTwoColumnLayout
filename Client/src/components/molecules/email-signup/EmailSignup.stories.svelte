<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import EmailSignup from "./EmailSignup.svelte";

	const { Story } = defineMeta({
		title: "Molecules/EmailSignup",
		component: EmailSignup,
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

<Story name="Email Signup Form" />