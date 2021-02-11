import React from 'react';
import { inject, observer } from 'mobx-react';
import withSidebarLayout from '../layouts/withSidebarLayout';
import { Card, Col, Row, Input, Button } from 'antd';
import { get } from 'lodash';

const { Meta } = Card;

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movieName: 'x-men'
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    try {
      const resp = await this.props.movieStore.onGetMovies(this.state.movieName);
      console.log("RESPONSE: ", resp);
      const data = get(resp, 'Search', []);
      this.setState({movies: data});
    } catch (error) {
      console.log("ERROR: ",error);
    }
  }

  render() {
    
    return (
      <div>
        <h1>Movies</h1><br/>
        <Row style={{paddingBottom: 20}}>
          <Col md={4}>
            <Input placeholder={'Enter movie name'} defaultValue={this.state.movieName} onChange={(e) => this.setState({movieName: e.target.value})}/>
          </Col>
          <Col md={3}>
            <Button type={'primary'} onClick={() => this.fetchMovies()}>Search</Button>
          </Col>
        </Row>
        <Row gutter={[16, 16]} >
            {
            get(this.state, 'movies', []).map((movie) => (
              <Col xs={12} sm={6} md={4} key={movie.imdbID}>
                <Card hoverable style={{ width: 240 }} cover={<img alt="example" src={movie.Poster} />}>
                  <Meta title={get(movie, 'Title', '')} description="" />
                </Card>
              </Col>
              ))
            }
        </Row>
      </div>
    )
  }
}
export default withSidebarLayout(inject(['movieStore'])(Movies), { title: 'Movies' });