import React, { Component, Fragment } from 'react'
import { Pagination } from 'kitten/components/navigation/pagination'
import { Row } from 'kitten/components/grid/row'

export const KarlPaginationExamples = () => (
  <Row>
    <Pagination
      totalPages={ 1 }
      currentPage={ 1 }
    />
    <Pagination
      totalPages={ 2 }
      currentPage={ 1 }
    />
    <Pagination
      totalPages={ 2 }
      currentPage={ 2 }
    />
    <Pagination
      totalPages={ 7 }
      currentPage={ 1 }
    />
    <Pagination
      totalPages={ 42 }
      currentPage={ 1 }
    />
    <Pagination
      totalPages={ 42 }
      currentPage={ 2 }
    />
    <Pagination
      totalPages={ 42 }
      currentPage={ 3 }
    />
    <Pagination
      totalPages={ 42 }
      currentPage={ 4 }
    />
    <Pagination
      totalPages={ 42 }
      currentPage={ 5 }
    />
    <Pagination
      totalPages={ 42 }
      currentPage={ 6 }
    />
    <Pagination
      totalPages={ 42 }
      currentPage={ 38 }
    />
    <Pagination
      totalPages={ 42 }
      currentPage={ 39 }
    />
    <Pagination
      totalPages={ 42 }
      currentPage={ 40 }
    />
    <Pagination
      totalPages={ 42 }
      currentPage={ 41 }
    />
    <Pagination
      totalPages={ 42 }
      currentPage={ 42 }
    />
  </Row>
)
