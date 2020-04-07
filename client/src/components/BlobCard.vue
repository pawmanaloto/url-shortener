<template>
    <div class="w-1/3 px-3 pb-6">
        <div class="flex flex-col justify-center items-center rounded shadow p-6">
            <div class="inline-flex justify-center items-center border border-gray-400 w-20 h-20">
                <fa-icon :icon="icon" class="fa-3x"/>
            </div>

            <h3 class="text-3xl font-bold" v-text="titleBlob"></h3>
            <p v-text="content"></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: [String, Array],
        titleBlob: {
            type: String,
            required: true
        }, 
        content: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptates quidem voluptas velit eligendi aspernatur asperiores quis. Maiores, incidunt nostrum.'
        },
    }
}
</script>