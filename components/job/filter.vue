<template>
  <div>
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          variant="tonal"
          color="primary"
          :elevation="selectedFilters.length !== 4 ? 8 : 0"
          icon="mdi-filter"
        />
      </template>
      <v-list>
        <v-list-item v-for="item in items" :key="item.key" @click="update('pending')">
          <template v-slot:prepend>
            <v-icon>{{
              selectedFilters.includes(item.key)
                ? "mdi-checkbox-marked-outline"
                : "mdi-checkbox-blank-outline"
            }}</v-icon>
          </template>
          {{ item.title }}
        </v-list-item>

        <v-list-item @click="update('all')">
          <template v-slot:prepend>
            <v-icon>{{
              selectedFilters.length === 4
                ? "mdi-checkbox-multiple-marked-outline"
                : "mdi-checkbox-multiple-blank-outline"
            }}</v-icon>
          </template>
          Show All Jobs
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup lang="ts">
//types
type FilterItem = { key: string; title: string };
type Props = { modelValue: string[]; items: FilterItem[] };

//props & emits
const props = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const selectedFilters = ref<string[]>(props.modelValue);

//if no filter is selected, select all
if (selectedFilters.value.length === 0)
  selectedFilters.value = props.items.map((item) => item.key);

const update = (filter: string) => {
  if (filter === "all") {
    selectedFilters.value = props.items.map((item) => item.key);
  } else if (selectedFilters.value.includes(filter)) {
    selectedFilters.value = selectedFilters.value.filter((f) => f !== filter);
  } else {
    selectedFilters.value.push(filter);
  }

  emit("update:modelValue", selectedFilters.value);
};
</script>
-
