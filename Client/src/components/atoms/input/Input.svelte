<script lang="ts">
	interface Props {
		type?: "button"
		| "checkbox"
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "password"
		| "radio"
		| "range"
		| "reset"
		| "search"
		| "submit"
		| "tel"
		| "text"
		| "time"
		| "url"
		| "week";
		placeholder?: string;
		name?: string;
		id?: string;
		borderColor?: string;
		borderWidth?: number;
		classes?: string;
		[key: string]: unknown;
	}

	const {
		type = "text",
		placeholder = "",
		name = "",
		id = "",
		borderColor = "",
		borderWidth,
		classes = "",
		...restProps
	}: Props = $props();
</script>

{#if type === "text" || type === "search" || type === "email" || type === "password" || type === "tel" || type === "url"}
	<label class="visually-hidden" for="{id}">{name}</label>
	<input
			{...restProps}
			class="font-[var(--font-family)] font-normal text-[#070439] text-[13rem]! rounded-[3rem] border-[{borderWidth}rem] border-[{borderColor}] w-full p-[10rem] placeholder:text-[#07043966] {classes}"
			id="{id}"
			name="{name}"
			placeholder="{placeholder}"
			type="{type}"
	/>
	{:else}
	<label class="visually-hidden" for="{id}">{name}</label>
	<input
			{...restProps}
			class="{classes}"
			id="{id}"
			name="{name}"
			placeholder="{placeholder}"
			type="{type}"
	/>
{/if}
