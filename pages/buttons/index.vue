<template>
    <div
        class="w-screen h-screen flex justify-center items-center flex-wrap flex-col"
    >
        <img class="w-72" src="/actumdigital_rgb.png" />
        <div class="mb-5 font-bold italic">
            101 guidelines how to work with sandbox
        </div>
        <a target="_blank" href="https://bit.ly/takrafdemo">
            <button class="btn btn--primary">
                See the assemblies
                <div class="ml-3 bg-transparent">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_2)">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.625 1.5C2.00368 1.5 1.5 2.00368 1.5 2.625V9.375C1.5 9.9963 2.00368 10.5 2.625 10.5H9.375C9.9963 10.5 10.5 9.9963 10.5 9.375V6.38282C10.5 6.17571 10.6679 6.00782 10.875 6.00782C11.0821 6.00782 11.25 6.17571 11.25 6.38282V9.375C11.25 10.4105 10.4105 11.25 9.375 11.25H2.625C1.58947 11.25 0.75 10.4105 0.75 9.375V2.625C0.75 1.58947 1.58947 0.75 2.625 0.75H5.62714C5.83424 0.75 6.00214 0.917895 6.00214 1.125C6.00214 1.33211 5.83424 1.5 5.62714 1.5H2.625ZM7.49951 1.125C7.49951 0.917895 7.6674 0.75 7.87448 0.75H10.875C10.9744 0.75 11.0698 0.78951 11.1402 0.859838C11.2105 0.930158 11.25 1.02554 11.25 1.125V4.12325C11.25 4.33037 11.0821 4.49825 10.875 4.49825C10.6679 4.49825 10.5 4.33037 10.5 4.12325V2.03033L6.70834 5.82198C6.5619 5.96843 6.32447 5.96843 6.17802 5.82198C6.03157 5.67553 6.03157 5.4381 6.17802 5.29166L9.96968 1.5H7.87448C7.6674 1.5 7.49951 1.33211 7.49951 1.125Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_2">
                                <rect width="12" height="12" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </button>
        </a>
    </div>
</template>

<script>
export default {};
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
