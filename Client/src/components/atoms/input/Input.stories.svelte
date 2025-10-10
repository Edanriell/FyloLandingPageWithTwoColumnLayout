<script lang="ts" module>
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import Input from "./Input.svelte"

	const { Story } = defineMeta({
		title: "Atoms/Input",
		component: Input,
		tags: ["autodocs"],
		parameters: {
			layout: "centered",
		},
		argTypes: {
			type: {
				control: "select",
				options: [
					"text", "search", "email", "password", "tel", "url",
					"number", "date", "time", "week", "month", "color",
					"checkbox", "radio", "file", "hidden", "image",
					"range", "reset", "submit", "button", "datetime-local"
				],
				description: "Input type",
			},
			placeholder: {
				control: "text",
				description: "Placeholder text",
			},
			name: {
				control: "text",
				description: "Name attribute",
			},
			id: {
				control: "text",
				description: "ID attribute (also used for label)",
			},
			classes: {
				control: "text",
				description: "Additional CSS classes",
			},
		},
		args: {
			type: "text",
			placeholder: "Enter text",
			name: "example",
			id: "example-input",
			classes: "",
		},
	});
</script>

<Story name="Default" />

<Story args={{ type: "email", placeholder: "Enter your email", name: "email", id: "email-input" }} name="Email" />

<Story args={{ type: "password", placeholder: "Enter your password", name: "password", id: "password-input" }} name="Password" />

<Story args={{ type: "search", placeholder: "Search...", name: "search", id: "search-input" }} name="Search" />

<Story args={{ type: "number", placeholder: "0", name: "quantity", id: "number-input" }} name="Number" />

<Story args={{ borderColor: "#2d67f3", borderWidth: 3, placeholder: "Custom border", id: "custom-border" }} name="Custom Border" />

<Story args={{ classes: "bg-gray-100", placeholder: "With background", id: "with-bg" }} name="With Extra Classes" />
 