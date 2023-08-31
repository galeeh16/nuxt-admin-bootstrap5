<template>
    <div class="sidebar">
        <div class="sidebar-logo">
            <a href="/">
                <img src="~/assets/img/logo.svg" alt="Logo">
            </a>
        </div>

        <div class="sidebar-menu">
            <template v-for="menu in menus" :key="menu.id">
                <Menu :menu="menu" />
            </template>
        </div>
    </div>
</template>

<script setup>
const menus = [
    {
        id: '1',
        url: '/',
        name: 'Dashboard',
        icon: 'lucide:layout-dashboard',
        sub_menu: []
    },
    {
        id: 'chart',
        url: '/chart',
        name: 'Chart',
        icon: 'ph:chart-bar',
        sub_menu: []
    },
    {
        id: 'table',
        url: '/table',
        name: 'Table',
        icon: 'octicon:stack-24',
        sub_menu: []
    },
    {
        id: 'form',
        url: '/form',
        name: 'Form Input',
        icon: 'octicon:stack-24',
        sub_menu: []
    },
    {
        id: '3',
        name: 'Settings',
        url: null,
        icon: 'bi:gear',
        sub_menu: [
            {
                id: '3.1',
                url: '/profile',
                name: 'Profile',
                icon: null,
                sub_menu: []
            },
            {
                id: '3.2222',
                url: '/transactions',
                name: 'Transactions',
                icon: null,
                sub_menu: []
            },
            {
                id: '3.2',
                url: '/about',
                name: 'Sub Menu 2',
                icon: null,
                sub_menu: [
                    {
                        id: '3.2.1',
                        url: '/about',
                        name: 'About',
                        icon: null,
                        sub_menu: []
                    },
                ]
            },
        ]
    },
    {
        id: '2',
        url: null,
        name: 'Data',
        icon: 'octicon:stack-24',
        sub_menu: [
            {
                id: '2.1',
                url: '/transactions',
                name: 'Transactions',
                icon: null,
                sub_menu: []
            },
        ]
    },
    {
        id: '7',
        url: '/test',
        name: 'Test',
        icon: 'octicon:stack-24',
        sub_menu: []
    },
];
</script>