<script lang="ts">
	import "@styles/styles.less"
	import "@styles/tailwindcss.css"

	import {DefaultLayout} from "../components/templates";

	import {Footer, Header} from "../components/organisms";

	let { children } = $props();
</script>

<DefaultLayout>
	<Header slot="header" />

	{@render children?.()}

	<Footer slot="footer" />
</DefaultLayout>
