<script>
  // import type { CustomBlockComponentProps } from '@portabletext/svelte'
  export let portableText

  // $: console.log(JSON.stringify(portableText, null, 2))

</script>

{#if portableText.value.alt}
  <img src={portableText.value.url} alt={portableText.value.alt} />
{/if}