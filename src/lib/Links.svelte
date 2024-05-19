<!-- component #2 -->
<script>
  import LinkUnit from "./LinkUnit.svelte";

  let links=[
        {id:0,name:"github",url:"https://github.com/moonhuntercode",
          path:"../assets/git-icon-black.png"
        },
        {id:1,name:"tiktok",url:"https://www.tiktok.com/@victorcode_"},
        {id:2,name:"instagram",url:"https://www.instagram.com/victorcode_/"},
        {id:3,name:"linkedin",url:"https://www.linkedin.com/in/victorcode/"},

    ]
</script>

{#each links as link(link.id)}
    <LinkUnit  name={link.name} url={link.url}
    id={link.id}
    />
{/each}