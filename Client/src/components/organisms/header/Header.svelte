<script lang="ts">
	import {Link, Logotype} from "@atoms"
	import {PrimaryNavigation, PrimaryNavigationItem} from "@molecules";

	interface Props {
		classes?: string;
		[key: string]: unknown;
	}

	let {
		classes = "",
		...restProps
	}: Props = $props();
</script>

<header {...restProps} class="header flex flex-row items-center justify-between {classes}">
	<Logotype colorScheme="Dark" />
	<PrimaryNavigation>
		<PrimaryNavigationItem>
			<Link classes="text-[#444E86] hover:text-[#444E86]" url="#">Features</Link>
		</PrimaryNavigationItem>
		<PrimaryNavigationItem>
			<Link classes="text-[#444E86] hover:text-[#444E86]" url="#">Team</Link>
		</PrimaryNavigationItem>
		<PrimaryNavigationItem>
			<Link classes="text-[#444E86] hover:text-[#444E86]" url="#">Sign In</Link>
		</PrimaryNavigationItem>
	</PrimaryNavigation>
</header>

<style lang="less">
	@import "../../../styles/fluid-space.less";

	.header {
		.fluid-space-clamp(padding-top, 24rem, 65rem);
		.fluid-space-clamp(padding-bottom, 24rem, 65rem);
		.fluid-space-clamp(margin-left, 24rem, 80rem);
		.fluid-space-clamp(margin-right, 24rem, 80rem);
	}
</style>