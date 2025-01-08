<template>
  <div>
    <Knob v-model="value" :max="100" :min="0" :size="150" @wheel="onwheel"/>
    音量控制
  </div>
</template>

<script setup>
import Knob from 'primevue/knob';
import {onMounted, ref} from "vue";

const value = ref(0);

let startTime;

let speed = 1;

const onwheel = (event) => {

  if (startTime != null) {
    let curTime = Date.now();
    // 如果间隔时间大于1s ， 则重置计时
    console.log("时间间隔", curTime - startTime)
    if ((curTime - startTime) / 1000 > 0.5) {
      startTime = null;
      speed = 1;
      if (speed > 5) {
        speed = 5;
      }
    } else {
      startTime = curTime;
      speed += 0.1;
    }
  } else {
    startTime = Date.now();
  }
  console.log("开始时间", startTime);
  console.log("当前速度:", speed);

  if (event.deltaY > 0) {
    value.value = Math.round(value.value -= speed);
    if (value.value <= 0) {
      value.value = 0;
    }
  } else {
    value.value = Math.round(value.value += speed);
    if (value.value >= 100) {
      value.value = 100;
    }
  }
}

onMounted(() => {
  console.log("加载电脑控制面板")
})


</script>

<style scoped>

</style>