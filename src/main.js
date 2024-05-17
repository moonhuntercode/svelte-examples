import './app.css'
import App from "./App.svelte";
const app = new App({
  target: document.getElementById('app'),
})
document.getElementById("valorDeBoton").textContent = "1";

export default app
