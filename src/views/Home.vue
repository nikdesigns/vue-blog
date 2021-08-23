<template>
  <div class="home">
    <Header />
    <Hero />
    <Featured />
    <Cta />
    <BlogPart />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import Feature from '../components/Feature.vue';
import Featured from '../components/Featured.vue';
import Cta from '../components/Cta.vue';
import BlogPart from '../components/BlogPart.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Header,
    Hero,
    Feature,
    Featured,
    Cta,
    BlogPart,
    Footer,
  },
};
</script>
