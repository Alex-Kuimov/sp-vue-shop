<script setup lang="ts">
import { Label } from '@/shared/ui'

interface Option {
  value: string
  label: string
}

interface Props {
  options: Option[]
  label?: string
  id?: string
  required?: boolean
}

const value = defineModel<string>()

withDefaults(defineProps<Props>(), {
  label: '',
  id: undefined,
  required: false
})
</script>

<template>
  <div class="select-field">
    <Label v-if="label" :for="id">{{ label }}</Label>
    <select 
      v-model="value" 
      :id="id" 
      :required="required"
      class="select"
    >
      <option value="">Выберите значение</option>
      <option 
        v-for="option in options" 
        :key="option.value" 
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.select-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}
</style>