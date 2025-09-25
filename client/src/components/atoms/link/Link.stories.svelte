<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import Link from "./Link.svelte";

	const { Story } = defineMeta({
		 title: "Atoms/Link",
		 component: Link,
		 tags: ["autodocs"],
		 parameters: {
			 layout: "centered",
		 },
		 argTypes: {
			 url: {
				 control: "text",
				 description: "The URL the link should navigate to",
			 },
			 textColor: {
				 control: "color",
				 description: "Link text color",
			 },
			 textHoverColor: {
				 control: "color",
				 description: "Link text color on hover",
			 },
			 classes: {
				 control: "text",
				 description: "Additional CSS classes",
			 },
		 },
		 args: {
			 url: "#",
			 textColor: "#575989",
			 textHoverColor: "#575989",
			 classes: "",
		 },
	 });
</script>

<!-- Default link -->
<Story name="Default">Default Link</Story>

<!-- Link with custom URL -->
<Story args={{ url: "https://example.com" }} name="External Link">
	Visit Example.com
</Story>

<!-- Internal link -->
<Story args={{ url: "/about" }} name="Internal Link">
	About Us
</Story>

<!-- Custom text colors -->
<Story
		args={{
			textColor: "#2d67f3",
			textHoverColor: "#6f9bfa"
		}}
		name="Custom Colors"
>
	Colored Link
</Story>

<!-- Additional classes -->
<Story args={{ classes: "underline font-bold" }} name="Underlined Bold">
	Underlined Bold Link
</Story>

<!-- Long text -->
<Story name="Long Text">
	This is a very long link text that demonstrates how the component handles longer content
</Story>