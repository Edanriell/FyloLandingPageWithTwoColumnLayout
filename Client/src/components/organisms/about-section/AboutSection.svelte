<script lang="ts">
	import {AboutIllustration, Link, SecondaryHeading, Text} from "@atoms";

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
		<SecondaryHeading>Stay productive, wherever you are</SecondaryHeading>
		<Text classes="text-[#615f7e]! pr-[unset] desktop:text-left desktop:text-[16rem]! desktop:text-[#07043b]! desktop:leading-[150%]! desktop:tracking-normal!">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</Text>
		<Text classes="text-[#615f7e]! pr-[unset] desktop:text-left desktop:text-[16rem]! desktop:text-[#07043b]! desktop:leading-[150%]! desktop:tracking-normal!">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</Text>
		<div class="flex items-center justify-center">
			<Link classes="relative leading-[250%] inline-flex flex-row items-center justify-center gap-x-[8rem] text-[#3da08f] hover:text-[#71dfcc] font-[OpenSans]!" href="#">
				<span class="relative">See how Fylo works</span>
				<svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_d_0_80)">
						<circle cx="8" cy="8" fill="currentColor" r="6" />
					</g>
					<path clip-rule="evenodd" d="M8.58227 6L8.21931 6.35L9.67116 7.75H5.33325V8.25H9.67116L8.21931 9.65L8.58227 10L10.6563 8L8.58227 6Z" fill="white" fill-rule="evenodd" />
					<defs>
						<filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="16" id="filter0_d_0_80" width="16" x="0" y="0">
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
							<feOffset />
							<feGaussianBlur stdDeviation="1" />
							<feColorMatrix type="matrix" values="0 0 0 0 0.239216 0 0 0 0 0.627451 0 0 0 0 0.560784 0 0 0 0.793507 0" />
							<feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_80" />
							<feBlend in="SourceGraphic" in2="effect1_dropShadow_0_80" mode="normal" result="shape" />
						</filter>
					</defs>
				</svg>
				<span class="absolute bottom-0 left-0 w-full h-[1rem] bg-[currentColor]"></span>
			</Link>
		</div>
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