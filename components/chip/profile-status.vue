<template>
  <div>
    <v-chip class="ma-2"
            :color="chip[status].color"
            text-color="white"
            :prepend-icon="chip[status].icon">
      {{ chip[status].text }}
    </v-chip>
  </div>
</template>


<script setup lang="ts">
type Chip = { [key: string]: { icon: string, color: string, text: string } }

const props = defineProps({
  status: {
    type: String,
    required: true,
  }
})

const chip: Chip = {
  'approved': {
    icon: icon.profile.approved,
    color: 'green',
    text: 'Approved'
  },
  'pending': {
    icon: icon.profile.pending,
    color: '#FF6F00',
    text: 'Pending'
  },
  'declined': {
    icon: icon.profile.declined,
    color: 'red',
    text: 'Declined'
  },
}


</script>

<style scoped></style>