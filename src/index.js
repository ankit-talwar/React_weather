import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';


class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMessage: '' };


    // }
    state = { lat: null, errorMessage: '' };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            postion => this.setState({ lat: postion.coords.latitude }),
            err => this.setState({ errorMessage: 'user has denied the permission!' })
        );

    }
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error:{this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        else {
            return <Loading message='accept location request to continue furthur' />;
        }
    }
    render() {
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        )

    }
}

ReactDom.render(<App />, document.querySelector('#root'));
