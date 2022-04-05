import { writable } from 'svelte/store';
export const users = writable([]);

const fetchUsers = async () => {
    const url = await fetch('https://reqres.in/api/users');
    const data = await url.json();
    const loadUsers = data.data.map((data, index) => {
        return {
            name: data.first_name,
            id: data.id,
            avatar:data.avatar,
            apellidos: data.last_name,
            email: data.email
        }
    });
    users.set(loadUsers);
}

fetchUsers();