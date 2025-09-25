<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import {Link} from "../../atoms/link";

	import SecondaryNavigation from "./SecondaryNavigation.svelte";

	const { Story } = defineMeta({
		title: "Molecules/SecondaryNavigation",
		component: SecondaryNavigation,
		tags: ["autodocs"],
		parameters: {
			layout: "centered",
		},
		argTypes: {
			groupBy: {
				control: "number",
				description: "Split navigation elements evenly by number"
			},
			classes: {
				control: "text",
				description: "Additional CSS classes",
			},
		},
		args: {
			groupBy: 4,
			classes: ""
		},
	});
</script>

<!-- Secondary navigation -->
<Story name="Secondary navigation" >
	<Link textColor="#FFF" textHoverColor="#155EED" url="#">About Us</Link>,
	<Link textColor="#FFF" textHoverColor="#155EED" url="#">Jobs</Link>,
	<Link textColor="#FFF" textHoverColor="#155EED" url="#">Press</Link>
	<Link textColor="#FFF" textHoverColor="#155EED" url="#">Blog</Link>
	<Link textColor="#FFF" textHoverColor="#155EED" url="#">Contact Us</Link>
	<Link textColor="#FFF" textHoverColor="#155EED" url="#">Terms</Link>
	<Link textColor="#FFF" textHoverColor="#155EED" url="#">Privacy</Link>
</Story>