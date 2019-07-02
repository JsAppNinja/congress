import React, { Component } from 'react';
import DonorCTA from 'components/DonorCTA';

type Props = {
  model: string;
};

class MainView extends Component<Props> {
  render() {
    return (
      <div className="MainView">
        <DonorCTA url="" />
      </div>
    );
  }
}

export default MainView;
