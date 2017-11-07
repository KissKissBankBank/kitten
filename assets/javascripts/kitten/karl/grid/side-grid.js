import React from 'react'
import {
  SideGrid,
  SideGridContent,
  SideGridAside,
} from 'kitten/components/grid/side-grid'

export const KarlSideGridWithRightAside = () => {
  return (
    <SideGrid>
      <SideGridContent>
        <p>
          Has autem provincias, quas Orontes ambiens amnis imosque pedes Cassii
          montis illius celsi praetermeans funditur in Parthenium mare, Gnaeus
          Pompeius superato Tigrane regnis Armeniorum abstractas dicioni Romanae
          coniunxit.
        </p>
      </SideGridContent>

      <SideGridAside>
        <p>
          Et eodem impetu Domitianum praecipitem per scalas itidem funibus constrinxerunt,
          eosque coniunctos per ampla spatia civitatis acri raptavere discursu.
          iamque artuum et membrorum divulsa conpage superscandentes corpora
          mortuorum ad ultimam truncata deformitatem velut exsaturati.
        </p>
      </SideGridAside>
    </SideGrid>
  )
}

export const KarlSideGridWithLeftAsideAndSmallSize = () => {
  return (
    <SideGrid asidePosition="start" asideSize="small">
      <SideGridAside>
        <p>
          Nec vox accusatoris ulla licet subditicii in his malorum quaerebatur
          acervis ut saltem specie tenus crimina praescriptis legum committerentur,
          quod aliquotiens fecere principes saevi: sed quicquid Caesaris.
        </p>
      </SideGridAside>

      <SideGridContent>
        <p>
          Haec igitur prima lex amicitiae sanciatur, ut ab amicis honesta petamus,
          amicorum causa honesta faciamus, ne exspectemus quidem, dum rogemur;
          studium semper adsit, cunctatio absit; consilium vero dare audeamus libere.
        </p>
      </SideGridContent>
    </SideGrid>
  )
}
