import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

function ChartDoughnut(props) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const chart = () => {
      setChartData({
        labels: [
          "Level 1",
          "Level 2",
          "Level 3",
          "Level 4",
          "Level 5",
          "Level 6",
        ],
        datasets: [
          {
            label: "Complexity Doughnut",
            data: props.data,
            backgroundColor: [
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 255, 255, 0.6)",
              "rgba(255, 255, 51, 0.6)",
              "rgba(0, 128, 255, 0.6)",
              "rgba(255, 128, 0, 0.6)",
              "rgba(255, 0, 0, 0.6)",
            ],
          },
        ],
      });
    };
    chart();
  }, [props.data]);

  return (
    <div className="chart-doughnut">
      <Doughnut
        data={chartData}
        width={180}
        options={{
          plugins: {
            labels: {
              render: () => {},
            },
          },
          cutoutPercentage: 44,
          responsive: true,
          legend: {
            position: "left",
            display: true,
            labels: {
              fontColor: "rgb(255, 99, 132)",
              fontSize: 20,
            },
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                let dataset = data.datasets[tooltipItem.datasetIndex];
                let meta = dataset._meta[Object.keys(dataset._meta)[0]];
                let total = meta.total;
                let currentValue = dataset.data[tooltipItem.index];
                let percentage = parseFloat(
                  ((currentValue / total) * 100).toFixed(1)
                );
                return currentValue + " (" + percentage + "%)";
              },
              title: function (tooltipItem, data) {
                return data.labels[tooltipItem[0].index];
              },
            },
          },
        }}
      />
    </div>
  );
}

export default ChartDoughnut;
