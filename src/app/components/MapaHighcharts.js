"use client"; // Indica que este é um componente de cliente

import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highmaps';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMapModule from 'highcharts/modules/map';
import cvMapData from './maps/cv-all.geo.json';

// Inicializa o módulo de mapas
HighchartsMapModule(Highcharts);

const MapaHighcharts = () => {
    const [options, setOptions] = useState(null);

    useEffect(() => {
        setOptions({
            chart: {
                map: cvMapData,
            },
            title: {
                text: 'Mapa Interativo de Cabo Verde',
            },
            subtitle: {
                text: 'Clique em uma ilha para ver mais detalhes',
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom',
                },
            },
            series: [
                {
                    data: [
                        ['cv-br', 10,], ['cv-ma', 11], ['cv-6566', 12], ['cv-6567', 13],
                        ['cv-6570', 14], ['cv-sf', 15], ['cv-mo', 16], ['cv-cf', 17],
                        ['cv-ta', 18], ['cv-ca', 19], ['cv-sm', 20], ['cv-cr', 21],
                        ['cv-ss', 22], ['cv-so', 23], ['cv-sd', 24], ['cv-rs', 25],
                        ['cv-pr', 26], ['cv-6568', 27], ['cv-6569', 28], ['cv-6571', 29],
                        ['cv-6572', 30], ['cv-6573', 31]
                    ],
                    name: 'Ilhas',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    dataLabels: {
                        enabled: false,
                        format: '{point.name}'
                    }
                },
            ],
        });
    }, []);

    if (!options) {
        return <div>Carregando...</div>;
    }

    return <HighchartsReact highcharts={Highcharts} constructorType={'mapChart'} options={options} />;
};

export default MapaHighcharts;
