<template>
  <div class="pa-3">
    <h3>{{ course.name }}</h3>
    <v-select
      v-model="correntIndex"
      :items="course.episodes.map((v, i) => ({ text: v.name, value: i }))"
    ></v-select>
    <video width="100%" :src="episode.file" controls></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correntIndex: 0
    }
  },
  computed: {
    episode() {
      return this.course.episodes[this.correntIndex]
    }
  },
  async asyncData({ params, $axios }) {
    const { id } = params
    const course = await $axios.$get(`courses/${id}`, {
      params: {
        query: { populate: 'episodes' }
      }
    })
    return {
      id,
      course
    }
  }
}
</script>

<style></style>
