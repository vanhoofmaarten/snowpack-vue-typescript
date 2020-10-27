<template>
  <div class="App">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
header {
  display: flex;
  gap: 0.75rem;
}
</style>
