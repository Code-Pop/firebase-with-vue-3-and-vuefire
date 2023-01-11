<script setup></script>

<template>
  <v-card>
    <v-card-text>
      <slot name="default" />
    </v-card-text>
    <v-card-actions>
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<style></style>
