<script lang="ts">
	import "@styles/styles.less"
	import "@styles/tailwindcss.css"

	import {DefaultLayout} from "@templates/layouts";

	let { children } = $props();
</script>

<DefaultLayout>
	{@render children?.()}
</DefaultLayout>
