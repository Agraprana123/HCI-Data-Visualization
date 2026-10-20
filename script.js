// ===== Chart.js Config =====
Chart.defaults.color = '#9999b8';
Chart.defaults.borderColor = 'rgba(255,255,255,0.06)';
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.font.size = 11;
Chart.defaults.animation.duration = 800;

const C = {
    indigo: '#6366f1', cyan: '#06b6d4', emerald: '#10b981',
    amber: '#f59e0b', rose: '#f43f5e', violet: '#8b5cf6',
};

// 1. Doughnut — Metode Input
new Chart(document.getElementById('chartDoughnut'), {
    type: 'doughnut',
    data: {
        labels: ['Keyboard', 'Mouse', 'Touchscreen', 'Voice', 'Gesture', 'Stylus'],
        datasets: [{
            data: [35, 28, 22, 8, 4, 3],
            backgroundColor: [C.indigo, C.cyan, C.emerald, C.amber, C.rose, C.violet],
            borderWidth: 0,
        }]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
            legend: { position: 'bottom', labels: { padding: 10, font: { size: 10 }, usePointStyle: true, pointStyle: 'circle' } }
        }
    }
});

// 2. Bar — Efisiensi
new Chart(document.getElementById('chartBar'), {
    type: 'bar',
    data: {
        labels: ['Keyboard', 'Voice', 'Handwriting', 'Gesture', 'Eye Track'],
        datasets: [{
            label: 'WPM',
            data: [65, 120, 22, 15, 10],
            backgroundColor: [C.indigo+'b3', C.cyan+'b3', C.emerald+'b3', C.amber+'b3', C.rose+'b3'],
            borderRadius: 6,
        }]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.04)' } },
            x: { grid: { display: false } }
        }
    }
});

// 3. Radar — Kepuasan
new Chart(document.getElementById('chartRadar'), {
    type: 'radar',
    data: {
        labels: ['Ease of Use', 'Visual Design', 'Performance', 'Accessibility', 'Learnability', 'Error Handling'],
        datasets: [
            { label: 'Web', data: [88,82,90,75,85,78], borderColor: C.indigo, backgroundColor: C.indigo+'22', borderWidth: 2, pointRadius: 3 },
            { label: 'Mobile', data: [85,90,78,70,88,72], borderColor: C.cyan, backgroundColor: C.cyan+'18', borderWidth: 2, pointRadius: 3 },
            { label: 'Desktop', data: [80,75,92,82,78,88], borderColor: C.emerald, backgroundColor: C.emerald+'18', borderWidth: 2, pointRadius: 3 },
        ]
    },
    options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom', labels: { padding: 10, font: { size: 10 }, usePointStyle: true, pointStyle: 'circle' } } },
        scales: { r: { angleLines: { color: 'rgba(255,255,255,0.06)' }, grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { display: false }, suggestedMin: 50, suggestedMax: 100 } }
    }
});

// 4. Horizontal Bar — SUS Score
new Chart(document.getElementById('chartSUS'), {
    type: 'bar',
    data: {
        labels: ['Desktop', 'Web', 'Mobile', 'Voice', 'AR/VR'],
        datasets: [{
            label: 'SUS',
            data: [85.1, 82.5, 78.3, 65.7, 61.2],
            backgroundColor: [C.emerald+'b3', C.indigo+'b3', C.cyan+'b3', C.amber+'b3', C.rose+'b3'],
            borderRadius: 6,
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { beginAtZero: true, max: 100, grid: { color: 'rgba(255,255,255,0.04)' } },
            y: { grid: { display: false } }
        }
    }
});
