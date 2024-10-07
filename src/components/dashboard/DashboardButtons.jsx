import PropTypes from 'prop-types';

function DashboardButtons({ text }) {
    return (

        <>

            <div>
                <button className="bg-red-800 text-white px-5 h-9 rounded-sm">{ text }</button>
            </div>

        </>
    )
}

DashboardButtons.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

export default DashboardButtons
