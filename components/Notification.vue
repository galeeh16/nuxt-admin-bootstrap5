<template>
    <div class="dropdown">
        <div class="d-flex gap-2 dropdown-header dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="position-relative">
                <div class="count-notif" v-if="countNotif > 0">
                    {{ countNotif }}
                </div>
                <Icon name="mingcute:notification-line" size="24" class="text-gray" />
            </div>
        </div>

        <div class="dropdown-menu menu-notif">
            <div class="dropdown-item-header">
                <div class="d-flex align-items-center justify-content-between">
                    <div>You have {{ countNotif }} notifications</div>
                    <div><a href="#" @click="viewAllNotif">View all</a></div>
                </div>
            </div>
            <div>
                <div class="notif-item" v-for="notif in notifications" :key="notif.id">
                    <div class="notif-item-left p-2 rounded" :class="[notif.class]">
                        <Icon :name="notif.icon" size="28" />
                    </div>
                    <div class="notif-item-right">
                        <div>{{ notif.desc }}</div>
                        <div class="d-flex align-items-center notif-time mt-1" style="gap: 4px;">
                            <Icon name="ic:baseline-access-time" size="11" style="color: #88909e;" />
                            <small class="notif-time-text">{{ notif.date }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const countNotif = ref(12);

const viewAllNotif = () => {
    countNotif.value = 0;
}

const notifications = ref([
    {
        id: 1,
        type: 'work',
        icon: 'material-symbols:home-work-outline-rounded',
        class: 'bg-light-danger text-danger',
        desc: 'Kurniawan Halim assigned you as "Developer" on "CBS Project"',
        date: '1h ago'
    },
    {
        id: 2,
        type: 'rewards',
        icon: 'material-symbols:workspace-premium-outline-rounded',
        class: 'bg-light-warning text-warning',
        desc: 'Kurniawan Halim give you a "Medal"',
        date: '30 Minutes ago'
    },
    {
        id: 3,
        type: 'info',
        icon: 'material-symbols:info-outline-rounded',
        class: 'bg-light-info text-info',
        desc: 'You have not verified your email address, please check your inbox to verify.',
        date: '2 Seconds ago'
    }
])
</script>