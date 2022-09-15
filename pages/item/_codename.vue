<template>
    <div
        class="w-screen h-screen flex justify-center items-center flex-wrap flex-col"
    >
        <div
            :class="`${contentItem.system.workflow_step} rounded-xl px-3 py-1 text-white capitalize text-sm`"
        >
            {{ contentItem.system.workflow_step }}
        </div>
        <small class="font-bold mb-4 mt-2 text-2xl">{{
            contentType.system.name
        }}</small>
        <h1 class="font-extrabold text-5xl">{{ contentItem.system.name }}</h1>
        <!-- <div class="mt-3 flex flex-row justify-center items-center gap-x-10">
            <div class="font-bold">
                Please click "editor" at the top left corner to edit this item!
            </div>
        </div> -->
        <div class="mt-10">
            <a :href="linkTemplate">
                <button class="btn btn--primary">Edit item</button>
            </a>
        </div>
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

            const contentItem = await $axios.$get(
                `https://preview-deliver.kontent.ai/${KONTENT_PROJECT_ID}/items/${codename}`
            );

            const contentType = await $axios.$get(
                `https://preview-deliver.kontent.ai/${KONTENT_PROJECT_ID}/types/${contentItem.item.system.type}`
            );

            const linkTemplate = `https://app.kontent.ai/goto/edit-item/project/${KONTENT_PROJECT_ID}/variant-codename/${contentItem.item.system.language}/item/${contentItem.item.system.id}`;

            return { contentItem: contentItem.item, contentType, linkTemplate };
        } catch (ex) {
            console.error(ex);
        }
    },
};
</script>
<style>
* {
    background-color: #e7ecf4;
    color: #000;
}

.draft {
    background-color: #db0000;
}

.review {
    background-color: #3655ba;
}

.published {
    background-color: #007f63;
}

.archived {
    background-color: #69707c;
}

.btn--primary {
    background: #db3c00;
    box-shadow: 0 8px 14px 2px #f45c2324, 0 6px 20px 5px #f45c231f,
        0 8px 10px -5px #f45c2333;
    color: #fff;
}

.btn {
    align-items: center;
    border-radius: 5000px;
    border-width: 0;
    cursor: pointer;
    display: flex;
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 700;
    height: 40px;
    justify-content: center;
    letter-spacing: 0.1ch;
    line-height: 16px;
    margin-bottom: 0;
    outline: none;
    padding: 0 24px;
    position: relative;
    text-transform: uppercase;
    touch-action: manipulation;
    transition: all 0.25s cubic-bezier(0.23, 1, 0.32, 1) 50ms, border-width 0ms,
        padding 0ms;
    -webkit-user-select: none;
    user-select: none;
    white-space: nowrap;
}
</style>
