import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
} from "chart.js";
import { purple, purpleLight } from "../../constant/color";

ChartJs.register(
  Tooltip,
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const LineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
      Title: {
        display: false
      }
  },

  scales: {
    x: {
      grid: {
        display: false,
      }
    },
    y: {
      grid: {
        beginAtZero: true,
        display: false,
      }
    },
  }
};

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
      data: [1,9,3,4],
      label: "Revenue",
      fill: false,
      backgroundColor: purpleLight,
      borderColor: purple
    }
  ],
  };
  return (
    <>
      <Line data={data} options={LineChartOptions} />
    </>
  );
};

const DoughnutChart = () => {
  return <div>Charts</div>;
};

export { LineChart, DoughnutChart };
