<template>

  <div id="marko">

	  <message>Hello Marko</message>

	  <message>How are you?</message>

	  <message>What are you doing today?</message>

  </div>

</template>

<script>

	import Message from './components/Message.vue';

	export default {

	  name: 'app',

	  components: { Message },

	  data () {

	    return {


	    }
	  }
}

</script>

<style lang="scss">



</style>
