<template>
    <div class="container">
        <h1>{{ data.system.name }}</h1>
        <b>Please click "editor" button to edit this item</b>
    </div>
</template>

<script>
export default {
    name: 'MachinePage',

    async asyncData({
        params,
        $axios,
        $config: { KONTENT_PROJECT_ID, KONTENT_PREVIEW_TOKEN },
        error,
    }) {
        try {
            const { codename } = params;

            $axios.setToken(KONTENT_PREVIEW_TOKEN, 'Bearer');

            const data = await $axios.$get(
                `https://preview-deliver.kontent.ai/${KONTENT_PROJECT_ID}/items/${codename}`
            );

            return { data: data.item };
        } catch (ex) {
            console.error(ex);
        }
    },
};
</script>
<style>
* {
    background-color: #d1d9f5;
    color: #000 !important;
}
.container {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
}
</style>
