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
import { orange, orangeLight, purple, purpleLight } from "../../constant/color";
import {getLast7Days} from "../../lib/features";

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

const labels = getLast7Days();

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

const LineChart = ({value}) => {
  const data = {
    labels,
    datasets: [{
      data: value,
      label: "Revenue",
      fill: true,
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

const DoughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  },
  cutout: 120,
};

const DoughnutChart = ({value, labels}) => {
  const data = {
    labels,
    datasets: [{
      data: value,
      label: "Total Chats vs Group Chats",
      fill: true,
      backgroundColor: [purpleLight, orangeLight],
      hoverBackgroundColor: [purple, orange],
      borderColor: [purple, orange],
      offset: 40
    }
  ],
  };
  return <Doughnut style={{zIndex: 10}} data={data} options={DoughnutChartOptions} />;
};

export { LineChart, DoughnutChart };
