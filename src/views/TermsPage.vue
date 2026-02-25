<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-center gradient-text">{{ $t('terms.title') }}</h1>
      
      <div class="prose prose-lg max-w-none text-base-content/80 space-y-8">
        <!-- Last Updated -->
        <div class="text-sm text-base-content/60 text-center mb-8">
          {{ $t('terms.lastUpdated') }}
        </div>

        <!-- Introduction -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('terms.introduction.title') }}</h2>
          <p>{{ $t('terms.introduction.content1') }}</p>
          <p>{{ $t('terms.introduction.content2') }}</p>
        </section>

        <!-- Acceptance -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('terms.acceptance.title') }}</h2>
          <p>{{ $t('terms.acceptance.content') }}</p>
        </section>

        <!-- Platform Description -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('terms.platform.title') }}</h2>
          <p>{{ $t('terms.platform.content1') }}</p>
          <p>{{ $t('terms.platform.content2') }}</p>
        </section>

        <!-- User Responsibilities -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('terms.responsibilities.title') }}</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>{{ $t('terms.responsibilities.item1') }}</li>
            <li>{{ $t('terms.responsibilities.item2') }}</li>
            <li>{{ $t('terms.responsibilities.item3') }}</li>
            <li>{{ $t('terms.responsibilities.item4') }}</li>
            <li>{{ $t('terms.responsibilities.item5') }}</li>
          </ul>
        </section>

        <!-- Prohibited Activities -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('terms.prohibited.title') }}</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>{{ $t('terms.prohibited.item1') }}</li>
            <li>{{ $t('terms.prohibited.item2') }}</li>
            <li>{{ $t('terms.prohibited.item3') }}</li>
            <li>{{ $t('terms.prohibited.item4') }}</li>
            <li>{{ $t('terms.prohibited.item5') }}</li>
          </ul>
        </section>

        <!-- Risk Disclosure -->
        <section class="bg-warning/10 p-6 rounded-xl border border-warning/20">
          <h2 class="text-2xl font-semibold mb-4 text-warning">{{ $t('terms.risks.title') }}</h2>
          <p class="mb-4">{{ $t('terms.risks.content1') }}</p>
          <ul class="list-disc list-inside space-y-2">
            <li>{{ $t('terms.risks.item1') }}</li>
            <li>{{ $t('terms.risks.item2') }}</li>
            <li>{{ $t('terms.risks.item3') }}</li>
            <li>{{ $t('terms.risks.item4') }}</li>
          </ul>
        </section>

        <!-- Intellectual Property -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('terms.ip.title') }}</h2>
          <p>{{ $t('terms.ip.content1') }}</p>
          <p>{{ $t('terms.ip.content2') }}</p>
        </section>

        <!-- Disclaimers -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('terms.disclaimers.title') }}</h2>
          <p>{{ $t('terms.disclaimers.content1') }}</p>
          <p>{{ $t('terms.disclaimers.content2') }}</p>
        </section>

        <!-- Limitation of Liability -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('terms.liability.title') }}</h2>
          <p>{{ $t('terms.liability.content') }}</p>
        </section>

        <!-- Governing Law -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('terms.law.title') }}</h2>
          <p>{{ $t('terms.law.content') }}</p>
        </section>

        <!-- Changes -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('terms.changes.title') }}</h2>
          <p>{{ $t('terms.changes.content') }}</p>
        </section>

        <!-- Contact -->
        <section class="bg-base-200 p-6 rounded-xl">
          <h2 class="text-2xl font-semibold mb-4">{{ $t('terms.contactSection.title') }}</h2>
          <p>{{ $t('terms.contactSection.content') }}</p>
          <p class="mt-2">
            <a href="mailto:legal@whatsreal.ai" class="text-primary hover:underline">
              legal@whatsreal.ai
            </a>
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>