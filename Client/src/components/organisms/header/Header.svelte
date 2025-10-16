<script lang="ts">
	import {m} from "$lib/paraglide/messages.js";

	import {Link, Logotype} from "@atoms"
	import {PrimaryNavigation, PrimaryNavigationItem} from "@molecules";

	import LanguageSwitcher from "@molecules/language-switcher/LanguageSwitcher.svelte";

	interface Props {
		classes?: string;
		[key: string]: unknown;
	}

	let {
		classes = "",
		...restProps
	}: Props = $props();
</script>

<header {...restProps} class="header grid grid-cols-[1fr_auto] gap-x-[60rem] desktop:gap-x-[120rem]">
	<div class="flex flex-row items-center justify-between {classes}">
		<Logotype colorScheme="Dark" />
		<PrimaryNavigation>
			<PrimaryNavigationItem>
				<Link classes="text-[#444E86] hover:text-[#444E86]" url="#">{m.header_navigation_item1()}</Link>
			</PrimaryNavigationItem>
			<PrimaryNavigationItem>
				<Link classes="text-[#444E86] hover:text-[#444E86]" url="#">{m.header_navigation_item2()}</Link>
			</PrimaryNavigationItem>
			<PrimaryNavigationItem>
				<Link classes="text-[#444E86] hover:text-[#444E86]" url="#">{m.header_navigation_item3()}</Link>
			</PrimaryNavigationItem>
		</PrimaryNavigation>
	</div>
	<LanguageSwitcher />
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