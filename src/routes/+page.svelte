<script>
  import ProjectCard from '../components/ProjectCard.svelte';
</script>

<main class="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto p-4">
  <article class="space-y-6">
    <section>
      <h2 class="text-2xl font-bold mb-4">Welcome</h2>
      <div class="flex gap-4">
        <div>
          <p class="leading-relaxed">
            Hello, my name is Mikkel.<br />
            I am a software and web developer located in Denmark.<br />
          </p>
          <p class="mt-4">Some of my interests include:</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Software development</li>
            <li>Web development</li>
            <li>Networking</li>
            <li>Cyber security</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
    </section>
  </article>

  <article class="space-y-6">
    <section>
      <h2 class="text-2xl font-bold mb-4">Skills</h2>
      <ul class="list-disc list-inside columns-2 gap-x-4 space-y-1">
        <li>Azure</li>
        <li>C#</li>
        <li>.NET</li>
        <li>Rust</li>
        <li>Python</li>
        <li>Svelte</li>
        <li>JavaScript</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold mb-4">Projects</h2>
      <div class="space-y-4">
        <ProjectCard
          title="Personal Website"
          description="Built with Svelte and TailwindCSS"
          sourceUrl="https://github.com/mikkelon/overgaard.dev"
        />
      </div>
    </section>
  </article>
</main>
