<script lang="ts">
	import {AboutIllustration, Text} from "@atoms";

	interface Props {
		classes?: string;
		[key: string]: unknown;
	}

	let {
		classes = "",
		...restProps
	}: Props = $props();
</script> 

<section {...restProps} class="flex flex-col-reverse items-center {classes}">
	<div class="relative">
		<h2>Stay productive, wherever you are</h2>
		<Text classes="text-[#615f7e]! desktop:text-left desktop:text-[16rem]! desktop:text-[#07043b]! desktop:leading-[150%]! desktop:tracking-normal!">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</Text>
		<Text classes="text-[#615f7e]! desktop:text-left desktop:text-[16rem]! desktop:text-[#07043b]! desktop:leading-[150%]! desktop:tracking-normal!">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</Text>
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
	<div class="relative">
		<AboutIllustration />
	</div>
</section>