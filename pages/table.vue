<template>
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">Customer List</h5>
        </div>
        <div class="card-body">
            <div class="d-flex justify-content-between mb-5">
                <div>
                    <button type="button" class="btn btn-primary d-flex align-items-center gap-1" @click="showModal">
                        <Icon name="material-symbols:add-rounded" />
                        New Customer
                    </button>
                </div>
                <div style="width: 450px;">
                    <input type="text" class="form-control" placeholder="Search user...">
                </div>
            </div>

            <table class="table">
                <thead class="">
                    <tr>
                        <th></th>
                        <th class="pb-3 text-dark">Name</th>
                        <th class="pb-3 text-dark">Email</th>
                        <th class="pb-3 text-dark">Phone</th>
                        <th class="pb-3 text-dark">Country</th>
                        <th class="pb-3 text-dark">Address</th>
                        <th class="pb-3 text-dark text-center">Status</th>
                        <th class="pb-3 text-dark text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id" class="align-middle">
                        <td class="py-3 align-middle">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" :id="`checkbox-${user.id}`"
                                    style="cursor: pointer;">
                                <label class="form-check-label" :for="`checkbox-${user.id}`">

                                </label>
                            </div>
                        </td>
                        <td class="py-3">
                            <div class="d-flex align-items-center" style="gap: 10px;">
                                <img :src="user.photo" :alt="`Photo ${user.id}`"
                                    style="object-fit: cover; object-position: center; width: 38px; height: 38px; border-radius: 6px;">
                                <div>{{ user.name }}</div>
                            </div>
                        </td>
                        <td class="py-3">{{ user.email }}</td>
                        <td class="py-3">{{ user.phone }}</td>
                        <td class="py-3">{{ user.country }}</td>
                        <td class="py-3">{{ user.address }}</td>
                        <td class="py-3 text-center">
                            <span class="badge bg-light-success text-success" v-if="user.status === 0">Active</span>
                            <span class="badge bg-light-danger text-danger" v-else>Inactive</span>
                        </td>
                        <td class="text-center">
                            <Icon name="mdi:dots-horizontal" size="24" class="text-secondary" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <Teleport to="body">
            <div class="modal fade" id="myModal" aria-hidden="true" aria-labelledby="myModalLabel" tabindex="-1">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="myModalLabel">Add Customer</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Show a second modal and hide this one with the button below.
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" data-bs-target="#myModal2" data-bs-dismiss="modal">Close
                                modal</button>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
const { $bootstrap } = useNuxtApp();

let modalAddCustomer = ref(null);

onMounted(() => {
    modalAddCustomer.value = new $bootstrap.Modal(document.getElementById("myModal"), {});
});

function showModal() {
    modalAddCustomer.value.show();
}

const users = ref([
    {
        id: 1,
        name: 'Galih Anggoro Jati',
        email: 'galih@example.com',
        phone: '081234567890',
        country: 'Indonesia',
        address: 'Jalan Jakarta 14 B',
        photo: '/photo-1.webp',
        status: 1
    },
    {
        id: 2,
        name: 'Ratih Esti Hapsari',
        email: 'ratih@example.com',
        phone: '081238890029',
        country: 'Indonesia',
        address: 'Jalan Tangerang 12 C',
        photo: '/photo-2.webp',
        status: 0
    },
    {
        id: 3,
        name: 'Whenni Lya Anggraeni',
        email: 'whenni@example.com',
        phone: '0888321321222',
        country: 'Indonesia',
        address: 'Jalan Bekasi 33 F',
        photo: '/photo-3.webp',
        status: 0
    },
    {
        id: 4,
        name: 'Galih Anggoro Jati',
        email: 'galih@example.com',
        phone: '081234567890',
        country: 'Indonesia',
        address: 'Jalan Jakarta 14 B',
        photo: '/photo-1.webp',
        status: 1
    },
    {
        id: 5,
        name: 'Ratih Esti Hapsari',
        email: 'ratih@example.com',
        phone: '081238890029',
        country: 'Indonesia',
        address: 'Jalan Tangerang 12 C',
        photo: '/photo-2.webp',
        status: 0
    },
    {
        id: 6,
        name: 'Whenni Lya Anggraeni',
        email: 'whenni@example.com',
        phone: '0888321321222',
        country: 'Indonesia',
        address: 'Jalan Bekasi 33 F',
        photo: '/photo-3.webp',
        status: 0
    },
    {
        id: 7,
        name: 'Galih Anggoro Jati',
        email: 'galih@example.com',
        phone: '081234567890',
        country: 'Indonesia',
        address: 'Jalan Jakarta 14 B',
        photo: '/photo-1.webp',
        status: 1
    },
    {
        id: 8,
        name: 'Ratih Esti Hapsari',
        email: 'ratih@example.com',
        phone: '081238890029',
        country: 'Indonesia',
        address: 'Jalan Tangerang 12 C',
        photo: '/photo-2.webp',
        status: 0
    },
    {
        id: 9,
        name: 'Whenni Lya Anggraeni',
        email: 'whenni@example.com',
        phone: '0888321321222',
        country: 'Indonesia',
        address: 'Jalan Bekasi 33 F',
        photo: '/photo-3.webp',
        status: 0
    }
]);
</script>