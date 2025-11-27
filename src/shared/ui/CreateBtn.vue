<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

interface Props {
    routeName: string;
    titleKey: string;
}

const props = defineProps<Props>();

const { t } = useI18n();
const router = useRouter();

const onClick = () => {
    router.push({
        name: props.routeName,
    });
}
</script>

<template>
    <n-button @click="onClick">
        {{ t(props.titleKey) }}
    </n-button>
</template>

<style scoped>
.n-button {
    margin-bottom: 30px;
}
</style>