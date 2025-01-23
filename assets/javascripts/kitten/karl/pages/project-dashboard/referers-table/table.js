import React from 'react'
import { DoubleEntryTable } from '../../../../components/tables/double-entry-table'
import { Pagination } from '../../../../components/navigation/pagination'
import styled from 'styled-components'

const StyledPagination = styled(Pagination)`
  text-align: center;
`

export const Table = () => (
  <>
    <DoubleEntryTable id="AllRewardsTable">
      <DoubleEntryTable.Header>
        <DoubleEntryTable.HeaderCol>Source</DoubleEntryTable.HeaderCol>
        <DoubleEntryTable.HeaderCol>Campagne</DoubleEntryTable.HeaderCol>
        <DoubleEntryTable.HeaderCol>
          Montant collecté
        </DoubleEntryTable.HeaderCol>
        <DoubleEntryTable.HeaderCol>Visites</DoubleEntryTable.HeaderCol>
        <DoubleEntryTable.HeaderCol>
          Taux de conversion
        </DoubleEntryTable.HeaderCol>
        <DoubleEntryTable.HeaderCol>
          %&nbsp;collecté sur le&nbsp;total
        </DoubleEntryTable.HeaderCol>
      </DoubleEntryTable.Header>

      <DoubleEntryTable.Body>
        <DoubleEntryTable.Row>
          <DoubleEntryTable.TitleCol>
            https://www.facebook.com/blabla
          </DoubleEntryTable.TitleCol>
          <DoubleEntryTable.Col>lancement</DoubleEntryTable.Col>
          <DoubleEntryTable.Col>350 €</DoubleEntryTable.Col>
          <DoubleEntryTable.Col>3 500</DoubleEntryTable.Col>
          <DoubleEntryTable.Col>27 %</DoubleEntryTable.Col>
          <DoubleEntryTable.Col>27 %</DoubleEntryTable.Col>
        </DoubleEntryTable.Row>
      </DoubleEntryTable.Body>
    </DoubleEntryTable>

    <StyledPagination totalPages={4} currentPage={2} />
  </>
)
