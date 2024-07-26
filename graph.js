// Get the context of the canvas element
let ctx = document.getElementById("myChart").getContext("2d");

// Create a new chart
let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2018", "2019", "2020", "2021", "2022"],
    datasets: [{
      label: "iPhone",
      data: [217, 193, 182, 172, 158],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1
    }, {
      label: "Samsung",
      data: [321, 296, 271, 245, 219],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: "iPhone and Samsung Devices Sold (in millions)"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});