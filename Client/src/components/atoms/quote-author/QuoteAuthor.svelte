<script lang="ts">
	interface Props {
		authorImageUrl?: string;
		authorFullName: string;
		authorJobTitle: string;
		classes?: string;
		[key: string]: unknown;
	}

	let {
		authorImageUrl = "",
		authorFullName,
		authorJobTitle,
		classes = "",
		...restProps
	}: Props = $props();
</script>

<figcaption {...restProps} class=" {classes}">
	<img alt="Portrait of Kyle Burton, Founder & CEO of Huddle" src="{authorImageUrl}">
	<div class="flex flex-col">
		<strong>{authorFullName}</strong>
		<small>{authorJobTitle}</small>
	</div>
</figcaption>