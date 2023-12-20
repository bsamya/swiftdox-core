<template>
  <div>
    <v-chip class="ma-2"
            :color="chip.color"
            text-color="white"
            :prepend-icon="chip.icon">
      {{ chip.text }}
    </v-chip>
  </div>
</template>


<script setup lang="ts">
import { certificateType } from "@/composables/constants"

type CertificateTypes = keyof typeof certificateType;

const props = defineProps({
  certificateType: {
    type: String,
    required: true,
  }
})

const chip = computed(() => {
  if (!certificateType[props.certificateType as CertificateTypes]) {
    return {
      color: "grey",
      icon: "mdi-alert",
      text: "Unknown"
    }
  }

  return certificateType[props.certificateType as CertificateTypes];
})
</script>

<style scoped></style>