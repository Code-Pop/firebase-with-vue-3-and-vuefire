<script setup>
import { ref, computed } from 'vue'
import SidebarLayout from '@/layouts/SidebarLayout.vue'
import CafeCard from '@/components/CafeCard.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'

import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'

const db = useFirestore()

const cafeCollection = useCollection(collection(db, 'cafes'))

const filterParams = ref({
  text: '',
  favorite: false,
})

const filteredCafes = computed(() => {
  return cafeCollection.value.filter((cafe) => {
    return (
      cafe.name.toLowerCase().includes(filterParams.value.text.toLowerCase()) &&
      (filterParams.value.favorite ? cafe.favorite : true)
    )
  })
})
</script>

<template>
  <SidebarLayout>
    <template v-slot:sidebar>
      <BaseContainer>
        <h2 class="mb-4">Filter</h2>
        <BaseForm>
          <BaseInput v-model="filterParams.text" label="Name" />
          <BaseCheckbox v-model="filterParams.favorite" label="Favorited" />
        </BaseForm>
      </BaseContainer>
    </template>

    <template v-slot:main>
      <BaseContainer>
        <h2 class="mb-4">Content</h2>
        <CafeCard
          v-for="cafe in filteredCafes"
          v-bind="cafe"
          :docId="cafe.id"
          :key="cafe.id"
        />
      </BaseContainer>
    </template>
  </SidebarLayout>
</template>

<style></style>
