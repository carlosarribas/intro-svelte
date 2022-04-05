<script>
    import {users} from '../stores/userStore';
    import UserCard from '../components/UserCard.svelte';
    let buscador = '';
    let filtro = [];

    $: {
		if (buscador) {
			filtro = $users.filter((user) => user.name.toLowerCase().includes(buscador.toLowerCase()));
		} else {
			filtro = [...$users];
		}
	}

    
</script>
<svelte:head>
    <title>Introducción a SvelteKit</title>
</svelte:head>


<center class="mt-9">
    <img src="/logo.png" alt="Logotipo" width="250">
    <h1 class="bold text-5xl">USERS API</h1>
</center>

<div class=" grid grid-cols-1 w-full justify-items-center bg-gray-300 mt-4 py-2">
    <input type="text" placeholder="Buscar" bind:value={buscador}
    class = "  rounded-md text-lg p-4 border-2 w-1/2 py-2">
</div>


<div class="py-5 grid gap-5 md:grid-cols-3">
    {#each filtro as item}
        <UserCard user={item}/>
    {/each}
</div>
