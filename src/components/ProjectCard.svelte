<script lang="ts">
  export let title: string;
  export let description: string;
  export let sourceUrl: string;
</script>

<div class="border rounded-lg p-4 hover:shadow-md transition-shadow">
  <h3 class="font-semibold">{title}</h3>
  <p class="text-sm mt-2">{description}</p>
  <a href={sourceUrl} target="_blank" class="text-blue-600 text-sm hover:underline">View Source →</a>
</div> 