<script>
import { Doughnut } from 'vue-chartjs';

export default {
    name: "doughnutChart",
    extends: Doughnut,
    props: [
        'data'
    ],
    data() {
        return {
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        }
    },
    mounted() {
        this.renderChart(this.data, this.options);
    }
}
</script>