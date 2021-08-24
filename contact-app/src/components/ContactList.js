import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="center main">
      <h2>
        Lista de Contatos
        <Link to="/add">
          <button className="ui positive basic button right"><i class="user plus icon" style={{color: "green", marginLeft: "20px" }}></i>Adicionar Contato</button>
        </Link>
      </h2>
      <div className="ui small middle aligned celled selection list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
