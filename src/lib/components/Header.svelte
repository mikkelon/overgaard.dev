<script>
  import Tooltip from './Tooltip.svelte';
</script>

<header class="flex flex-col gap-2 items-center">
  <h1>overgaard.dev</h1>
  <div class="flex gap-2">
    <a class="link" href="/">home</a>
    <span>/</span>
    <Tooltip text="Blog coming soon!">
      <a class="link-disabled" href="/">blog</a>
    </Tooltip>
    <span>/</span>
    <a class="link" href="https://github.com/mikkelon" target="_blank">
      github
    </a>
    <span>/</span>
    <a
      class="link"
      href="https://www.linkedin.com/in/mikkelon/"
      target="_blank"
    >
      linkedin
    </a>
    <span>/</span>
    <a
      class="link"
      href="https://bsky.app/profile/overgaard.dev"
      target="_blank"
    >
      bluesky
    </a>
  </div>
</header>

<style>
</style>


