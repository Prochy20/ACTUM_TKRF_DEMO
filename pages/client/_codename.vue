<template>
    <!-- <div>
        <pre>
      {{ projects }}
    </pre
        >
        <DownloadDocs />
    </div> -->
    <div
        class="w-screen h-screen flex justify-center items-center flex-wrap flex-col"
    >
        <img
            src="https://www.takraf.com/typo3conf/ext/epx_takraf/Resources/Public/Images/logo-blue-240x71.webp"
            class="w-36 mx-auto"
            style="filter: invert(1)"
        />
        <div class="font-extrabold text-6xl mb-24">
            TAKRAF GmbH Client Sandbox
        </div>
        <small class="font-bold mb-4 mt-2 text-2xl">🏭 Client</small>
        <h1 class="font-extrabold text-5xl">{{ client.system.name }}</h1>
        <div class="mt-10 text-lg">
            <div class="grid grid-cols-6 gap-x-5 mb-2">
                <div class="font-bold">📁 Project</div>
                <div class="font-bold">👀 Project type</div>
                <div class="font-bold">📅 Start date</div>
                <div class="font-bold">📅 Due Date</div>
                <div class="font-bold">🚜 Equipment / Machines</div>
                <div class="font-bold">💼 Documents</div>
            </div>
            <div
                v-for="(project, index) in projects"
                :key="index"
                class="grid grid-cols-6 mt-24"
            >
                <div>
                    {{ project.item.system.name }}
                </div>
                <div>
                    {{ project.item.elements['_project_type'].value[0].name }}
                </div>
                <div v-if="project.item.elements['_start_date'].value">
                    {{
                        new Date(
                            project.item.elements['_start_date'].value
                        ).toLocaleString()
                    }}
                </div>
                <div v-if="!project.item.elements['_start_date'].value">
                    N/A
                </div>
                <div v-if="project.item.elements['_due_date'].value">
                    {{
                        new Date(
                            project.item.elements['_due_date'].value
                        ).toLocaleString()
                    }}
                </div>
                <div v-if="!project.item.elements['_start_date'].value">
                    N/A
                </div>
                <div>
                    <div
                        v-for="(machine, machineIndex) in project.item.elements[
                            '_equipment___machines'
                        ].value"
                        :key="machineIndex"
                    >
                        {{ machineIndex + 1 }}.
                        {{ project.modular_content[machine].system.name }}
                    </div>
                </div>
                <div>
                    <DownloadDocs />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DownloadDocs from '~/components/downloadDocs.vue';
export default {
    name: 'MachinePage',
    components: { DownloadDocs },
    async asyncData({
        params,
        $axios,
        $config: { KONTENT_PROJECT_ID, KONTENT_PREVIEW_TOKEN },
        error,
    }) {
        try {
            const { codename } = params;
            $axios.setToken(KONTENT_PREVIEW_TOKEN, 'Bearer');
            const client = await $axios.$get(
                `https://preview-deliver.kontent.ai/${KONTENT_PROJECT_ID}/items/${codename}`
            );
            const {
                elements: {
                    subpages: { value: subProjects },
                },
            } = client.item;
            const subProjectPromise = [];
            subProjects.forEach((subProject) => {
                const request = $axios.$get(
                    `https://preview-deliver.kontent.ai/${KONTENT_PROJECT_ID}/items/${subProject}?depth=4`
                );
                subProjectPromise.push(request);
            });
            const allowedValues = [
                '_project_type',
                '_start_date',
                '_due_date',
                '_equipment___machines',
            ];
            const subProjectsDataRaw = await Promise.all(subProjectPromise);
            return {
                client: client.item,
                projects: subProjectsDataRaw,
                allowedValues,
            };
        } catch (ex) {
            // eslint-disable-next-line no-console
            console.error(ex);
        }
    },
};
</script>
<style>
body {
    background-color: rgb(27, 27, 27);
    color: #fff;
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
