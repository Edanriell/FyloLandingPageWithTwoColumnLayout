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
			link: {
				control: "text",
				description: "The URL the link should navigate to",
			},
			children: {
				control: "text",
				description: "Slot content for the link",
			},
		},
		args: {
			link: "#"
		},
	});
</script>

<Story name="Default">Default Link</Story>

<Story args={{ link: 'https://example.com' }} name="WithCustomUrl">
	Visit Example.com
</Story>

<Story args={{ link: '/about' }} name="InternalLink">
	About Us
</Story>

<Story args={{ link: '#' }} name="LongText">
	This is a very long link text that demonstrates how the component handles longer content
</Story>

<Story args={{ link: '#' }} name="ShortText">
	Go
</Story>

<Story name="EmptyHref">
	Default Anchor Link
</Story>
