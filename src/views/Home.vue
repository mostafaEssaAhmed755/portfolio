<template>
  <div class="home">
    <!-- Hero Section -->
    <section
      id="hero"
      class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div class="absolute inset-0 grid-bg opacity-30"></div>
      <div
        class="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary-500/5"
      ></div>

      <!-- Floating Particles -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          v-for="i in 20"
          :key="i"
          class="particle"
          :style="getParticleStyle(i)"
        ></div>
      </div>

      <div class="container mx-auto px-4 lg:px-8 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Badge -->
          <div
            class="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 animate-fade-in"
          >
            <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span class="text-sm font-medium">{{ t.hero.badge }}</span>
          </div>

          <!-- Title -->
          <h1
            class="text-5xl md:text-7xl font-display font-bold mb-6 animate-slide-up"
            style="animation-delay: 0.1s"
          >
            <span class="block mb-2">{{ t.hero.title }}</span>
            <span class="gradient-text">Mostafa Essa Ahmed</span>
          </h1>

          <!-- Subtitle -->
          <p
            class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up"
            style="animation-delay: 0.2s"
          >
            {{ t.hero.subtitle }}
          </p>

          <!-- CTAs -->
          <div
            class="flex flex-wrap items-center justify-center gap-4 animate-slide-up"
            style="animation-delay: 0.3s"
          >
            <a
              href="#contact"
              @click.prevent="scrollTo('#contact')"
              class="btn-primary inline-flex items-center gap-2"
            >
              {{ t.hero.cta.hire }}
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#projects"
              @click.prevent="scrollTo('#projects')"
              class="btn-secondary"
              >{{ t.hero.cta.projects }}</a
            >
            <a
              href="/Mostafa-Essa-Resume.pdf"
              download="Mostafa_Essa_Resume.pdf"
              class="btn-secondary inline-flex items-center gap-2"
            >
              {{ t.hero.cta.cv }}
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
      >
        <svg
          class="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 md:py-32 relative">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <!-- Visual -->
          <div class="reveal">
            <div class="relative">
              <div
                class="card card-hover relative aspect-square max-w-md mx-auto overflow-hidden"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary-500/20"
                ></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div
                    class="text-8xl md:text-9xl font-display font-bold gradient-text"
                  >
                    ME
                  </div>
                </div>
              </div>
              <div
                class="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-full"
              ></div>
              <div
                class="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary-500/30 rounded-full"
              ></div>
            </div>
          </div>

          <!-- Content -->
          <div class="reveal" style="transition-delay: 0.1s">
            <span
              class="text-accent font-semibold text-sm uppercase tracking-wider"
              >{{ t.about.label }}</span
            >
            <h2 class="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
              {{ t.about.title }}
            </h2>

            <div class="space-y-4 text-gray-600 dark:text-gray-300">
              <p v-for="(para, idx) in t.about.description" :key="idx">
                {{ para }}
              </p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-6 mt-8">
              <div v-for="(stat, key) in stats" :key="key">
                <div
                  class="text-3xl md:text-4xl font-display font-bold gradient-text"
                >
                  {{ stat.value }}<span class="text-accent">+</span>
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {{ t.about.stats[key] }}
                </div>
              </div>
            </div>

            <!--  section for Download CV -->
            <div class="mt-8">
              <a
                href="/Mostafa-Essa-Resume.pdf"
                download="Mostafa_Essa_Resume.pdf"
                class="inline-flex items-center gap-3 px-6 py-3 bg-accent text-gray-900 rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/50 transform hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <svg
                  class="w-5 h-5 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section
      id="skills"
      class="py-20 md:py-32 bg-gray-50/50 dark:bg-gray-900/50"
    >
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 reveal">
          <span
            class="text-accent font-semibold text-sm uppercase tracking-wider"
            >{{ t.skills.label }}</span
          >
          <h2 class="text-4xl md:text-5xl font-display font-bold mt-4 mb-4">
            {{ t.skills.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            {{ t.skills.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(category, key) in t.skills.categories"
            :key="key"
            class="card card-hover reveal"
            :style="`transition-delay: ${
              Object.keys(t.skills.categories).indexOf(key) * 0.1
            }s`"
          >
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center"
              >
                <span class="text-2xl">{{ categoryIcons[key] }}</span>
              </div>
              <h3 class="font-display font-semibold text-lg">
                {{ category.title }}
              </h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(item, idx) in category.items"
                :key="idx"
                class="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-accent/10 hover:text-accent transition-colors cursor-default"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Experience Section -->
    <section id="experience" class="py-20 md:py-32">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 reveal">
          <span
            class="text-accent font-semibold text-sm uppercase tracking-wider"
            >{{ t.experience.label }}</span
          >
          <h2 class="text-4xl md:text-5xl font-display font-bold mt-4 mb-4">
            {{ t.experience.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            {{ t.experience.description }}
          </p>
        </div>

        <div class="max-w-4xl mx-auto relative">
          <!-- Timeline Line -->
          <div
            class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-transparent hidden md:block"
          ></div>

          <div class="space-y-12">
            <div
              v-for="(company, idx) in t.experience.companies"
              :key="idx"
              class="reveal relative"
              :style="`transition-delay: ${idx * 0.1}s`"
            >
              <!-- Timeline Dot -->
              <div
                class="absolute left-[26px] top-6 w-4 h-4 rounded-full bg-accent border-4 border-white dark:border-gray-950 hidden md:block glow"
              ></div>

              <!-- Content -->
              <div class="md:ml-20 card card-hover">
                <div
                  class="flex flex-wrap items-start justify-between gap-4 mb-4"
                >
                  <div>
                    <div class="flex items-center gap-3 mb-2">
                      <h3 class="text-xl md:text-2xl font-display font-bold">
                        {{ company.name }}
                      </h3>
                      <span
                        v-if="idx === 0"
                        class="text-xs px-3 py-1 rounded-full bg-accent/20 text-accent font-semibold"
                        >{{ t.experience.current }}</span
                      >
                    </div>
                    <p class="text-gray-600 dark:text-gray-400">
                      {{ company.role }}
                    </p>
                  </div>
                  <div
                    class="text-right text-sm text-gray-500 dark:text-gray-400"
                  >
                    <div>{{ company.period }}</div>
                    <div>{{ company.location }}</div>
                  </div>
                </div>

                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  {{ company.description }}
                </p>

                <ul class="space-y-2">
                  <li
                    v-for="(highlight, hIdx) in company.highlights"
                    :key="hIdx"
                    class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      class="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {{ highlight }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section
      id="projects"
      class="py-20 md:py-32 bg-gray-50/50 dark:bg-gray-900/50"
    >
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 reveal">
          <span
            class="text-accent font-semibold text-sm uppercase tracking-wider"
            >{{ t.projects.label }}</span
          >
          <h2 class="text-4xl md:text-5xl font-display font-bold mt-4 mb-4">
            {{ t.projects.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            {{ t.projects.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div
            v-for="(project, idx) in t.projects.items"
            :key="idx"
            class="card card-hover group cursor-pointer reveal"
            :style="`transition-delay: ${idx * 0.1}s`"
            @click="selectedProject = project"
          >
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3
                  class="text-xl font-display font-bold mb-1 group-hover:text-accent transition-colors"
                >
                  {{ project.title }}
                </h3>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{
                  project.category
                }}</span>
              </div>
              <svg
                class="w-6 h-6 text-accent group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>

            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tech, techIdx) in project.tech.slice(0, 4)"
                :key="techIdx"
                class="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
              >
                {{ tech }}
              </span>
              <span
                v-if="project.tech.length > 4"
                class="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500"
              >
                +{{ project.tech.length - 4 }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Services Section -->
    <section id="services" class="py-20 md:py-32">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 reveal">
          <span
            class="text-accent font-semibold text-sm uppercase tracking-wider"
            >{{ t.services.label }}</span
          >
          <h2 class="text-4xl md:text-5xl font-display font-bold mt-4 mb-4">
            {{ t.services.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            {{ t.services.description }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(service, idx) in t.services.items"
            :key="idx"
            class="card card-hover text-center reveal"
            :style="`transition-delay: ${idx * 0.1}s`"
          >
            <div class="text-5xl mb-4">{{ service.icon }}</div>
            <h3 class="text-xl font-display font-bold mb-3">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              {{ service.description }}
            </p>
            <ul class="space-y-2 text-left">
              <li
                v-for="(feature, fIdx) in service.features"
                :key="fIdx"
                class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <svg
                  class="w-4 h-4 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="py-20 md:py-32 bg-gray-50/50 dark:bg-gray-900/50"
    >
      <div class="container mx-auto px-4 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12 reveal">
            <span
              class="text-accent font-semibold text-sm uppercase tracking-wider"
              >{{ t.contact.label }}</span
            >
            <h2 class="text-4xl md:text-5xl font-display font-bold mt-4 mb-4">
              {{ t.contact.title }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300">
              {{ t.contact.description }}
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- Contact Form -->
            <div class="card reveal">
              <form @submit.prevent="handleSubmit" class="space-y-4">
                <input
                  v-model="form.name"
                  type="text"
                  required
                  :placeholder="t.contact.form.name"
                  class="w-full px-4 py-3 rounded-lg glass focus:ring-2 focus:ring-accent outline-none transition-all"
                />
                <input
                  v-model="form.email"
                  type="email"
                  required
                  :placeholder="t.contact.form.email"
                  class="w-full px-4 py-3 rounded-lg glass focus:ring-2 focus:ring-accent outline-none transition-all"
                />
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  :placeholder="t.contact.form.message"
                  class="w-full px-4 py-3 rounded-lg glass focus:ring-2 focus:ring-accent outline-none transition-all resize-none"
                ></textarea>
                <button
                  type="submit"
                  :disabled="submitting"
                  class="w-full btn-primary"
                >
                  {{
                    submitting ? t.contact.form.sending : t.contact.form.send
                  }}
                </button>
                <p
                  v-if="submitStatus === 'success'"
                  class="text-sm text-green-600 dark:text-green-400"
                >
                  {{ t.contact.form.success }}
                </p>
                <p
                  v-if="submitStatus === 'error'"
                  class="text-sm text-red-600 dark:text-red-400"
                >
                  {{ t.contact.form.error }}
                </p>
              </form>
            </div>

            <!-- Contact Info -->
            <div class="space-y-6 reveal" style="transition-delay: 0.1s">
              <a
                :href="`mailto:${contactInfo.email}`"
                class="card card-hover flex items-center gap-4 group"
              >
                <div
                  class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                >
                  <svg
                    class="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {{ t.contact.info.email }}
                  </div>
                  <div class="font-semibold">{{ contactInfo.email }}</div>
                </div>
              </a>

              <a
                :href="`tel:${contactInfo.phone}`"
                class="card card-hover flex items-center gap-4 group"
              >
                <div
                  class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                >
                  <svg
                    class="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {{ t.contact.info.phone }}
                  </div>
                  <div class="font-semibold">{{ contactInfo.phone }}</div>
                </div>
              </a>

              <div class="card flex items-center gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {{ t.contact.info.location }}
                  </div>
                  <div class="font-semibold">
                    {{ t.contact.info.locationValue }}
                  </div>
                </div>
              </div>

              <!-- Download CV Card -->
              <a
                href="/Mostafa-Essa-Resume.pdf"
                download="Mostafa_Essa_Resume.pdf"
                class="card card-hover flex items-center gap-4 group cursor-pointer"
              >
                <div
                  class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                >
                  <svg
                    class="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Resume
                  </div>
                  <div
                    class="font-semibold group-hover:text-accent transition-colors"
                  >
                    Download PDF
                  </div>
                </div>
              </a>

              <!-- Social Links -->
              <div class="flex gap-4 pt-4">
                <a
                  :href="contactInfo.github"
                  target="_blank"
                  class="w-12 h-12 rounded-lg glass hover:bg-accent/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
                <a
                  :href="contactInfo.linkedin"
                  target="_blank"
                  class="w-12 h-12 rounded-lg glass hover:bg-accent/10 flex items-center justify-center transition-all hover:scale-110"
                >
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Modal -->
    <transition name="modal">
      <div
        v-if="selectedProject"
        @click="selectedProject = null"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      >
        <div
          @click.stop
          class="glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        >
          <div class="flex items-start justify-between mb-6">
            <div>
              <h3 class="text-2xl font-display font-bold mb-1">
                {{ selectedProject.title }}
              </h3>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{
                selectedProject.category
              }}</span>
            </div>
            <button
              @click="selectedProject = null"
              class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <p class="text-gray-600 dark:text-gray-300 mb-6">
            {{ selectedProject.description }}
          </p>

          <div class="space-y-4 mb-6">
            <div>
              <h4 class="font-semibold mb-2 flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                Problem
              </h4>
              <p class="text-gray-600 dark:text-gray-300">
                {{ selectedProject.problem }}
              </p>
            </div>

            <div>
              <h4 class="font-semibold mb-2 flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Solution
              </h4>
              <p class="text-gray-600 dark:text-gray-300">
                {{ selectedProject.solution }}
              </p>
            </div>

            <div>
              <h4 class="font-semibold mb-2 flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                Outcome
              </h4>
              <p class="text-gray-600 dark:text-gray-300">
                {{ selectedProject.outcome }}
              </p>
            </div>
          </div>

          <div>
            <h4 class="font-semibold mb-3">Technologies Used</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(tech, idx) in selectedProject.tech"
                :key="idx"
                class="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Floating Download CV Button -->
    <transition name="fade">
      <a
        v-if="showDownloadButton"
        href="/Mostafa-Essa-Resume.pdf"
        download="Mostafa_Essa_Resume.pdf"
        class="fixed bottom-24 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-accent to-primary-500 text-gray-900 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all z-40 group"
        title="Download Resume"
        aria-label="Download Resume"
      >
        <svg
          class="w-6 h-6 group-hover:animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </a>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useLanguage } from "../composables/useLanguage";
import { useScrollAnimation } from "../composables/useScrollAnimation";
import emailjs from "@emailjs/browser";
import { EMAIL_CONFIG } from "../config/emailjs";

const { t } = useLanguage();
useScrollAnimation();

const stats = {
  experience: { value: 3 },
  projects: { value: 10 },
  companies: { value: 3 },
};

const categoryIcons = {
  backend: "⚙️",
  frontend: "🖼️",
  database: "🗄️",
  auth: "🔐",
  devops: "🚀",
  integrations: "🔗",
  testing: "🧪",
  other: "🌐",
};

const contactInfo = {
  email: "mostafa.essa.ahmed755@gmail.com",
  phone: "+201030124613",
  github: "https://github.com/mostafaEssaAhmed755",
  linkedin: "https://www.linkedin.com/in/mostafa-essa-a540bb1ab",
};

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitting = ref(false);
const submitStatus = ref(null);
const selectedProject = ref(null);

const handleSubmit = async () => {
  submitting.value = true;
  submitStatus.value = null;

  try {
    // Initialize EmailJS
    emailjs.init(EMAIL_CONFIG.publicKey);

    // Prepare template parameters
    const templateParams = {
      title: "Job Inquiry from Portfolio",
      time: new Date().toLocaleString(),
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
    };

    // Send email
    await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams
    );

    submitStatus.value = "success";
    form.value = { title: "", time: "", name: "", email: "", message: "" };
  } catch (error) {
    console.error("Email send error:", error);
    submitStatus.value = "error";
  } finally {
    submitting.value = false;
    setTimeout(() => {
      submitStatus.value = null;
    }, 5000);
  }
};

const scrollTo = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    const offset = 80;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const getParticleStyle = (index) => {
  const size = Math.random() * 4 + 2;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const duration = Math.random() * 10 + 15;
  const delay = Math.random() * 5;

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}%`,
    top: `${y}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };
};

const showDownloadButton = ref(false);

onMounted(() => {
  const handleScroll = () => {
    showDownloadButton.value = window.scrollY > 500;
  };

  window.addEventListener("scroll", handleScroll);

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  setTimeout(() => {
    const event = new Event("scroll");
    window.dispatchEvent(event);
  }, 100);
});
</script>
<style scoped>
.particle {
  position: absolute;
  background: linear-gradient(135deg, #c8ff00, #22c55e);
  border-radius: 50%;
  opacity: 0.1;
  animation: float-particle infinite ease-in-out;
}

@keyframes float-particle {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.2);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.8);
  }
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .glass,
.modal-leave-active .glass {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .glass,
.modal-leave-to .glass {
  transform: scale(0.9);
  opacity: 0;
}

/* Download button animation */
.btn-download {
  position: relative;
  overflow: hidden;
}

.btn-download::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-download:hover::before {
  width: 300px;
  height: 300px;
}

/* Floating button pulse */
@keyframes pulse-ring {
  0% {
    transform: scale(0.9);
    opacity: 1;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.floating-download::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  animation: pulse-ring 1.5s infinite;
}
</style>
