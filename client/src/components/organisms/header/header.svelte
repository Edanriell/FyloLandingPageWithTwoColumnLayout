<script lang="ts">
	import {Link, Logotype} from "../../atoms";
	import {PrimaryNavigation} from "../../molecules";
</script>

<header class="relative">
	<Logotype colorScheme="Dark" />
	<PrimaryNavigation name="Primary navigation" >
		<Link url="#">Features</Link>,
		<Link url="#">Team</Link>,
		<Link url="#">Sign In</Link>
	</PrimaryNavigation>
</header>