<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <CardBar :Data="oneFormatData">
                    <template v-slot:header>
                        原料
                    </template>
                </CardBar>
            </div>
            <div class="col">
                <CardBar :Data="oneFormatData">
                    <template #header>
                        成品
                    </template>
                </CardBar>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <CardBar :Data="twoFormatData">
                    <template #header>
                        新化廠
                    </template>
                </CardBar>
            </div>
            <div class="col">
                <CardBar :Data="twoFormatData">
                    <template #header>
                        安定廠
                    </template>
                </CardBar>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <CardDoughnut :data="threeFormatData">
                    <template #header>
                        粉碎部 - 月產能分析
                    </template>
                </CardDoughnut>
            </div>
            <div class="col">
                <CardDoughnut :data="threeFormatData">
                    <template #header>
                        浮料部 - 月產能分析
                    </template>
                </CardDoughnut>
            </div>
        </div>
    </div>
</template>

<script>
import CardBar from "./CardBar";
import CardDoughnut from "./CardDoughnut";

export default {
    name: "ERP_Chart",
    components: {
        CardBar,
        CardDoughnut
    },
    data() {
        return {
            oneFormatData: {
                labels: ['進貨自產', '委內代工', '下腳料'],
                datasets: [
                    {
                        label: '新化廠',
                        backgroundColor: 'rgba(248, 121, 121, 0.2)',
                        borderColor: 'rgba(248, 121, 121)',
                        borderWidth: 1,
                        data: [50, 20, 30]
                    },
                    {
                        label: '安定廠',
                        backgroundColor: '#7979f8',
                        data: [20, 30, 50]
                    }
                ]
            },
            twoFormatData: {
                labels: ['進貨自產', '委內代工', '下腳料'],
                datasets: [
                    {
                        label: '原料',
                        backgroundColor: '#f87979',
                        data: [20, 35, 40]
                    },
                    {
                        label: '成品',
                        backgroundColor: '#7979f8',
                        data: [15, 23, 18]
                    }
                ]
            },
            threeFormatData: {
                labels: ['早班', '晚班'],
                datasets: [
                    {
                        label: '',
                        backgroundColor: [
                            'rgb(255, 99, 132)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)'
                        ],
                        data: [15, 20]
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>

</style>