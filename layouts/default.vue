<template>
    <div id="app">
        <Sidebar />
        <div id="content">
            <div class="header">
                <div class="d-flex align-items-center justify-content-between w-100">
                    <div>
                        <button type="button" class="btn-bars">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div class="d-flex align-items-center gap-3">
                        <div class="dropdown">
                            <div class="d-flex gap-2 dropdown-header dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <div class="position-relative">
                                    <div class="count-notif">
                                        12
                                    </div>
                                    <Icon name="mingcute:notification-line" size="24" class="text-secondary" />
                                </div>
                            </div>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <div class="d-flex gap-2 dropdown-header dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <img src="/profile.webp" class="rounded-circle" style="width: 44px; height: 44px;"
                                    alt="Profile">
                                <div>
                                    <div class="fw-semibold text-secondary">001GALIHAJ</div>
                                    <div style="font-size: 13px;">galih@example.com</div>
                                </div>
                            </div>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div class="content">
                <slot />
            </div>
        </div>
    </div>
</template>

<style>
@import url('/assets/css/multiselect.css');
@import url('/assets/css/datepicker.css');
</style>

<script setup>
import '@vuepic/vue-datepicker/dist/main.css';
import '@vueform/multiselect/themes/default.css';
</script>