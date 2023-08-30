<template>
    <div id="app">
        <Sidebar />
        <div id="content">
            <div class="header">
                <div class="d-flex justify-content-between w-100">
                    <div>
                        <button type="button" class="btn-toggle-sidebar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
                                <g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="4">
                                    <path d="M7.94971 11.9497H39.9497" />
                                    <path d="M7.94971 23.9497H39.9497" />
                                    <path d="M7.94971 35.9497H39.9497" />
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div>USERNAME</div>
                </div>
            </div>
            <div class="content">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>

</script>