import React from "react";

import { intersperse } from "../../utility/array";

import "./ApiGate.less";

class ApiGate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      apiKey: ""
    };
  }

  submitApiKey() {
    const apiKey = this.state.apiKey;
    if (apiKey) {
      this.props.submitApiKey(apiKey);
    } else {
      alert("Please enter an API key");
    }
  }

  render() {
    if (this.props.hasApiKey) {
      return this.props.children;
    }

    const permissions = ["account", ...this.props.permissions];

    return (
      <div className="row api-gate">
        <div className="col col-12">
          <fieldset>
            <legend>API Key</legend>
            <div className="form-item">
              <div className="append">
                <input
                  type="text"
                  onChange={event =>
                    this.setState({
                      apiKey: event.target.value
                    })
                  }
                />
                <button
                  className="button outline"
                  onClick={() => this.submitApiKey()}
                >
                  Submit
                </button>
              </div>
            </div>
            <p>
              This tool requires an API key with the following permissions:{" "}
              {intersperse(permissions.map(o => <b key={o}>{o}</b>), ", ")}.
              <br />
              You can generate a unique API key for this tool by going to{" "}
              <a href="https://account.arena.net/applications" target="_blank">
                https://account.arena.net/applications
              </a>.
            </p>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default ApiGate;
