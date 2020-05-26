import GRAPH_COLORS from '../common/constants/graph-colors'

export const horizontalGraphData = {
  thresholds: {
    collected: 100,
    percentages: 100,
  },
  maxValues: {
    collected: 120000, // Math.ceil(119050 / 10000) * 10000
    percentages: 100,
  },
  rewardsData: [
    {
      name: 'Bienfaiteur pour 8 ans - 100 €',
      collected: (16600 * 100) / 120000,
      collectedColor: GRAPH_COLORS.graphColorA,
      collectedLegend: 'Argents collectés',
      percentages: 8,
      percentagesColor: GRAPH_COLORS.graphColorB,
      percentagesLegend: '% sur le total',
    },
    {
      name: 'Bienfaiteur pour 7 ans - 55 €',
      collected: (40000 * 100) / 120000,
      collectedColor: GRAPH_COLORS.graphColorA,
      collectedLegend: 'Argents collectés',
      percentages: 22,
      percentagesColor: GRAPH_COLORS.graphColorB,
      percentagesLegend: '% sur le total',
    },
    {
      name: 'Bienfaiteur pour 6 an - 30 €',
      collected: (119050 * 100) / 120000,
      collectedColor: GRAPH_COLORS.graphColorA,
      collectedLegend: 'Argents collectés',
      percentages: 85,
      percentagesColor: GRAPH_COLORS.graphColorB,
      percentagesLegend: '% sur le total',
    },
    {
      name: 'Bienfaiteur pour 4 ans - 100 €',
      collected: (16600 * 100) / 120000,
      collectedColor: GRAPH_COLORS.graphColorA,
      collectedLegend: 'Argents collectés',
      percentages: 8,
      percentagesColor: GRAPH_COLORS.graphColorB,
      percentagesLegend: '% sur le total',
    },
    {
      name: 'Bienfaiteur pour 2 ans - 55 €',
      collected: (40000 * 100) / 120000,
      collectedColor: GRAPH_COLORS.graphColorA,
      collectedLegend: 'Argents collectés',
      percentages: 22,
      percentagesColor: GRAPH_COLORS.graphColorB,
      percentagesLegend: '% sur le total',
    },
    {
      name: 'Bienfaiteur pour 1 an - 30 €',
      collected: (119050 * 100) / 120000,
      collectedColor: GRAPH_COLORS.graphColorA,
      collectedLegend: 'Argents collectés',
      percentages: 85,
      percentagesColor: GRAPH_COLORS.graphColorB,
      percentagesLegend: '% sur le total',
    },
  ],
}
