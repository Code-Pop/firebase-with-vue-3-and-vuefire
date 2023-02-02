<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { doc, updateDoc } from '@firebase/firestore'
import { useDocument, useFirestore } from 'vuefire'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import FormLayout from '@/layouts/FormLayout.vue'

const db = useFirestore()
const route = useRoute()
const docRef = doc(db, 'cafes', route.params.id)

const cafeSource = useDocument(docRef)

const editCafe = ref({
  name: '',
  location: 'United States',
  rating: 0,
  price: 1,
  description: '',
  favorite: true,
})

watch(cafeSource, (cafeSource) => {
  editCafe.value = {
    ...cafeSource,
  }
})

async function updateCafe() {
  await updateDoc(docRef, {
    ...editCafe.value,
  })
}
</script>

<template>
  <FormLayout>
    <template v-slot:title>
      <h1 class="mb-4">Edit {{ cafeSource?.name ? cafeSource.name : '' }}</h1>
    </template>
    <template v-slot:content>
      <BaseCard>
        <template v-slot:default>
          <BaseForm v-if="editCafe">
            <BaseInput
              v-model="editCafe.name"
              label="Name"
              required
              placeholder="Cafe with a Vue"
            />
            <BaseInput v-model="editCafe.location" label="Location" required />
            <BaseInput
              v-model.number="editCafe.price"
              label="Price"
              type="number"
              min="1"
              max="4"
              required
            />
            <BaseInput
              v-model="editCafe.rating"
              label="Rating"
              type="number"
              min="0"
              max="5"
              step="0.5"
              required
            />
            <BaseInput v-model="editCafe.description" label="Description" />
            <BaseCheckbox v-model="editCafe.favorite" label="Favorite" />
          </BaseForm>
        </template>
        <template v-slot:actions>
          <BaseButton @click="updateCafe" variant="tonal" color="success">
            Save Changes
          </BaseButton>
          <BaseButton to="/" variant="tonal" color="error" outline>
            Cancel
          </BaseButton>
        </template>
      </BaseCard>
    </template>
  </FormLayout>
</template>

<style></style>
