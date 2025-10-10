<script lang="ts">
	import {Button, Input} from "@atoms";

	interface Props {
		buttonPlaceholder?: string;
		classes?: string;
		inputClasses?: string;
		[key: string]: unknown;
	}

	let {
		buttonPlaceholder = "Get Started",
		classes = "",
		inputClasses = "",
		...restProps
	}: Props = $props();
</script>

<form {...restProps}>
	<div class="{classes}">
		<Input classes={inputClasses} id="email" name="email" placeholder="email@example.com" type="email"/>
		<Button classes="bg-[#2f65f8] hover:bg-[#6c9bff]" type="submit">{buttonPlaceholder}</Button>
	</div>
</form>