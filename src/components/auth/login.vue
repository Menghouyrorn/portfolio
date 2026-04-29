<template>
  <el-card class="w-sm m-auto mt-36 " shadow="hover">
    <template #header>
        <h1 class="text-lg uppercase font-bold text-gray-500">Login</h1>
    </template>
    <el-form>
      <el-form-item
        label-position="top"
        label="Email"
        class="col-span-2"
      >
        <el-input v-model="email" type="email" placeholder="Email" />
      </el-form-item>
      <el-form-item
        label-position="top"
        label="Password"
        class="col-span-2"
      >
        <el-input v-model="password" type="password" placeholder="Password" />
      </el-form-item>
    </el-form>
    <el-button type="primary">Login</el-button>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

let email = ref("");
let password = ref("");
</script>

<style lang="scss" scoped></style>
