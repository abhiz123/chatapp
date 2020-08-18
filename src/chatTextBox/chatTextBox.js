import React from "react";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ChatTextBoxComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      chatText: "",
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.chatTextBoxContainer}>
        <TextField
          className={classes.chatTextBox}
          placeholder="Type your message..."
          id="chattextbox"
          onFocus={this.userClickedInput}
          onKeyUp={(e) => this.userTyping(e)}
        ></TextField>
        <Send onClick={this.submitMessage} className={classes.sendBtn}></Send>
      </div>
    );
  }

  submitMessage = () => {
    console.log("message submitted");
    if (this.messageValid(this.state.chatText)) {
      this.props.submitMessageFn(this.state.chatText);
      document.getElementById("chattextbox").value = "";
    }
  };

  userClickedInput = () => {
    console.log("user clicked input");
  };

  userTyping = (e) => {
    e.keyCode === 13
      ? this.submitMesage()
      : this.setState({ chatText: e.target.value });
  };
  messageValid = (txt) => txt && txt.replace(/\s/g, "").length;
}

export default withStyles(styles)(ChatTextBoxComponent);
