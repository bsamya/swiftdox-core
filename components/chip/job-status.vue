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
  'pending': {
    icon: icon.task.pending,
    color: '#FF6F00',
    text: 'Pending'
  },
  "completed": {
    icon: icon.task.completed,
    color: 'green',
    text: 'Completed'
  },
  "withdrawn": {
    icon: icon.task.withdrawn,
    color: 'red',
    text: 'Withdrawn'
  },
  "draft": {
    icon: icon.task.draft,
    color: 'grey',
    text: 'Draft'
  },

}


</script>

<style scoped></style>