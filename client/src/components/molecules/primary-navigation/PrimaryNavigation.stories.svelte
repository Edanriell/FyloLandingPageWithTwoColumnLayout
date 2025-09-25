<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import {Link} from "../../atoms/link";

	import PrimaryNavigation from "./PrimaryNavigation.svelte";

	const { Story } = defineMeta({
		title: "Molecules/PrimaryNavigation",
		component: PrimaryNavigation,
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

<!-- Primary navigation -->
<Story name="Primary navigation" >
	<Link url="#">Features</Link>,
	<Link url="#">Team</Link>,
	<Link url="#">Sign In</Link>
</Story>
