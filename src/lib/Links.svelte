<script>
  import LinkUnit from "./LinkUnit.svelte";

  let links=[
        {id:1,name:"github",url:"https://github.com/moonhuntercode",
          path:"../assets/git-icon-black.png"
        },
        {id:2,name:"tiktok",url:"https://www.tiktok.com/@victorcode_"},
        {id:3,name:"instagram",url:"https://www.instagram.com/victorcode_/"},
        {id:4,name:"linkedin",url:"https://www.linkedin.com/in/victorcode/"},

    ]
</script>

{#each links as link}
    <LinkUnit  name={link.name} url={link.url}
    path={link.path}/>
{/each}