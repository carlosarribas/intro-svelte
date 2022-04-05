<script>
    import Nav from '../components/Nav.svelte';
</script>

<Nav />
<div class="p-2 max-w-2xl mx-auto">
    <slot />
</div>


<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>