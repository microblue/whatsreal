<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-center gradient-text">{{ $t('about.title') }}</h1>
      
      <div class="prose prose-lg max-w-none text-base-content/80 space-y-8">
        <!-- Mission -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('about.mission.title') }}</h2>
          <p>{{ $t('about.mission.content') }}</p>
        </section>

        <!-- What We Do -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('about.whatWeDo.title') }}</h2>
          <p>{{ $t('about.whatWeDo.content1') }}</p>
          <p>{{ $t('about.whatWeDo.content2') }}</p>
        </section>

        <!-- Technology -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('about.technology.title') }}</h2>
          <p>{{ $t('about.technology.content1') }}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div class="bg-base-200 p-6 rounded-xl">
              <h3 class="font-semibold mb-2">{{ $t('about.technology.ai.title') }}</h3>
              <p class="text-sm">{{ $t('about.technology.ai.desc') }}</p>
            </div>
            <div class="bg-base-200 p-6 rounded-xl">
              <h3 class="font-semibold mb-2">{{ $t('about.technology.web3.title') }}</h3>
              <p class="text-sm">{{ $t('about.technology.web3.desc') }}</p>
            </div>
            <div class="bg-base-200 p-6 rounded-xl">
              <h3 class="font-semibold mb-2">{{ $t('about.technology.lmsr.title') }}</h3>
              <p class="text-sm">{{ $t('about.technology.lmsr.desc') }}</p>
            </div>
            <div class="bg-base-200 p-6 rounded-xl">
              <h3 class="font-semibold mb-2">{{ $t('about.technology.realtime.title') }}</h3>
              <p class="text-sm">{{ $t('about.technology.realtime.desc') }}</p>
            </div>
          </div>
        </section>

        <!-- Vision -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('about.vision.title') }}</h2>
          <p>{{ $t('about.vision.content1') }}</p>
          <p>{{ $t('about.vision.content2') }}</p>
        </section>

        <!-- Team -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('about.team.title') }}</h2>
          <p>{{ $t('about.team.content') }}</p>
        </section>

        <!-- Contact -->
        <section class="bg-base-200 p-8 rounded-xl text-center">
          <h2 class="text-2xl font-semibold mb-4">{{ $t('about.contactSection.title') }}</h2>
          <p class="mb-6">{{ $t('about.contactSection.content') }}</p>
          <div class="flex justify-center gap-4">
            <a href="mailto:contact@whatsreal.ai" class="btn gradient-bg text-white border-0">
              {{ $t('about.contactSection.email') }}
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>