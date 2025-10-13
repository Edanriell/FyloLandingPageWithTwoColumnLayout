<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import {Link} from "@atoms";

	import PrimaryNavigation from "./PrimaryNavigation.svelte";
	import PrimaryNavigationItem from "./PrimaryNavigationItem.svelte";

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

<Story name="Primary navigation" >
	<PrimaryNavigationItem>
		<Link classes="text-[#444E86] hover:text-[#444E86]" url="#">Features</Link>
	</PrimaryNavigationItem>
	<PrimaryNavigationItem>
		<Link classes="text-[#444E86] hover:text-[#444E86]" url="#">Team</Link>
	</PrimaryNavigationItem>
	<PrimaryNavigationItem>
		<Link classes="text-[#444E86] hover:text-[#444E86]" url="#">Sign In</Link>
	</PrimaryNavigationItem>
</Story>