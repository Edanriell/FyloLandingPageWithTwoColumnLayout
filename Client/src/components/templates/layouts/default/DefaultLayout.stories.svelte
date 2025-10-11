<script lang="ts">
	import {defineMeta} from "@storybook/addon-svelte-csf";

	import DefaultLayout from "./DefaultLayout.svelte";

	const { Story } = defineMeta({
		title: "Layout/DefaultLayout",
		component: DefaultLayout,
		tags: ["autodocs"],
		parameters: {
			layout: "fullscreen",
		},
	});
</script>

<Story let:args name="Default">
	<DefaultLayout {...args}>
		<svelte:fragment slot="header">
			<header class="bg-blue-500 text-white p-4">
				<h1 class="text-lg">Header Content</h1>
			</header>
		</svelte:fragment>

		<p class="p-4">This is the main content area.</p>

		<svelte:fragment slot="footer">
			<footer class="bg-gray-800 text-white p-4">
				<p>Footer Content</p>
			</footer>
		</svelte:fragment>
	</DefaultLayout>
</Story>

<Story let:args name="WithoutHeaderFooter">
	<DefaultLayout {...args}>
		<p class="p-4">Only the main content is rendered here.</p>
	</DefaultLayout>
</Story>

<Story let:args name="WithNavigationAndFooter">
	<DefaultLayout {...args}>
		<svelte:fragment slot="header">
			<nav class="bg-indigo-600 text-white p-4 flex justify-between">
				<span>Logo</span>
				<ul class="flex gap-4">
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>
		</svelte:fragment>

		<main class="p-4">
			<h2>Main Section</h2>
			<p>
				This demonstrates how the layout works with a more complete header and footer.
			</p>
		</main>

		<svelte:fragment slot="footer">
			<footer class="bg-black text-gray-300 p-4 text-center">
				© 2025 My Company
			</footer>
		</svelte:fragment>
	</DefaultLayout>
</Story>
 