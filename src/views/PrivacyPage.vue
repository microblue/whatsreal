<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-center gradient-text">{{ $t('privacy.title') }}</h1>
      
      <div class="prose prose-lg max-w-none text-base-content/80 space-y-8">
        <!-- Last Updated -->
        <div class="text-sm text-base-content/60 text-center mb-8">
          {{ $t('privacy.lastUpdated') }}
        </div>

        <!-- Introduction -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('privacy.introduction.title') }}</h2>
          <p>{{ $t('privacy.introduction.content1') }}</p>
          <p>{{ $t('privacy.introduction.content2') }}</p>
        </section>

        <!-- Information We Collect -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('privacy.collect.title') }}</h2>
          <p>{{ $t('privacy.collect.intro') }}</p>
          
          <h3 class="text-xl font-medium mb-3 mt-6">{{ $t('privacy.collect.wallet.title') }}</h3>
          <ul class="list-disc list-inside space-y-2">
            <li>{{ $t('privacy.collect.wallet.item1') }}</li>
            <li>{{ $t('privacy.collect.wallet.item2') }}</li>
            <li>{{ $t('privacy.collect.wallet.item3') }}</li>
          </ul>

          <h3 class="text-xl font-medium mb-3 mt-6">{{ $t('privacy.collect.usage.title') }}</h3>
          <ul class="list-disc list-inside space-y-2">
            <li>{{ $t('privacy.collect.usage.item1') }}</li>
            <li>{{ $t('privacy.collect.usage.item2') }}</li>
            <li>{{ $t('privacy.collect.usage.item3') }}</li>
            <li>{{ $t('privacy.collect.usage.item4') }}</li>
          </ul>

          <h3 class="text-xl font-medium mb-3 mt-6">{{ $t('privacy.collect.technical.title') }}</h3>
          <ul class="list-disc list-inside space-y-2">
            <li>{{ $t('privacy.collect.technical.item1') }}</li>
            <li>{{ $t('privacy.collect.technical.item2') }}</li>
            <li>{{ $t('privacy.collect.technical.item3') }}</li>
          </ul>
        </section>

        <!-- How We Use Information -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('privacy.use.title') }}</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>{{ $t('privacy.use.item1') }}</li>
            <li>{{ $t('privacy.use.item2') }}</li>
            <li>{{ $t('privacy.use.item3') }}</li>
            <li>{{ $t('privacy.use.item4') }}</li>
            <li>{{ $t('privacy.use.item5') }}</li>
            <li>{{ $t('privacy.use.item6') }}</li>
          </ul>
        </section>

        <!-- Information Sharing -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('privacy.sharing.title') }}</h2>
          <p>{{ $t('privacy.sharing.intro') }}</p>
          <ul class="list-disc list-inside space-y-2 mt-4">
            <li>{{ $t('privacy.sharing.item1') }}</li>
            <li>{{ $t('privacy.sharing.item2') }}</li>
            <li>{{ $t('privacy.sharing.item3') }}</li>
            <li>{{ $t('privacy.sharing.item4') }}</li>
          </ul>
        </section>

        <!-- Blockchain Transparency -->
        <section class="bg-info/10 p-6 rounded-xl border border-info/20">
          <h2 class="text-2xl font-semibold mb-4 text-info">{{ $t('privacy.blockchain.title') }}</h2>
          <p>{{ $t('privacy.blockchain.content1') }}</p>
          <p class="mt-4">{{ $t('privacy.blockchain.content2') }}</p>
        </section>

        <!-- Data Security -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('privacy.security.title') }}</h2>
          <p>{{ $t('privacy.security.content1') }}</p>
          <ul class="list-disc list-inside space-y-2 mt-4">
            <li>{{ $t('privacy.security.item1') }}</li>
            <li>{{ $t('privacy.security.item2') }}</li>
            <li>{{ $t('privacy.security.item3') }}</li>
            <li>{{ $t('privacy.security.item4') }}</li>
          </ul>
        </section>

        <!-- Data Retention -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('privacy.retention.title') }}</h2>
          <p>{{ $t('privacy.retention.content1') }}</p>
          <p>{{ $t('privacy.retention.content2') }}</p>
        </section>

        <!-- Your Rights -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('privacy.rights.title') }}</h2>
          <p>{{ $t('privacy.rights.intro') }}</p>
          <ul class="list-disc list-inside space-y-2 mt-4">
            <li>{{ $t('privacy.rights.item1') }}</li>
            <li>{{ $t('privacy.rights.item2') }}</li>
            <li>{{ $t('privacy.rights.item3') }}</li>
            <li>{{ $t('privacy.rights.item4') }}</li>
          </ul>
        </section>

        <!-- Cookies -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('privacy.cookies.title') }}</h2>
          <p>{{ $t('privacy.cookies.content1') }}</p>
          <p>{{ $t('privacy.cookies.content2') }}</p>
        </section>

        <!-- Third-Party Services -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('privacy.thirdParty.title') }}</h2>
          <p>{{ $t('privacy.thirdParty.content1') }}</p>
          <ul class="list-disc list-inside space-y-2 mt-4">
            <li>{{ $t('privacy.thirdParty.item1') }}</li>
            <li>{{ $t('privacy.thirdParty.item2') }}</li>
            <li>{{ $t('privacy.thirdParty.item3') }}</li>
          </ul>
        </section>

        <!-- Changes -->
        <section>
          <h2 class="text-2xl font-semibold mb-4">{{ $t('privacy.changes.title') }}</h2>
          <p>{{ $t('privacy.changes.content') }}</p>
        </section>

        <!-- Contact -->
        <section class="bg-base-200 p-6 rounded-xl">
          <h2 class="text-2xl font-semibold mb-4">{{ $t('privacy.contactSection.title') }}</h2>
          <p>{{ $t('privacy.contactSection.content') }}</p>
          <div class="mt-4 space-y-2">
            <p>
              <strong>{{ $t('privacy.contactSection.email') }}:</strong>
              <a href="mailto:privacy@whatsreal.ai" class="text-primary hover:underline ml-2">
                privacy@whatsreal.ai
              </a>
            </p>
            <p>
              <strong>{{ $t('privacy.contactSection.address') }}:</strong>
              <span class="ml-2">WhatsReal Foundation, Web3 Innovation Hub</span>
            </p>
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