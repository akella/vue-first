<template>
  <div>
    <header class="header">
      <div class="header__logo">Jetro</div>
      <nav class="header__nav">
        <router-link to="/">Home</router-link>
        <router-link to="post">Post</router-link>
      </nav>
    </header>
    
    <transition name="fade" appear>
    <slot></slot>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style lang="sass">
@import 'bla.sass'
.header
  border-bottom: 100px solid #f1ad9c
  &__logo
    float: left
    font-size: 50px 
  &__nav
      float: right
      white-space: nowrap
      font-size: 15px 
      text-transform: uppercase
      a
        text-decoration: none
        padding: 10px 
        display: inline-block
.fade-enter-active, .fade-leave-active
  transition-property: opacity
  transition-duration: .25s
.fade-enter-active
  transition-delay: .25s
.fade-enter, .fade-leave-active
  opacity: 0
</style>
