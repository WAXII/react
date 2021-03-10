import "./Profile.css";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { changeName } from "../../redux/actions/profileActions";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

class _Profile extends Component {
  static propTypes = {
    profileName: PropTypes.string.isRequired,
    changeName: PropTypes.func.isRequired,
  };
  state = {
    profileName: "",
  };
  setProfileName = (newName) => {
    this.props.changeName(this.state.profileName);
    this.setState({
      profileName: "",
    });
  };
  render() {
    return (
      <div className="profile">
        <h1>Hello from Profile</h1>
        <TextField
          value={this.state.profileName}
          label="Enter new nickname and press ENTER"
          onChange={(event) =>
            this.setState({
              profileName: event.target.value,
            })
          }
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              this.setProfileName(event.target.value);
            }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profileName: state.profile.profileName,
});

const Profile = compose(connect(mapStateToProps, { changeName }))(_Profile);

export { Profile };
