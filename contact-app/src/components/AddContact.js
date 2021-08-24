import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Adicionar Contato</h2>
        <form className="ui small form" onSubmit={this.add}>
          <div className="field">
            <label>Nome</label>
            <input
              type="text"
              name="name"
              placeholder="seu nome"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="seu email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui positive basic button"><i class="user plus icon" style={{color: "green", marginLeft: "10px" }}></i></button>
        </form>
      </div>
    );
  }
}

export default AddContact;
