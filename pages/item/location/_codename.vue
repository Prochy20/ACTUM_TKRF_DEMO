<template>
    <div
        class="w-screen h-screen flex justify-center items-center flex-wrap flex-col"
    >
        <img class="w-64 mb-2" src="/actumdigital_rgb.png" />
        <div class="font-extrabold text-6xl">TAKRAF GmbH Sandbox</div>
        <div class="mb-24 mt-4 text-lg">
            Please start with selecting item in the content tree on the
            left-hand side.
        </div>
        <small class="font-bold mb-4 mt-2 text-2xl">{{
            contentType.system.name
        }}</small>
        <h1 class="font-extrabold text-5xl">{{ contentItem.system.name }}</h1>
        <div class="mt-10">
            <button
                class="btn btn--primary"
                :data-kontent-item-id="contentItem.system.id"
            >
                Edit item
            </button>
        </div>
        <div
            class="mt-24 flex flex-col justify-center items-center gap-y-5 font-semibold"
        >
            <div>
                💡 Are you missing something? Try to check the documentation
            </div>
            <DownloadDocs />
        </div>
    </div>
</template>

<script>
import KontentSmartLink from '@kentico/kontent-smart-link';
import DownloadDocs from '~/components/downloadDocs.vue';

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
            return {
                contentItem: contentItem.item,
                contentType,
                KONTENT_PROJECT_ID,
                KONTENT_PREVIEW_TOKEN,
            };
        } catch (ex) {
            // eslint-disable-next-line no-console
            console.error(ex);
        }
    },
    mounted() {
        const kontentSmartLink = KontentSmartLink.initializeOnLoad({
            debug: true,
            defaultDataAttributes: {
                projectId: this.KONTENT_PROJECT_ID,
                languageCodename: 'default',
            },
        });
        // eslint-disable-next-line no-console
        kontentSmartLink.catch((ex) => console.log(ex));
    },
    components: { DownloadDocs },
};
</script>
<style>
body {
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

:root {
    --ksl-color-background-default: transparent;
    --ksl-color-background-default-disabled: transparent;
    --ksl-color-background-default-hover: transparent;
    --ksl-color-background-secondary: transparent;
    --ksl-color-background-default-selected: transparent;
    --ksl-color-primary: transparent;
    --ksl-color-primary-transparent: transparent;
    --ksl-color-primary-hover: transparent;
    --ksl-color-text-default: transparent;
    --ksl-color-text-default-disabled: transparent;
    --ksl-color-text-secondary: transparent;
    --ksl-shadow-default: none;
    --ksl-shadow-primary: none;
    --ksl-z-index: 9000;
}
</style>
