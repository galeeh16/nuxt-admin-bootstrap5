<template>
    <template v-if="!menu.sub_menu?.length">
        <nuxt-link class="mysidebar-link" :class="{ 'active': route.path === menu.url }" :to="menu.url">
            <Icon v-if="menu.icon" :name="menu.icon" size="18" />
            {{ menu.name }}
        </nuxt-link>
    </template>

    <template v-else>
        <Disclosure v-slot="{ open }" :default-open="hasActiveChild">
            <DisclosureButton class="mysidebar-item">
                <div class="left">
                    <Icon v-if="menu.icon" :name="menu.icon" size="18" />
                    {{ menu.name }}
                </div>
                <Icon name="bi:chevron-right" class="transition opacity-70" :class="{ 'rotate-90': open }"
                    style="width: 13px; height: 13px;" />
            </DisclosureButton>
            <SlideDown :is-show="open">
                <div class="ms-3 position-relative">
                    <DisclosurePanel>
                        <Menu v-for="child in menu.sub_menu" :menu="child" />
                    </DisclosurePanel>
                </div>
            </SlideDown>
        </Disclosure>
    </template>
</template>

<script setup lang="ts">
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue';
import { MenuProps } from '@/types';

const route = useRoute();

const props = defineProps<{
    menu: {
        id: string,
        url: string,
        name: string,
        icon?: string,
        sub_menu?: Array<MenuProps>
    }
}>();

const hasActiveChild = computed(() => {
    return props.menu?.sub_menu?.some((item: MenuProps) => {
        return item.url === route.path;
    });
});
</script>

<style scoped>
.transition {
    transition: all 0.2s ease-in-out;
}

.opacity-70 {
    opacity: 0.7;
}

.rotate-90 {
    transform: rotate(90deg);
}

.mysidebar-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #60646f;
    padding: 8px 12px;
    font-size: 15px;
    cursor: pointer;
    border-radius: 6px;
    margin-bottom: 4px;
    user-select: none;
    -moz-user-select: none;
    transition: all 0.2s ease-in-out;
}

.mysidebar-item .left {
    display: flex;
    align-items: center;
    gap: 8px;
}

.mysidebar-link {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 8px;
    color: #60646f;
    text-decoration: none;
    padding: 8px 12px;
    font-size: 15px;
    cursor: pointer;
    border-radius: 6px;
    margin-bottom: 4px;
}

.mysidebar-link:hover,
.mysidebar-item:hover {
    background-color: rgba(175, 178, 187, 0.17);
}

.mysidebar-link.active {
    background-color: rgba(102, 16, 242, .15);
    /* background-color: rgba(165, 59, 59, 0.13); */
    /* color: #016ae3; */
    /* color: #A53B3B; */
    color: #6610f2;
    /* font-weight: 600; */
}

.sub-menu.is-open {
    transition: all 0.2s ease-in-out;
    height: 100%;
}

/** bacanye: Cari .mysidebar-item yang punya (siblingnya .ms-3 dan child .mysidebar-link.active) maka .mysidebar-item dikasih css */
.mysidebar-item:has(+ .ms-3 .mysidebar-link.active) {
    font-weight: 600;
    color: #141418;
}
</style>