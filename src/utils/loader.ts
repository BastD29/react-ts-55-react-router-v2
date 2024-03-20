import { LoaderFunctionArgs } from "react-router-dom";
import { ContactType, ContactsType } from "../models/Contact";
import { getContact, getContacts } from "./contact";

async function rootLoader(): Promise<ContactsType> {
  const contacts = await getContacts();
  return { contacts };
}

async function contactLoader(
  args: LoaderFunctionArgs<any>
): Promise<ContactType | undefined> {
  // Ensure 'contactId' is a string to match your expected usage
  const contactId = args.params.contactId as string;
  if (!contactId) return undefined; // Handle the case where 'contactId' is not provided

  const contact: ContactType | null = await getContact(contactId);
  if (contact) return contact;
}

export { rootLoader, contactLoader };
