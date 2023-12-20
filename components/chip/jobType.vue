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
import { jobType } from "@/composables/constants"
type JobTypes = keyof typeof jobType;

const props = defineProps({
  jobType: {
    type: String,
    required: true,
  }
})

const chip = computed(() => {
  return jobType[props.jobType as JobTypes];
})
</script>

<style scoped></style>