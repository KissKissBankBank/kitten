export const horizontalGraphData = {
  thresholds: {
    collected: 100,
    percentages: 100,
  },
  maxValues: {
    collected: 120000,
    percentages: 100,
  },
  rewardsData: [
    {
      id: 1,
      name: 'Bienfaiteur pour 4 ans - 100 €',
      collected: (16600 * 100) / 120000,
      collectedColor: '#19b4fa',
      collectedLegend: 'Argents collectés',
      percentages: 8,
      percentagesColor: '#5a32aa',
      percentagesLegend: '% sur le total',
    },
    {
      id: 2,
      name: 'Bienfaiteur pour 2 ans - 55 €',
      collected: (40000 * 100) / 120000,
      collectedColor: '#19b4fa',
      collectedLegend: 'Argents collectés',
      percentages: 22,
      percentagesColor: '#5a32aa',
      percentagesLegend: '% sur le total',
    },
    {
      id: 3,
      name: 'Bienfaiteur pour 1 an - 30 €',
      collected: (119050 * 100) / 120000,
      collectedColor: '#19b4fa',
      collectedLegend: 'Argents collectés',
      percentages: 85,
      percentagesColor: '#5a32aa',
      percentagesLegend: '% sur le total',
    },
  ],
}
