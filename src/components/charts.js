import Chart from "chart.js/auto";

function getTheme() {
  const rootStyles = getComputedStyle(document.documentElement);

  const primary =
    rootStyles.getPropertyValue("--brand-primary").trim() ||
    rootStyles.getPropertyValue("--teal").trim() ||
    "#0f766e";
  const secondary =
    rootStyles.getPropertyValue("--brand-secondary").trim() ||
    rootStyles.getPropertyValue("--amber").trim() ||
    "#c77d1f";
  const primaryRgb =
    rootStyles.getPropertyValue("--brand-primary-rgb").trim() || "15, 118, 110";
  const secondaryRgb =
    rootStyles.getPropertyValue("--brand-secondary-rgb").trim() || "199, 125, 31";
  const chartText =
    rootStyles.getPropertyValue("--chart-text").trim() || "#667085";
  const chartGrid =
    rootStyles.getPropertyValue("--chart-grid").trim() || "rgba(148, 163, 184, 0.22)";

  return {
    primary,
    secondary,
    primaryFill: `rgba(${primaryRgb}, 0.2)`,
    secondaryFill: `rgba(${secondaryRgb}, 0.2)`,
    chartText,
    chartGrid,
  };
}

function createBaseOptions(theme) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: theme.chartText },
      },
      y: {
        beginAtZero: true,
        grid: { color: theme.chartGrid },
        ticks: { color: theme.chartText, precision: 0 },
      },
    },
  };
}

export function createLineChart(canvas, labels, values, datasetLabel) {
  const theme = getTheme();
  const baseOptions = createBaseOptions(theme);

  return new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: datasetLabel,
          data: values,
          borderColor: theme.primary,
          backgroundColor: theme.primaryFill,
          pointRadius: 3,
          tension: 0.25,
          fill: true,
        },
      ],
    },
    options: baseOptions,
  });
}

export function createDualLineChart(
  canvas,
  labels,
  primaryValues,
  primaryLabel,
  secondaryValues,
  secondaryLabel,
) {
  const theme = getTheme();
  const baseOptions = createBaseOptions(theme);

  return new Chart(canvas, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: primaryLabel,
          data: primaryValues,
          borderColor: theme.primary,
          backgroundColor: theme.primaryFill,
          pointRadius: 3,
          pointHoverRadius: 4,
          tension: 0.25,
          fill: false,
        },
        {
          label: secondaryLabel,
          data: secondaryValues,
          borderColor: theme.secondary,
          backgroundColor: theme.secondaryFill,
          pointRadius: 3,
          pointHoverRadius: 4,
          tension: 0.25,
          fill: false,
        },
      ],
    },
    options: {
      ...baseOptions,
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            boxWidth: 14,
            boxHeight: 8,
            color: theme.chartText,
          },
        },
      },
    },
  });
}

export function createBarChart(canvas, labels, values, datasetLabel) {
  const theme = getTheme();
  const baseOptions = createBaseOptions(theme);

  return new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: datasetLabel,
          data: values,
          borderRadius: 8,
          backgroundColor: theme.secondary,
        },
      ],
    },
    options: baseOptions,
  });
}

export function createDoughnutChart(canvas, labels, values) {
  const theme = getTheme();

  return new Chart(canvas, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: [theme.primary, theme.secondary],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: theme.chartText,
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
      },
    },
  });
}
