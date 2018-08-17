import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: '',
            placeholder: 'Veuillez saisir un film...',
            intervalBeforeRequest: 1200,
            lockRequestCall: false
        }
    }
    handleValue(e){
        this.setState({
            searchText: e.target.value
        })
        if (!this.state.lockRequestCall) {
            this.setState({ lockRequestCall: true })
            setTimeout(function () { this.searchAMovie(this.state.searchText) }.bind(this), this.state.intervalBeforeRequest);
        }
    }
    searchAMovie(){
        this.setState({ lockRequestCall: false });
        this.props.callback(this.state.searchText)
    }
    render () {
        return (
            <div className="row">
                <div className="col-md-8 input-group p-3">
                    <input className="form-control input-lg" onChange={this.handleValue.bind(this)} placeholder={this.state.placeholder} />
                    <span className="input-group-append">
                        <button onClick={this.searchAMovie.bind(this)}>Go</button>
                    </span>
                </div>
                
            </div>
        )
    }
}

export default SearchBar