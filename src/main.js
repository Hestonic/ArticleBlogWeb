import { createApp } from 'vue';
import App from './App';
import router from "@/router/router";
import components from '@/components/ui';
import store from '@/store';

require('@/store/subscriber')

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
    app.use(router).use(store).mount('#app');
})