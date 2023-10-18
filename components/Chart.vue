<template>
  <div>
    <canvas id="pieChart" width="400" height="400"></canvas>
  </div>
</template>
  <script>
  //  <Bar :data="chartData" :options="chartOptions" />
  // import { Bar } from 'vue-chartjs'
  // import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  // ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  export default {
    name: 'BarChart',
    // components: { Bar },
    data () {
      return {
        ctx: null,
      }
    },
    props: {
      chartData: {
        type: Object,
        default: () => { return {
          show: true,
          labels: ['Red', 'Blue', 'Yellow'],
          datasets: [{
              data: [30, 40, 30],
          }]
        }}
      },
      chartOptions: {
        type: Object,
        default: () => { return {
            responsive: true,
            maintainAspectRatio: false
        }}
      }
    },
    mounted() {
      this.ctx = document.getElementById('pieChart').getContext('2d');
      this.generateChart()
    },
    methods: {
      generateChart() {
        new Chart(this.ctx, {
            type: 'pie',
            data: this.chartData,
            options: this.chartOptions
        });
      }
    }
  }
  </script>
  