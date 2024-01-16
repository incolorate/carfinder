<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const handleLogout = () => {
  supabase.auth.signOut();
  navigateTo("/login");
};
</script>

<template>
  <header
    class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md"
  >
    <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
    <div>
      <button @click="handleLogout" v-if="user">Sign out</button>
      <button @click="navigateTo('/login')" v-if="!user">Log in</button>
      <button @click="navigateTo('/profile/listings')" class="ml-3">
        My profile
      </button>
    </div>
  </header>
</template>
