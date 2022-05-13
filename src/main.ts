import { createApp } from 'vue'
import {router} from "./routes/router";
import {App} from "@/App";

const app = createApp(App)

app.use(router)

app.mount('#app')
