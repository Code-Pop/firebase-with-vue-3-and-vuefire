<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFirestore } from 'vuefire'
import { collection, addDoc } from 'firebase/firestore'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'

const db = useFirestore()
const router = useRouter()

const newCafe = ref({
  name: '',
  rating: 0,
  location: 'United States',
  price: 1,
  favorite: false,
})

// Add a new document with a generated id.
async function addCafe() {
  const newDoc = await addDoc(collection(db, 'cafes'), {
    ...newCafe.value,
  })

  if (newDoc.id) {
    router.push('/')
  }
}
</script>

<template>
  <BaseContainer>
    <h1 class="mb-4">New Cafe</h1>
    <BaseCard>
      <template v-slot:default>
        <BaseForm>
          <BaseInput
            v-model="newCafe.name"
            label="Name"
            required
            placeholder="Cafe with a Vue"
          />
          <BaseInput
            v-model="newCafe.rating"
            label="Rating"
            type="number"
            min="0"
            max="5"
            step="0.5"
            required
          />
          <BaseInput v-model="newCafe.location" label="Location" required />
          <BaseInput
            v-model.number="newCafe.price"
            label="Price"
            type="number"
            min="1"
            max="4"
            required
          />
          <BaseCheckbox v-model="newCafe.favorite" label="Favorite" />
        </BaseForm>
      </template>
      <template v-slot:actions>
        <BaseButton @click="addCafe" variant="tonal" color="success">
          Add New Cafe
        </BaseButton>
        <BaseButton variant="tonal" color="error" outline> Cancel </BaseButton>
      </template>
    </BaseCard>
  </BaseContainer>
</template>

<style></style>
