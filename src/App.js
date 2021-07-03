import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Grid, Icon, List, Loader, Search, Divider, Button, Dimmer, Image, Placeholder, Segment } from "semantic-ui-react";

class App extends Component {
  render(){
    return (
      <div>
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column verticalAlign='middle' textAlign="center">
              <Icon name="search" size="huge"></Icon>
                <h3>
                  Cari Dokumen
                </h3>
                <Search placeholder="Search Document..." />
            </Grid.Column>

            <Grid.Column verticalAlign='middle' textAlign="center">
                <Icon name="file pdf" size="huge"></Icon>
                <h3>
                  Tambah Dokumen Baru
                </h3>
                <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
          
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Placeholder>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </Segment>

        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Segment>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment>
                <Placeholder>
                  <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
          <Grid.Column>
            <h3>Website Terkait</h3>
            <List>
              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.google.com'>Google</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.google.com'>Facebook</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.semantic-ui.com'>Semantic UI</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.niomic.com'>NIOMIC</a>
                </List.Content>
              </List.Item>

              <List.Item>
                <List.Icon name='linkify' />
                <List.Content>
                  <a href='http://www.react-js.com'>React Js</a>
                </List.Content>
              </List.Item>
              
            </List>
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
