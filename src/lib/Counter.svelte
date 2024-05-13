<script>
  import item from './data.json';
  let count = 0;

  const increment = () => {
    count += 1
  }

  $:doubled=count*2;

  $:console.log(`the count is ${count}`)

let numbers = [1, 2, 3, 4];

function addNumber() {
  numbers = [...numbers, numbers.length + 1];
}


$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
</script>



<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>

<button on:click={increment}>
  count is {count}
</button>
<p>{count} doubled is {doubled}</p>
{#if count > 10}
<p>{count} is greater than 10</p>
{:else}
<p>{count} is between 0 and 10</p>
{/if}