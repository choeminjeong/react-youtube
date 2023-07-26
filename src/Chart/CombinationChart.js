import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

function CombinationChart({ title, view, lastview, date }) {
  const chartRef = useRef(null);
  const minValue = Math.min(...view);
  const maxValue = Math.max(...view);
  
  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;
    if (chartInstance) {
      chartInstance.options.animation = {
        duration: 1000,
        easing: "easeInOutQuad",
        from: { opacity: 0, scale: 0 },
        to: { opacity: 1, scale: 1 },
      };
      chartInstance.update();
    }
  }, [view, lastview, date]);

  const chartData = {
    labels: date,
    datasets: [
      {
        label: "과거 조회수",
        data: view,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, .5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        pointStyle: "rectRot",
        pointRadius: 5,
        spanGaps: true,
      },
      {
        label: "예측 조회수",
        data: lastview,
        fill: true,
        backgroundColor: "rgba(200, 224, 254, .5)",
        borderColor: "rgba(200, 224, 254, 1)",
        borderWidth: 2,
        pointStyle: "rectRot",
        pointRadius: 5,
        borderDash: [5, 5],
        spanGaps: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: true,
    },
    scales: {
      x: {
        grid: {
          color: "white",
        },
        beginAtZero: true,
      },
      y: {
        grid: {
          color: "white",
        },
        ticks: {
          min: minValue,
          max: maxValue,
          stepSize: (maxValue - minValue) / 5,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: title,
        position: "top",
        color: "black",
        font: {
          size: 30,
        },
      },
      legend: {
        display: true,
        labels: {
          boxWidth: 30,
          boxHeight: 12,
          color: "black",
          font: {
            size: 15,
          },
        },
        position: "top",
      },
    },
  };

  return <Line ref={chartRef} data={chartData} options={options} />;
}

export default CombinationChart;
