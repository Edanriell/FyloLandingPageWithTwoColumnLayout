<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import Contacts from "./Contacts.svelte";
	import {Contact} from "@atoms";

	const { Story } = defineMeta({
		title: "Molecules/Contacts",
		component: Contacts,
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

<Story name="Contacts" >
	<Contact description="Phone: +1-543-123-4567" type="phone-number" url="tel:15431234567" />
	<Contact description="example@fylo.com" type="email-address" url="mailto:example@fylo.com" />
</Story>