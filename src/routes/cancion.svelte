<script>
    let artista = '';
    let cancion = '';
</script>


<h1 class="mt-9 py-5 text-5xl">Buscar letra de canción</h1>


    <input type="text" placeholder="Artista" bind:value={artista}
        class = "  rounded-md text-lg p-4 border-2 w-full py-2">    
    <div class="mt-4"></div>
    <input type="text" placeholder="Canción" bind:value={cancion}
        class = "  rounded-md text-lg p-4 border-2 w-full py-2">
    <div class="mt-4"></div>
    <a href={`/letra/${artista}-${cancion}`} class="bg-blue-500 text-white bold py-2 px-4 rounded text-l">Buscar</a>
   
