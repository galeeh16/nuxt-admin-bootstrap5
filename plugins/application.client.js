// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin({
    name: 'my-plugin',
    parallel: true,
    async setup (nuxtApp) {
      // the next plugin will be executed immediately
    },
    hooks: {
        'app:mounted'() {
            const btnHamburger = document.querySelector('.btn-toggle-sidebar');
            const app = document.querySelector('#app');

            btnHamburger?.addEventListener('click', function() {
                app.classList.toggle('is-toggled');
            });
        }
    }
})