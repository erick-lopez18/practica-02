import PropTypes from "prop-types";


function Banner(props) {
    console.log(props.title)
    return (
        <div className="App-banner">
            {props.title}
        </div>
    );
}

Banner.propTypes = {
    title: PropTypes.object,
};

export default Banner;
