import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import 'semantic-ui-css/semantic.min.css';


/*import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import 'semantic-ui-css/semantic.min.css';*/

class App extends Component {
    state= { videos: [], selectedVideo: null };

    componentDidMount() {
        this.handleSubmit("Aurora-borealis");
    }

    handleSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
            },
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    };

    handleSelectVideo = (video) => {
        this.setState({ selectedVideo: video });
    };

 render() {
      return (
          <div className='ui container'>
              <SearchBar onSubmit={this.handleSubmit} />
              <div className='ui grid stackable container'>
                  <div className='ui row'>
                      <div className='eleven wide column'>
                          <VideoDetail video={this.state.selectedVideo} />
                      </div>
                      <div className='five wide column'>
                          <VideoList
                            videos={this.state.videos}
                            onVideoSelect={this.handleSelectVideo}
                          />
                      </div>
                  </div>
              </div>
          </div>
      );
  }
}

export default App;
