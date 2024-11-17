
<script lang="ts">
	import { Button } from '$lib/components/ui';

	interface NavLinks {
		label: string;
		href: string;
	}

	/*const navLinks: NavLinks[] = [
		{ label: 'inicio', href: '/' },
		{ label: 'Geographic Zone', href: '/gaiamaps/entorno' },
		{ label: 'parámetros', href: '/parametros' }
	];*/

	const navLinks: NavLinks[] = [{ label: 'Geographic Zone', href: '/gaiamaps/entorno' }];
</script>


<header class="sticky top-0 z-[999] flex h-16 items-center justify-around bg-white shadow">
	<br>
</header>

