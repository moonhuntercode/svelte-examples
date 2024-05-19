<!-- component #1 -->

<script>
   import {gitIcon,linkedinIcon,githubIcon,telegramIcon} from '../assets';
  
   
   
	let name1 = 'Rick Astley';


   const all_links=[
      {name:"github",path:githubIcon},
      {name:"git",path:gitIcon},
      {name:"linkedin",path:linkedinIcon},
      {name:"telegram",path:telegramIcon}
   ]
   
   // the name is updated whenever the prop value changes...
	export let name;
   export let url;
   export let id;
   
	// ...but the "emoji" variable is fixed upon initialisation
	// of the component because it uses `const` instead of `$:`
   //show image instead of text
   
	const links = all_links[name];
   // console.log(typeof links)
   // console.log(all_links[id].path)
   let imgs=all_links[id].path;
  
   console.log(imgs)
   
</script>

<p>
   
   <img src="{imgs}" alt="{name}">
  
   
    - <a href={url} target="_blank">{name}</a> {id}</p>

    <style>
      img{
        width: 50px;
        height: 50px;
        background: red;
      }
    </style>