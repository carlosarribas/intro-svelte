<script context="module">
    export async function load({params}){
        const artista = params.artista
        const cancion = params.cancion
        const res = await fetch(`https://api.lyrics.ovh/v1/${artista}/${cancion}`)
        const letra = await res.json()
        return {
            props: {
                letra,
                artista,
                cancion
            }
        }
    }
</script>

<script>
    export let letra;
    export let artista;
    export let cancion;
</script>


<center class="mt-12">
    <h1 class="mt-12 pt-5 text-5xl uppercase">
        {artista}
    </h1>
    <h3 class="bold text-3xl uppercase mt-5">
        {cancion}
    </h3>
    <p class="text-justify p-4 mt-5 bg-gray-700 text-white">{letra.lyrics}</p>
</center>