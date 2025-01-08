<script setup>
import {ref} from "vue";
import {invoke} from "@tauri-apps/api/core";
import LMenu from "./pages/LMenu.vue";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke("greet", {name: name.value});
}
</script>

<template>
  <div id="container">
    <div class="menu">
      <l-menu/>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#container {
  display: flex;
  flex-direction: row;
}


</style>
