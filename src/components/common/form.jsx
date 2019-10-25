import Joi from "joi-browser";
import _ from "lodash";
import React, { PureComponent } from "react";
import Input from "./input";
class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { data: {}, errors: {} };
    this.onMouseEnter = this.onMouseEnter.bind(this);
  }

  onMouseEnter(event) {
    let values = { ...this.state.data };
    const { disabled } = this.state;
    if (_.isEmpty(values)) {
      const { childNodes } = event.currentTarget;
      const nodes = [...childNodes];
      const input = nodes.find(el => el.name !== undefined);
      let data = { ...disabled };
      data[input.name] = false;
      this.setState({ disabled: data });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
    const state = { ...this.state.data };
    const data = _.chain(state)
      .mapValues(val => (val = ""))
      .value();
    this.setState({ data });
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.config[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = {
      abortEarly: false
    };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
      if (item.path.length === 0) {
        item.context.peers.forEach(el => {
          errors[el] = item.message;
        });
      }
    }
    return errors;
  };

  renderInput = (name, label, desc, type = "text") => {
    const { errors, data, disabled } = this.state;
    return (
      <Input
        className={
          (disabled[name] ? "disabled" : "", errors[name] ? "error" : "")
        }
        disabled={disabled[name] ? true : false}
        label={label}
        name={name}
        desc={desc}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
        onMouseEnter={this.onMouseEnter}
        error={errors[name]}
      />
    );
  };

  renderButton = label => {
    return <button className="ui blue">{label}</button>;
  };
}

export default Form;
