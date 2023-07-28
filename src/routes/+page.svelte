<script lang="ts">
	import { enhance } from '$app/forms';

	export let data;
</script>

<form action="?/add" method="post" use:enhance>
	<input type="text" name="todo" />
	<button> add </button>
</form>

<ul>
	{#each data.todos as todo}
		<form action="?/remove" method="post" use:enhance>
			<li>
				{todo} <button>x</button>
				<input type="hidden" name="todo" value={todo} />
			</li>
		</form>
	{/each}
</ul>
