<template>
    <div class="card">
        <div class="card-header">
            <h2><slot name="header"></slot></h2>
        </div>
        <bar-chart :chartData="Data"></bar-chart>
    </div>
</template>

<script>
import barChart from "./barChart";

export default {
    name: "cardBar",
    props: [
        'Data'
    ],
    components: {
        barChart
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>

</style>