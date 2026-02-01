import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupWorker } from "msw/browser";
import { handlers } from "./mock/handlers";

const worker = setupWorker(...handlers);

await worker.start();

createApp(App).mount("#app");
