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

<Story name="Secondary navigation" >
	<SecondaryNavigationGroup>
		<SecondaryNavigationItem>
			<Link classes="font-[OpenSans]! text-[#fff] hover:text-[#6c9bff] text-[16rem]!" url="#">About Us</Link>
		</SecondaryNavigationItem>
		<SecondaryNavigationItem>
			<Link classes="font-[OpenSans]! text-[#fff] hover:text-[#6c9bff] text-[16rem]!" url="#">Jobs</Link>
		</SecondaryNavigationItem>
		<SecondaryNavigationItem>
			<Link classes="font-[OpenSans]! text-[#fff] hover:text-[#6c9bff] text-[16rem]!" url="#">Press</Link>
		</SecondaryNavigationItem>
		<SecondaryNavigationItem>
			<Link classes="font-[OpenSans]! text-[#fff] hover:text-[#6c9bff] text-[16rem]!" url="#">Blog</Link>
		</SecondaryNavigationItem>
	</SecondaryNavigationGroup>
	<SecondaryNavigationGroup>
		<SecondaryNavigationItem>
			<Link classes="font-[OpenSans]! text-[#fff] hover:text-[#6c9bff] text-[16rem]!" url="#">Contact Us</Link>
		</SecondaryNavigationItem>
		<SecondaryNavigationItem>
			<Link classes="font-[OpenSans]! text-[#fff] hover:text-[#6c9bff] text-[16rem]!" url="#">Terms</Link>
		</SecondaryNavigationItem>
		<SecondaryNavigationItem>
			<Link classes="font-[OpenSans]! text-[#fff] hover:text-[#6c9bff] text-[16rem]!" url="#">Privacy</Link>
		</SecondaryNavigationItem>
	</SecondaryNavigationGroup>
</Story>