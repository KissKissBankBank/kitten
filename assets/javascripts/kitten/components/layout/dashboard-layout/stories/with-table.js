import React, { useState } from 'react'
import {
  Title,
  Button,
  DashboardLayout,
  FlexWrapper,
  Text,
} from 'kitten'
import { Default as Table } from 'kitten/components/organisms/tables/list-table/list-table.stories.js'

export const StoryWithTable = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div>
        <Title
          modifier="quinary"
          className="k-u-margin-none k-u-margin-bottom-triple"
        >
          Curabitur blandit tempus porttitor.
          <Button variant="orion" onClick={() => setOpen(!isOpen)}>
            Toggle Toaster
          </Button>
        </Title>
      </div>
      <div className="k-DashboardLayout__fullWidth">
        <Table />
      </div>
      <DashboardLayout.Toaster isOpen={isOpen}>
        <FlexWrapper gap={10} direction="row" className="k-u-flex-alignItems-center">
          <div style={{flex: '1 0 auto'}} className="k-u-hidden@xs-down">
            <Text color="background1" size="tiny" weight="regular">Text</Text>
          </div>
          <Button modifier="boron" variant="orion" size="tiny" className="k-u-hidden@m-down">
            Hello
          </Button>
          <Button modifier="helium" variant="orion" size="tiny">
            Hello
          </Button>
        </FlexWrapper>
      </DashboardLayout.Toaster>
    </>
  )
}
