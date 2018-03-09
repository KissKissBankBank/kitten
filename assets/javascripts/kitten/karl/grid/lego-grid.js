import React from 'react';
import { Grid, GridCol } from 'kitten/components/grid/grid';
import { LegoGrid } from 'kitten/components/grid/lego-grid';

export const KarlLegoGrid = () => {
  const masonryProps = {
    options: {
      transitionDuration: 0
    }
  };

  const cards = [
    { key: 'card-1', height: '100px' },
    { key: 'card-2', height: '200px' },
    { key: 'card-3', height: '340px' },
    { key: 'card-4', height: '140px' },
    { key: 'card-5', height: '240px' },
    { key: 'card-6', height: '400px' },
    { key: 'card-7', height: '190px' },
    { key: 'card-8', height: '330px' },
    { key: 'card-9', height: '330px' },
    { key: 'card-10', height: '280px' }
  ];

  return (
    <div className="k-DevGrid__container k-DevGrid__container--withoutOutline">
      <Grid>
        <GridCol col="12">
          <LegoGrid masonryProps={masonryProps}>
            {cards.map(card => (
              <LegoGrid.Item key={card.key}>
                <div
                  className="karl-ProjectCard"
                  style={{ height: card.height }}
                />
              </LegoGrid.Item>
            ))}
          </LegoGrid>
        </GridCol>
      </Grid>
    </div>
  );
};
