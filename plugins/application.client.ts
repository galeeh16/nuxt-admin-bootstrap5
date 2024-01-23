// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap';

export default defineNuxtPlugin({
    name: 'my-plugin',
    parallel: true,
    async setup(nuxtApp) {
        // the next plugin will be executed immediately
    },
    hooks: {
        'app:mounted'() {
            const btnBars = document.querySelector('.btn-bars');
            const app = document.querySelector('#app');

            btnBars?.addEventListener('click', function () {
                btnBars?.classList.toggle('active');
                app?.classList.toggle('is-toggled');
            });
        }
    }
})