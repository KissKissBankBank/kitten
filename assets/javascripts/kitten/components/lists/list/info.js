export const info = {
  text: `
    # List
    &nbsp;

    ## Import
    ~~~js
    import { List } from '@kisskissbankbank/kitten/src/components/lists/list'
    ~~~

    ## Usage
    &nbsp;

    #### Default
    ~~~js
    <List>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </List>
    ~~~

    #### With ButtonItem
    ~~~js
    <List>
      <List.ButtonItem withTopBorder>
        Item 1
      </List.ButtonItem>
      <List.ButtonItem>
        Item 2
      </List.ButtonItem>
      <List.ButtonItem disabled>
        Item 3
      </List.ButtonItem>
    </List>
    ~~~
  `,
  header: false,
  propTables: false,
}
