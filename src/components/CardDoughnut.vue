<template>
    <div class="card">
        <div class="card-header">
            <h2> <slot name="header"></slot> </h2>
        </div>
        <doughnut-chart :data="Data"></doughnut-chart>
    </div>
</template>

<script>
import doughnutChart from './doughnutChart'

export default {
    name: "cardBar",
    props: [
        'Data'
    ],
    components: {
        doughnutChart
    },
}
</script>

<style scoped>

</style>