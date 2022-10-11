import React from 'react'
import { connect } from 'react-redux';

function Subscribe({subscribe}) {
  return (
    <div></div>
  )
}

const mapStateToProps = (state) => {
  return {
    subscribe: state.dataText.dataJson.home.subscribe,
  };
};

export default connect(mapStateToProps)(Subscribe);