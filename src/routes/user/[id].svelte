<script context="module">
	export async function load({ params }) {
		const id = params.id;
		const res = await fetch(`https://reqres.in/api/users/${id}`);
		const user = await res.json();
		return {
			props: {
				user,
			},
		};
	}
</script>
   

  <script>
    export let user;
  </script>

<center class="mt-9 pt-9">
    <div class="my-10 py-5">
        <img src={user.data.avatar} alt="Foto Usuario" class="rounded-full border-gray-100 shadow-sm">
        <h1 class="text-4xl my-3 uppercase bold">{user.data.first_name} {user.data.last_name}</h1>
        <h1 class="text-1xl my-3 uppercase ">{user.data.email}</h1>
        <p>{user.support.text}</p>
        
    </div>
</center> 

<!-- <script context="module" >
    export const load = async ({ params })  => {
      return {
        props: {
          id: params.id,
        }
      }
    }
  </script>
   
  <script>
    export let id;
   
  </script>
   
  <h2 class="mt-9 pt-9">
    {id}
  </h2>  -->