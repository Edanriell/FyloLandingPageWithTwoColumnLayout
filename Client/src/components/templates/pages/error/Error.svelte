<script lang="ts">
	import {goto} from "$app/navigation";

	import {Button} from "@atoms";

	function goHome() {
		goto('/');
	}

	function goBack() {
		history.back();
	}
</script>

<svelte:head>
	<title>Page Not Found - 404</title>
	<meta content="The page you're looking for could not be found." name="description" />
</svelte:head>

<section class="flex items-start justify-center mb-[138rem]!">
	<div class="w-full max-w-[1024rem] text-center">
		<div class="mb-[28rem]! mt-[28rem]">
			<h1 class="mb-[unset]! mt-[unset]! text-[128rem]! sm:text-[144rem]! desktop:text-[192rem]! font-bold! text-gray-200! select-none!">404</h1>
		</div>
		<div class="mb-[48rem] flex! flex-col! items-center! justify-center!">
			<h2 class="text-[48rem]! sm:text-[64rem]! desktop:text-[60rem]! font-bold! text-gray-900! mb-[24rem]!">Page Not Found</h2>
			<p class="pl-[24rem]! pr-[24rem]! text-[16rem]! desktop:text-[18rem]! text-gray-600! mb-[32rem]! leading-[150%]! max-w-[712rem]">
				Sorry, we couldn't find the page you're looking for.
				It might have been moved, deleted, or you entered the wrong URL.
			</p>
		</div>
		<div class="grid grid-cols-[1fr_1fr_1fr] grid-rows-[40rem_40rem] gap-x-[32rem] gap-y-[16rem] desktop:grid-rows-[45rem] desktop:grid-cols-[1fr_1fr]">
			<Button classes="row-start-1 col-start-2 text-white! bg-[#2f65f8] hover:bg-[#6c9bff] desktop:row-start-1 desktop:col-start-1" onclick={goHome} type="button">Go Home</Button>
			<Button classes="row-start-2 col-start-2 text-white! bg-[#2f65f8] hover:bg-[#6c9bff] desktop:row-start-1 desktop:col-start-2" onclick={goBack} type="button">Go Back</Button>
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%, 100% { transform: translateY(0rem); }
		50% { transform: translateY(-10rem); }
	}

	h1 {
		animation: float 3s ease-in-out infinite;
	}
</style>