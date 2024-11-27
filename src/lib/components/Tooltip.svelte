<script>
  export let text = '';
  let tooltipVisible = false;
  let tooltipElement;
</script>

<div
  class="relative inline-block"
  role="tooltip"
  on:mouseenter={() => tooltipVisible = true}
  on:mouseleave={() => tooltipVisible = false}
>
  <slot />
  {#if tooltipVisible}
    <div
      bind:this={tooltipElement}
      class="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-2 py-1 bg-white text-gray-800 text-sm rounded shadow-lg whitespace-nowrap z-50 border border-gray-300"
    >
      {text}
      <div class="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 border-l border-t border-gray-300"></div>
    </div>
  {/if}
</div>
