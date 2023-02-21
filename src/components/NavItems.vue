<script setup>
import { useCurrentUser, useFirebaseAuth } from 'vuefire'
import { signOut } from '@firebase/auth'
import BaseButton from './base/BaseButton.vue'

const user = useCurrentUser()
console.log(user)

const auth = useFirebaseAuth()

async function signOutOfFirebase() {
  signOut(auth)
    .then(() => {
      console.log('Logged out!')
    })
    .catch((error) => {
      console.error(error)
    })
}
</script>

<template>
  <nav class="pr-4">
    <BaseButton to="/">Home</BaseButton>
    <BaseButton to="/new">New</BaseButton>
    <BaseButton v-if="user?.email" @click="signOutOfFirebase"
      >Sign Out</BaseButton
    >
    <BaseButton v-else to="/sign-in">Sign-In</BaseButton>
  </nav>
</template>

<style></style>
