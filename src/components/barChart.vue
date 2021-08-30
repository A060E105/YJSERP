<script>
import { Bar } from 'vue-chartjs';

export default {
    name: "barChart",
    extends: Bar,
    props: [
        'chartData'
    ],
    data() {
        return {
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted() {
        this.renderChart(this.chartData, this.options);
    }
}
</script>