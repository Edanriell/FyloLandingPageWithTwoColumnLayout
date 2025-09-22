<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import Button from "./Button.svelte";

	const { Story } = defineMeta({
		title: "Atoms/Button",
		component: Button,
		tags: ["autodocs"],
		parameters: {
			layout: "centered",
		},
		argTypes: {
			type: {
				control: { type: "select" },
				options: ["button", "submit", "reset"],
				description: "The HTML button type",
			},
			bgColor: {
				control: "color",
				description: "Background color of the button",
			},
			bgHoverColor: {
				control: "color",
				description: "Hover background color",
			},
			classes: {
				control: "text",
				description: "Additional CSS classes",
			},
		},
		args: {
			type: "button",
			bgColor: "#2d67f3",
			bgHoverColor: "#6f9bfa",
			classes: "",
		},
	});
</script>

<!-- Default button -->
<Story name="Default">Click Me</Story>

<!-- Submit button -->
<Story args={{ type: "submit" }} name="Submit Button">
	Submit
</Story>

<!-- Reset button -->
<Story args={{ type: "reset" }} name="Reset Button">
	Reset
</Story>

<!-- Custom colors -->
<Story
		args={{ bgColor: "#ff4d4f", bgHoverColor: "#ff7a7a" }}
		name="Custom Red Button"
>
	Delete
</Story>

<!-- With additional classes -->
<Story args={{ classes: "w-[200rem] text-[16rem]" }} name="Custom Width & Font">
	Custom Size
</Story>

<!-- Long text button -->
<Story name="Long Text Button">This is a very long button text</Story>
