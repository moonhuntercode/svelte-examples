<script>
   const all_links={
    github:"../assets/git-icon-black.png",
    tiktok:"../assets/tiktok-Icon-Black.png",
    instagram:"../assets/instagram-Icon-Black.png",
    linkedin:"../assets/linkedin-Icon-Black.png",
   }
   	// the name is updated whenever the prop value changes...
	export let name;
   export let url;
   export let path;

	// ...but the "emoji" variable is fixed upon initialisation
	// of the component because it uses `const` instead of `$:`
   //show image instead of text

	const links = all_links[name];
   console.log(typeof links)
</script>
<p>
   <img src={path} alt={links}> - <a href={url}>{name}</a></p>