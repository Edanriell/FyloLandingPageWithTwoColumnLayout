<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import Contact from "./Contact.svelte";

	const { Story } = defineMeta({
		title: "Atoms/Contact",
		component: Contact,
		tags: ["autodocs"],
		parameters: {
			layout: "centered",
		},
		argTypes: {
			type: {
				control: { type: "select" },
				options: ["phone-number", "email-address"],
				description: "The contact type",
			},
			url: {
				control: "text",
				description: "Semantically correct link url",
			},
			description: {
				control: "text",
				description: "Link description",
			},
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

<!-- Email address -->
<Story args={{ type: "email-address", url:"mailto:example@fylo.com", description:"example@fylo.com" }} name="Email Address" />

<!-- Phone number -->
<Story args={{ type: "phone-number", url:"tel:15431234567", description:"Phone: +1-543-123-4567" }} name="Phone Number" />
