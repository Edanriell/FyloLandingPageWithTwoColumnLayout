<script lang="ts">
	import type {PageData} from "../../../../../.svelte-kit/types/src/routes/$types";

	import {AboutSection, AccessSection, HeroSection} from "@organisms";

	interface Props {
		data: PageData;
		[key: string]: unknown;
	}

	let {
		data,
		...restProps
	}: Props = $props();
</script>

<HeroSection {...restProps} data={data} />
<AboutSection {...restProps} />
<AccessSection {...restProps} data={data} />