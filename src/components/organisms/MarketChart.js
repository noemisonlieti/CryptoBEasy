import { useEffect, useRef } from "react";
import { Chart } from 'chart.js';
import 'chart.js/auto';



export default function MarketChart(){

    

    const chartRef = useRef(null);

    useEffect(() => {

        const chart = new Chart(chartRef.current, 
            {
                type: 'line',
                data: {
                    labels: ['Jun 2022', 'Jul 2022', 'Aug 2022', 'Sep 2022', 'Oct 2022', 'Nov 2022', 'Dec 2022', 'Jan 2023','Feb 2023', 'Mar 2023', 'Apr 2023', 'May 2023', 'Jun 2023' ],
                    datasets: [
                        {
                            label: 'Bitcoin trend',
                            data: [20060, 21979, 21587, 19904, 19851, 15938, 15730, 21105, 22599, 26167, 25092, 25279, 28079 ],
                            backgroundColor: 'rgba(0, 210, 251, 0.2)',
                            borderColor: 'rgb(0, 210, 251)',
                            borderWidth: 1,
                            fill: true,

                        },
                    ],            
                },

                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false, // Nasconde la label del grafico
                          
                        },

                    },

                    scales: {
                        x: {
                            display: false, //con false nascondo le labels dei mesi
                            maxTicksLimit: 1, // Imposta il numero massimo di labels visualizzate
                            ticks: {
                                autoSkip: true,
                                maxRotation: 0, // Imposta la rotazione a 0 gradi per le labels
                                
                            },
                        },
                    },
                    
                  },

            }
    
        );
    
        return () => {
          
          chart.destroy();
        };
    }, []);
    
    return <canvas ref={chartRef} className="bg-white shadow-MiddleBlue shadow rounded-xl px-2 py-1"/>;

};

