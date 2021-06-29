import React from "react";
import Footer from "./footer";
import propTypes from "prop-types";

export default class Layout extends React.Component {
    render() {
        return(
            <>
                <main>
                    {this.props.children}
                    {this.props.isFooter ? <Footer /> : <div></div>}
                </main>
                
            </>
        )
    }
}

Layout.propTypes = {
    isFooter: propTypes.bool
}

Layout.defaultProps = {
    isFooter: true
}

