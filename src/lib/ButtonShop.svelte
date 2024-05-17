<script>
    
function aumentarValor(){
    let valor = document.getElementById("valorDeBoton").value;
    document.getElementById("valorDeBoton").value = parseInt(valor.value) + 1;
    
}
</script>
<button on:click={aumentarValor}>+</button>
<input type="text" name="valorDeBoton" id="valorDeBoton">
