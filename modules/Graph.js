// CHART GRAFICS CONFIG

function Graph() {
  const ctx = document.getElementById('chart').getContext('2d')
  const chartGraph = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Blue', 'Pink', 'Yellow'],
      datasets: [
        {
          data: [5, 2, 3],
          backgroundColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }
      ]
    }
  })

  chartGraph.resize(100, 100)

  const ctxBar = document.getElementById('charBar')
  const chartBar = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Blue', 'Pink', 'Yellow'],
      datasets: [
        {
          label: 'Graphic',
          data: [12, 1, 7.5],
          backgroundColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }
      ]
    }
  })

  const ctxLine = document.getElementById('chartLine')
  const chartLine = new Chart(ctxLine, {
    type: 'line',
    data: {
      labels: ['Blue', 'Pink', 'Yellow'],
      datasets: [
        {
          label: 'Graphic 1',
          data: [12, 1, 7.5],
          backgroundColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }
      ]
    }
  })

  const ctxLine2 = document.getElementById('chartLine2')
  const chartLine2 = new Chart(ctxLine2, {
    type: 'line',
    data: {
      labels: ['Blue', 'Pink', 'Yellow'],
      datasets: [
        {
          label: 'Graphic 2',
          data: [2, 5, 7.5],
          backgroundColor: ['rgba(255, 206, 86, 1)'],
          borderColor: ['rgba(255, 206, 86, 1)'],
          borderWidth: 2
        }
      ]
    }
  })

  const ctxLine3 = document.getElementById('chartLine3')
  const chartLine3 = new Chart(ctxLine3, {
    type: 'line',
    data: {
      labels: ['Blue', 'Pink', 'Yellow'],
      datasets: [
        {
          label: 'Graphic 2',
          data: [1, 10, 4],
          backgroundColor: ['rgba(255, 99, 132, 1)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 3
        }
      ]
    }
  })
}

export default Graph
