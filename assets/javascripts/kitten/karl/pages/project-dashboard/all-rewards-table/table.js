import React from 'react'
import { DoubleEntryTable } from '../../../../components/tables/double-entry-table'

export const Table = () => (
  <DoubleEntryTable id="AllRewardsTable">
    <DoubleEntryTable.Header>
      <DoubleEntryTable.HeaderCol>
        Nom de la contrepartie
      </DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>Montant collecté</DoubleEntryTable.HeaderCol>
      <DoubleEntryTable.HeaderCol>
        % collecté du total collecté
      </DoubleEntryTable.HeaderCol>
    </DoubleEntryTable.Header>

    <DoubleEntryTable.Body>
      <DoubleEntryTable.Row>
        <DoubleEntryTable.Col>
          Bienfaiteur pour 1 an - 30 €
        </DoubleEntryTable.Col>
        <DoubleEntryTable.Col>3 500 €</DoubleEntryTable.Col>
        <DoubleEntryTable.Col>27 %</DoubleEntryTable.Col>
      </DoubleEntryTable.Row>
    </DoubleEntryTable.Body>
  </DoubleEntryTable>
)
