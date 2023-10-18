<template>
  <div>
    <canvas id="pieChart" width="600" height="400"></canvas>
  </div>
</template>
  <script>
  export default {
    name: 'BarChart',
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
  