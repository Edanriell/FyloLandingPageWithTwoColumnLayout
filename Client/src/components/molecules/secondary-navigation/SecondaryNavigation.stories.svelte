<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import {Link} from "@atoms/link";

	import SecondaryNavigation from "./SecondaryNavigation.svelte";
	import SecondaryNavigationGroup from "./SecondaryNavigationGroup.svelte";
	import SecondaryNavigationItem from "./SecondaryNavigationItem.svelte";

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
	<SecondaryNavigationGroup>
		<SecondaryNavigationItem>
			<Link textColor="#FFF" textHoverColor="#155EED" url="#">About Us</Link>
		</SecondaryNavigationItem>
		<SecondaryNavigationItem>
			<Link textColor="#FFF" textHoverColor="#155EED" url="#">Jobs</Link>
		</SecondaryNavigationItem>
		<SecondaryNavigationItem>
			<Link textColor="#FFF" textHoverColor="#155EED" url="#">Press</Link>
		</SecondaryNavigationItem>
		<SecondaryNavigationItem>
			<Link textColor="#FFF" textHoverColor="#155EED" url="#">Blog</Link>
		</SecondaryNavigationItem>
	</SecondaryNavigationGroup>
	<SecondaryNavigationGroup>
		<SecondaryNavigationItem>
			<Link textColor="#FFF" textHoverColor="#155EED" url="#">Contact Us</Link>
		</SecondaryNavigationItem>
		<SecondaryNavigationItem>
			<Link textColor="#FFF" textHoverColor="#155EED" url="#">Terms</Link>
		</SecondaryNavigationItem>
		<SecondaryNavigationItem>
			<Link textColor="#FFF" textHoverColor="#155EED" url="#">Privacy</Link>
		</SecondaryNavigationItem>
	</SecondaryNavigationGroup>
</Story>