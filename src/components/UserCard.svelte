<script>
    export let user;
    const card= 'p-6 bg-gray-300 text-blue-900 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center';
    const circulo = 'rounded-full border-gray-100 shadow-sm';
</script>

<a href={`/user/${user.id}`} class={card}>
    <img src={user.avatar} alt="imagen" class={circulo}>
    <h2>{user.name} {user.apellidos}</h2>    
    <h4 class="text-black text-bolder">{user.email}</h4>
</a>