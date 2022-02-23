<script>
	import { fade } from 'svelte/transition';
</script>

<div transition:fade={{ duration: 200 }}>
	<slot />
</div>
