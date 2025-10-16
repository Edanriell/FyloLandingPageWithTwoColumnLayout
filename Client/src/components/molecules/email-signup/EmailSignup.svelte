<script lang="ts">
	import {nanoid} from "nanoid";
	import {superForm} from "sveltekit-superforms";
	import {yupClient} from "sveltekit-superforms/adapters";

	import type {PageData} from "../../../../.svelte-kit/types/src/routes/$types";

	import {Button, Input} from "@atoms";

	import {emailSignupSchema} from "@molecules/email-signup/model";

	interface Props {
		data: PageData;
		buttonPlaceholder?: string;
		inputPlaceholder?: string;
		classes?: string;
		inputClasses?: string;
		errorMessageClasses?: string;
		successMessageClasses?: string;
		[key: string]: unknown;
	}

	let {
		data,
		buttonPlaceholder = "Get Started",
		inputPlaceholder = "Enter your email…",
		classes = "",
		inputClasses = "",
		errorMessageClasses = "",
		successMessageClasses = "",
		...restProps
	}: Props = $props();

	const { form, errors, enhance, submitting, message} = superForm(data.emailSignupForm, {
		id: nanoid(),
		validators: yupClient(emailSignupSchema),
		resetForm: true,
		onUpdated: ({form}) => {
			if (form.valid) {
				console.log('Newsletter subscription successful!');
			}
		}
	})
</script>

<form {...restProps} action="?/email-signup" method="POST" use:enhance>
	<div class="relative {classes}">
		<Input
			aria-invalid={$errors.email ? 'true' : undefined}
			bind:value={$form.email}
			classes={inputClasses}
			id="email"
			name="email"
			placeholder={inputPlaceholder}
			style={`border-color: ${$errors.email ? '#ef4877' : 'rgb(7, 4, 59)'}`}
			type="email"
		/>
		{#if $errors.email && !$message}
				<span class="absolute bottom-[35rem] text-[12rem] font-[OpenSans] font-normal tracking-[0.03em] text-[#ef4877] desktop:bottom-[-25rem] z-5 {errorMessageClasses}">
					{$errors.email}
				</span>
		{/if}
		{#if $message}
			<span class="absolute bottom-[35rem] text-[12rem] font-[OpenSans] font-normal tracking-[0.03em] text-[#22c55e] desktop:bottom-[-25rem] z-5 {successMessageClasses}">
				Check your email for confirmation.
			</span>
		{/if}
		<Button classes={`bg-[#2f65f8] hover:bg-[#6c9bff] ${(!errorMessageClasses && !successMessageClasses) ? 'desktop:mt-[unset]!' : ''}`} style={`margin-top: ${$errors.email || $message ? '14rem' : '0'}`} type="submit">{$submitting ? 'Subscribing...' : buttonPlaceholder}</Button>
	</div>
</form>