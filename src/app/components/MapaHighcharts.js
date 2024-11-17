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
          name: 'São Lourenço dos Orgãos',
          data: [
            ['cv-so', 10],
            ['cv-st', 20],
          ],
          dataLabels: {
            enabled: true,
            format: '{point.name}',
          },
          tooltip: {
            pointFormat: 'Valor: {point.value}',
          },
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
