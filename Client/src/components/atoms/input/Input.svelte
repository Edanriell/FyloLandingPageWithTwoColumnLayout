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
		value?: string;
		placeholder?: string;
		name?: string;
		id?: string;
		classes?: string;
		[key: string]: unknown;
	}

	let {
		type = "text",
		value = $bindable(),
		placeholder = "",
		name = "",
		id = "",
		classes = "",
		...restProps
	}: Props = $props();

	console.log(value)
</script>

{#if type === "text" || type === "search" || type === "email" || type === "password" || type === "tel" || type === "url"}
	<label class="visually-hidden" for="{id}">{name}</label>
	<input
			{...restProps}
			bind:value={value}
			class="font-[OpenSans] pt-[14rem] pb-[14rem] pl-[21rem] pr-[21rem] font-normal text-[#07043b] text-[12rem]! rounded-[3rem] w-full placeholder:text-[#c2c2c2] tracking-[0.03em] desktop:text-[14rem]! {classes}"
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
