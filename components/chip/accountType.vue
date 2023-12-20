<template>
  <div>
    <v-chip :color="chip[accountType].color">
      <v-icon :icon="chip[accountType].icon"
              class="mr-2" />
      {{ chip[accountType].label }}
    </v-chip>
  </div>
</template>

<script setup lang="ts">
type Props = { accountType: 'agent' | 'client' | 'company' };
const props = defineProps<Props>();

const chip = {
  "company": { icon: icon.company, label: "Company", color: "primary" },
  "agent": { icon: icon.agent, label: "Agent", color: "green" },
  "client": { icon: icon.client, label: "Client", color: "grey-darken-1" }
}
</script>
