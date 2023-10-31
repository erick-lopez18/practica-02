import PropTypes from "prop-types";

function Banner(props) {
    return ( 
        <div className="App-banner">
            {props.title}
        </div>
    );
}

export default Banner;

Banner.propTypes = {
    title: PropTypes.object,
};