<script lang="ts">
	import {Link, Logotype} from "../../atoms";
	import {PrimaryNavigation} from "../../molecules";

	interface Props {
		classes?: string;
		[key: string]: unknown;
	}

	let {
		classes = "",
		...restProps
	}: Props = $props();
</script>

<header {...restProps} class="flex flex-row items-center justify-between pl-[30rem] pr-[30rem] mt-[30rem] mb-[30rem] desktop:pr-[90rem] desktop:pl-[90rem] desktop:mt-[90rem] desktop:mb-[90rem] {classes}">
	<Logotype colorScheme="Dark" />
	<PrimaryNavigation name="Primary navigation" >
		<Link url="#">Features</Link>,
		<Link url="#">Team</Link>,
		<Link url="#">Sign In</Link>
	</PrimaryNavigation>
</header>