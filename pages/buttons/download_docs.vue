<template>
    <div
        class="w-screen h-screen flex justify-center items-center flex-wrap flex-col"
    >
        <img class="w-72" src="/actumdigital_rgb.png" />
        <div class="mb-5 font-bold italic">
            101 guidelines how to work with sandbox
        </div>
        <DownloadDocs />
    </div>
</template>

<script>
import DownloadDocs from '../../components/downloadDocs.vue';
export default { components: { DownloadDocs } };
</script>

<style>
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
