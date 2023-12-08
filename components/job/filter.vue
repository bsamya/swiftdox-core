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
        <v-list-item @click="updateFilters('pending')">
          <template v-slot:prepend>
            <v-icon>{{
              selectedFilters.includes("pending")
                ? "mdi-checkbox-marked-outline"
                : "mdi-checkbox-blank-outline"
            }}</v-icon>
          </template>
          Show Pending Jobs
        </v-list-item>

        <v-list-item @click="updateFilters('completed')">
          <template v-slot:prepend>
            <v-icon>{{
              selectedFilters.includes("completed")
                ? "mdi-checkbox-marked-outline"
                : "mdi-checkbox-blank-outline"
            }}</v-icon>
          </template>
          Show Completed Jobs
        </v-list-item>

        <v-list-item @click="updateFilters('draft')">
          <template v-slot:prepend>
            <v-icon>{{
              selectedFilters.includes("draft")
                ? "mdi-checkbox-marked-outline"
                : "mdi-checkbox-blank-outline"
            }}</v-icon>
          </template>
          Show Draft Jobs
        </v-list-item>

        <v-list-item @click="updateFilters('withdrawn')">
          <template v-slot:prepend>
            <v-icon>{{
              selectedFilters.includes("withdrawn")
                ? "mdi-checkbox-marked-outline"
                : "mdi-checkbox-blank-outline"
            }}</v-icon>
          </template>
          Show Withdrawn Jobs
        </v-list-item>

        <v-list-item @click="updateFilters('all')">
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
const selectedFilters = inject("selectedFilters") as Ref<string[]>;

const updateFilters = (filter: string) => {
  if (filter === "all") {
    selectedFilters.value = ["pending", "completed", "draft", "withdrawn"];
  } else if (selectedFilters.value.includes(filter)) {
    selectedFilters.value = selectedFilters.value.filter((f) => f !== filter);
  } else {
    selectedFilters.value.push(filter);
  }
};
</script>

<style scoped></style>
