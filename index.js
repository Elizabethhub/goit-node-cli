import { program } from "commander";
import * as contactService from "./db/contacts.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, ...data }) {
  switch (action) {
    case "list":
      const allContacts = await contactService.getAllContacts();
      return console.log(allContacts);
    case "get":
      const requiredContact = await contactService.getContactById(id);
      return console.log(requiredContact);
    case "add":
      const newContact = await contactService.addContact({ data });
      return console.log(newContact);
    case "remove":
      const removeContact = await contactService.removeContact(id);
      return console.log(removeContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
