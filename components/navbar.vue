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
    <button @click="handleLogout" v-if="user">Sign out</button>
    <button @click="navigateTo('/login')" v-else>Log in</button>
  </header>
</template>
