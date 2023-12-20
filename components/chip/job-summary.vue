<template>
  <div class="flex gap-2">
    <v-chip>
      <div class="flex gap-2">
        <div v-if="hasShipingDocuments">
          <v-icon>mdi-ferry</v-icon>
          <v-badge color="grey-darken-2"
                   v-if="summary.shippingDocuments.pending"
                   :content="summary.shippingDocuments.pending"
                   inline></v-badge>

          <v-badge color="success"
                   v-if="summary.shippingDocuments.approved"
                   :content="summary.shippingDocuments.approved"
                   inline></v-badge>

          <v-badge color="error"
                   v-if="summary.shippingDocuments.declined"
                   :content="summary.shippingDocuments.declined"
                   inline></v-badge>
        </div>

        <span v-if="hasShipingDocuments && hasLegalDocuments"> | </span>

        <div v-if="hasLegalDocuments">
          <v-icon>mdi-briefcase</v-icon>
          <v-badge color="grey-darken-2"
                   v-if="summary.legalDocuments.pending"
                   :content="summary.legalDocuments.pending"
                   inline></v-badge>
          <v-badge color="success"
                   v-if="summary.legalDocuments.approved"
                   :content="summary.legalDocuments.approved"
                   inline></v-badge>
          <v-badge color="error"
                   v-if="summary.legalDocuments.declined"
                   :content="summary.legalDocuments.declined"
                   inline></v-badge>
        </div>
      </div>
    </v-chip>
  </div>
</template>

<script setup lang="ts">
type JobSummary = {
  summary: {
    shippingDocuments: {
      pending: number;
      approved: number;
      declined: number;
    };
    legalDocuments: {
      pending: number;
      approved: number;
      declined: number;
    };
  };
};

const props = defineProps<JobSummary>();
const hasShipingDocuments = computed(() => {
  return (
    props.summary.shippingDocuments.pending ||
    props.summary.shippingDocuments.approved ||
    props.summary.shippingDocuments.declined
  );
});

const hasLegalDocuments = computed(() => {
  return (
    props.summary.legalDocuments.pending ||
    props.summary.legalDocuments.approved ||
    props.summary.legalDocuments.declined
  );
});
</script>

<style scoped></style>
