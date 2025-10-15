<script lang="ts">
	import type {PageData} from "./$types";

	import {HomePage} from "@templates"

	let {data}: {data: PageData} = $props();
</script>

<HomePage {data} />
