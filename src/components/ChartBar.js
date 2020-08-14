import React, { useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";

function ChartBar(props) {
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
            label: "Complexity Bar",
            data: props.data,
            backgroundColor: [
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 255, 255, 0.6)",
              "rgba(255, 255, 51, 0.6)",
              "rgba(0, 128, 255, 0.6)",
              "rgba(255, 128, 0, 0.6)",
              "rgba(255, 0, 0, 0.6)",
            ],
            borderWidth: 4,
          },
        ],
      });
    };
    chart();
  }, [props.data]);

  return (
    <div className="chart-bar">
      <HorizontalBar
        data={chartData}
        height={250}
        options={{
          responsive: true,
          legend: {
            display: false,
            labels: {
              fontColor: "rgb(255, 99, 132)",
              fontSize: 22,
            },
          },
          scales: {
            xAxes: [
              {
                stacked: true,
              },
            ],
            yAxes: [
              {
                stacked: true,
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default ChartBar;
