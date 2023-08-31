<template>
    <div class="row">
        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Bar Chart Example</h5>
                </div>
                <div class="card-body">
                    <ClientOnly>
                        <apexchart width="100%" type="bar" :height="400" :options="options" :series="series"></apexchart>
                    </ClientOnly>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Area Chart Example</h5>
                </div>
                <div class="card-body">
                    <ClientOnly>
                        <apexchart width="100%" type="area" :height="400" :options="optionsTwo" :series="seriesTwo">
                        </apexchart>
                    </ClientOnly>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const options = ref({
    chart: {
        id: 'vuechart1-example',
        fontFamily: 'Poppins, sans-serif',
        toolbar: {
            show: false
        },
        parentHeightOffset: 0,
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    },
    fill: {
        colors: ['#1b91ff'] // warna chart
    },
    plotOptions: {
        bar: {
            distributed: false, // different color each bar
            columnWidth: '60%',
            borderRadius: 2,
            dataLabels: {
                orientation: 'horizontal',
                position: 'top',
                minItem: 0,
                hideOverflowingLabels: true,
            }
        },
    },

});

const series = ref([{
    name: 'Data Aja',
    data: [30, 40, 45, 50, 49, 60, 70, 91]
}]);


const optionsTwo = ref({
    chart: {
        id: 'vuechart2-example',
        fontFamily: 'Poppins, sans-serif',
        toolbar: {
            show: false
        },
        parentHeightOffset: 0,
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    },
    colors: ['#1b91ff', '#dc3567'], // untuk warna dot dibawah chart
    fill: {
        colors: ['#1b91ff', '#dc3567'], // warna chart
        type: 'gradient',
        gradient: {
            opacityFrom: 0.7,
            opacityTo: 0.3,
            stops: [0, 50, 100]
        }
    },
    stroke: {
        width: 2,
        curve: 'smooth',
    },
    markers: {
        size: 2, // ukuran buletnya di garis area
        shape: "circle",
        radius: 2,
        hover: {
            size: undefined,
            sizeOffset: 1
        }
    },
    legends: {
        show: false
    }
});

const seriesTwo = ref([
    {
        name: 'Pensiunan Taspen',
        data: [30, 49, 60, 70, 91, 61]
    },
    {
        name: 'Pensiunan Asabri',
        data: [45, 60, 66, 82, 68, 106]
    }
]);
</script>