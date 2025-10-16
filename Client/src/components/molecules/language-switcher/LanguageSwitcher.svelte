<script lang="ts">
	import {setLocale} from "@lib/paraglide/runtime";
	import {m} from "$lib/paraglide/messages.js";

	import type {Snippet} from "svelte";

	interface Props {
		classes?: string;
		children?: Snippet;
		[key: string]: unknown;
	}

	let {
		classes = "",
		...restProps
	}: Props = $props();

	let selectedLanguage = "en";

	const languages = [
		{value: "en", label: "English"},
		{value: "lv", label: "Latvian"}
	]

	function handleLanguageChange(event: Event) {
		const select = event.target as HTMLSelectElement;
		selectedLanguage = select.value;

		if (selectedLanguage === languages[0].value) {
			setLocale("en")
		} else if (selectedLanguage === languages[1].value) {
			setLocale("lv")
		}
	}
</script>

<div class="language-switcher__wrapper">
	<label class="hidden font-[OpenSans] text-[#07043b] desktop:block" for="language">{m.choose_language()}</label>
	<select {...restProps} bind:value={selectedLanguage} class="language-switcher {classes}" id="language" name="language" on:change={handleLanguageChange}>
		{#each languages as language (language.value)}
			<option value={language.value}>{language.label}</option>
		{/each}
	</select>
</div>

<style lang="less">
	.language-switcher__wrapper {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 16rem;
	}

	.language-switcher {
		border: none !important;
		font-family: OpenSans-Variable, sans-serif;
		padding: 4rem 18rem !important;
		border-radius: 3rem !important;
		background-color: #2f65f8;
		color: #fff;
		box-shadow: 2rem 3rem 6rem 0 rgba(0, 0, 0, 0.16);
		background-image: none;

		&:hover {
			background-color: #6c9bff;
		}
	}
</style>