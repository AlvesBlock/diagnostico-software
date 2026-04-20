<script setup lang="ts">
import BaseInput from '@/components/common/BaseInput.vue';
import LeadUnlockSummary from './LeadUnlockSummary.vue';
import { formatWhatsapp } from '@/utils/masks';
import { useDiagnosisStore } from '@/stores/diagnosis.store';

const store = useDiagnosisStore();

function onWhatsappInput(value: string) {
  store.lead.whatsapp = formatWhatsapp(value);
}
</script>

<template>
  <LeadUnlockSummary>
    <div class="grid gap-4">
      <BaseInput
        v-model="store.lead.name"
        label="Nome"
        placeholder="Seu nome"
        hint="Para personalizar o diagnóstico e facilitar o retorno comercial."
      />
      <BaseInput
        :model-value="store.lead.whatsapp"
        label="WhatsApp"
        placeholder="(11) 99999-9999"
        hint="Canal mais rápido para continuar a conversa, se fizer sentido."
        @update:model-value="onWhatsappInput"
      />
      <BaseInput
        v-model="store.lead.email"
        type="email"
        label="E-mail"
        placeholder="voce@empresa.com"
        hint="Usado para salvar seu resultado e compartilhar a análise depois."
      />
      <BaseInput
        v-model="store.lead.company"
        label="Empresa"
        placeholder="Nome da empresa"
        hint="Opcional, mas ajuda a contextualizar o porte e a maturidade do processo."
      />
    </div>
  </LeadUnlockSummary>
</template>
