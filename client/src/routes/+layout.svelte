<script lang="ts">
	import "@styles/styles.less"
	import "@styles/tailwindcss.css"

	import {DefaultLayout} from "../components/templates";

	let { children } = $props();
</script>

<DefaultLayout>
	{@render children?.()}
</DefaultLayout>
