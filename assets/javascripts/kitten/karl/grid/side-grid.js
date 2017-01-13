import React from 'react'
import { SideGrid,
         SideGridContent,
         SideGridAside } from 'kitten/components/grid/side-grid'

export const KarlSideGridWithRightAside = () => {
  return (
    <SideGrid>
      <SideGridContent>
        <p>
          Cat ipsum dolor sit amet, lick sellotape and meowzer!
          Hopped up on catnip. Purr kitty power! and damn that dog or poop on
          grasses so rub whiskers on bare skin act innocent meowing non stop
          for food thug cat.
        </p>
      </SideGridContent>

      <SideGridAside>
        <p>
          Cat ipsum dolor sit amet, lick sellotape and meowzer!
          Hopped up on catnip. Purr kitty power! and damn that dog or poop on
          grasses so rub whiskers on bare skin act innocent meowing non stop
          for food thug cat.
        </p>
      </SideGridAside>
    </SideGrid>
  )
}

export const KarlSideGridWithLeftAsideAndSmallSize = () => {
  return (
    <SideGrid asidePosition="Start" asideSize="Small">
      <SideGridAside>
        <p>
          Cat ipsum dolor sit amet, lick sellotape and meowzer!
          Hopped up on catnip. Purr kitty power! and damn that dog or poop on
          grasses so rub whiskers on bare skin act innocent meowing non stop
          for food thug cat.
        </p>
      </SideGridAside>

      <SideGridContent>
        <p>
          Cat ipsum dolor sit amet, lick sellotape and meowzer!
          Hopped up on catnip. Purr kitty power! and damn that dog or poop on
          grasses so rub whiskers on bare skin act innocent meowing non stop
          for food thug cat.
        </p>
      </SideGridContent>
    </SideGrid>
  )
}
