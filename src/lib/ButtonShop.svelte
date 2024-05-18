<script>    
let valor=1;
function aumentarValor(){
    valor+= 1;
}
function decreaseValue(){
    valor-= 1;
}
</script>
<button
on:click={aumentarValor}>+</button>
<input type="number" bind:value={valor}
 name="valorDeBoton" id="valorDeBoton">
<button
on:click={decreaseValue}>-</button>

