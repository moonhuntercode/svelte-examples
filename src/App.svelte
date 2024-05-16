<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import Particles,{particlesInit} from '@tsparticles/svelte';
  import {loadSlim} from '@tsparticles/slim';

  // START PARTICLES
  let particlesConfig = {
    fpsLimit: 60,
    particles: {
      color:{
        value: "#fff"
      },
      number: {
        value: 15
      },
      move:{
        enable: true
      },
      links: {
        enable: true,
        color: "#fff"
      },
      detectRetina: true
    }
  };
      let onParticlesLoaded = (event) => {
        const particlesContainer = event.detail.particles;

        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    void particlesInit(async (engine) => {
        // call this once per app
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    });
  // END PARTICLES configs
  
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>
  
  <Particles
  id="tsparticles"
  class="tsparticles2"
  on:particlesLoaded={onParticlesLoaded}
  options={particlesConfig} />
  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  :global(#tsparticles){
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    inset: 0;
    position: fixed;
    z-index: -1;
  }
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
