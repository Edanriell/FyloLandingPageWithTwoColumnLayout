<script lang="ts">
	import {Logotype} from "../../atoms/logotype"
	import {Link} from "../../atoms/link";
	import {PrimaryNavigation, PrimaryNavigationItem} from "../../molecules";

	interface Props {
		classes?: string;
		[key: string]: unknown;
	}

	let {
		classes = "",
		...restProps
	}: Props = $props();
</script>
 
<header {...restProps} class="flex flex-row items-center justify-between pl-[30rem] pr-[30rem] mt-[30rem]! mb-[30rem]! desktop:pr-[90rem] desktop:pl-[90rem] desktop:mt-[90rem]! desktop:mb-[90rem]! {classes}">
	<Logotype colorScheme="Dark" />
	<PrimaryNavigation>
		<PrimaryNavigationItem>
			<Link url="#">Features</Link>
		</PrimaryNavigationItem>
		<PrimaryNavigationItem>
			<Link url="#">Team</Link>
		</PrimaryNavigationItem>
		<PrimaryNavigationItem>
			<Link url="#">Sign In</Link>
		</PrimaryNavigationItem>
	</PrimaryNavigation>
</header>