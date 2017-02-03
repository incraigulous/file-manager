<template>
    <div class="file list-group-item">
        {{ file.name }} <span class="badge">{{ file.mime }}</span>
    </div>
</template>

<script>
    export default {
        props: ['file']
    }
</script>