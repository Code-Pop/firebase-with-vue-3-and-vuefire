<script setup>
import BaseImage from './BaseImage.vue'
</script>

<template>
  <v-card dark class="mb-4">
    <v-row>
      <v-col cols="3">
        <v-container>
          <slot name="image" />
        </v-container>
      </v-col>
      <v-col>
        <v-card-item>
          <v-card-title>
            <slot name="title" />
          </v-card-title>

          <v-card-subtitle>
            <slot name="subtitle" />
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <slot name="rating" />
          </v-row>

          <div class="my-4 text-subtitle-1">
            <slot name="price" />
          </div>

          <slot name="description" />
        </v-card-text>
        <v-card-actions>
          <slot name="actions" />
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<style></style>
