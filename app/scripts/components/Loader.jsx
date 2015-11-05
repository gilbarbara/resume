import React from 'react';

class Loader extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    render () {
        return (
            <div className="loader">
                <svg className="loader__svg">
                    <circle className="loader__circle"
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            strokeWidth="2" />
                </svg>
            </div>
        );
    }
}

export default Loader;
