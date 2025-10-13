<script lang="ts">
	import {AboutIllustration} from "@atoms";

	interface Props {
		classes?: string;
		[key: string]: unknown;
	}

	let {
		classes = "",
		...restProps
	}: Props = $props();
</script> 

<section {...restProps} class="{classes}">
	<div>
		<h2>Stay productive, wherever you are</h2>
		<p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
		<p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>
		<a href="#">
			<span>See how Fylo works</span>
		</a>
		<figure>
			<blockquote>
				Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
			</blockquote>
			<figcaption>
				<img alt="Portrait of Kyle Burton, Founder & CEO of Huddle" src="">
				<div>
					<strong>Kyle Burton</strong>
					<small>Founder & CEO, Huddle</small>
				</div>
			</figcaption>
		</figure>
	</div>
	<div>
		<AboutIllustration />
	</div>
</section>