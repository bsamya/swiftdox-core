
<template>
  <div>
    <v-icon :icon="i[status].icon"
            :color="i[status].color"
            class="mr-4" />
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{ status: ProfileStatus }>();

type Icon = { [key: string]: { icon: string, color: string } }
const i: Icon = {
  "approved": {
    "icon": icon.profile.approved,
    "color": "green"
  },
  "declined": {
    "icon": icon.profile.declined,
    "color": "red"
  },
  "pending": {
    "icon": icon.profile.pending,
    "color": "orange"
  },
}

</script>