<script setup>
import Hero from './Hero.vue'
import About from './About.vue'
import Portfolio from './Portfolio.vue'
import Experience from './Experience.vue'
import Footer from './Footer.vue'
</script>

<template>
  <div class="home">
    <Hero />
    <About />
    <Portfolio />
    <Experience />
    <Footer />
  </div>
</template>

<style scoped>
.home {
  width: 100%;
}
</style>
