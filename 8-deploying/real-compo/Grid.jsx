import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleDividedNumber = () => (
  <Grid className="reworkGrid" columns={2} divided>
    <Grid.Row className="reworkRow">
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column> </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row className="reworkRow">
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column> </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row className="reworkRow">
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
      <Grid.Column> </Grid.Column>
      <Grid.Column>
        <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleDividedNumber
