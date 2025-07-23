import React, { useRef, useState } from 'react';
import TextInput from '../InputFields/TextInput';
import OrangeButton from "../Button/OrangeButton";

const UserDetails = () => {
  const name = useRef();
  const contact = useRef();
  const address = useRef();
  const [err, setErr] = useState(0);

  const handleProceed = () => {
    if (
      name.current?.value === "" ||
      name.current?.value == null ||
      name.current?.value.length < 3
    ) {
      setErr(1);
    } else if (contact.current?.value == null || contact.current?.value === "") {
      setErr(2);
    } else if (address.current?.value == null || address.current?.value === "") {
      setErr(3);
    } else {
      setErr(0); // no errors
      console.log("Name:", name.current.value);
      console.log("Contact:", contact.current.value);
      console.log("Address:", address.current.value);
 
    }
  };

  return (
    <div>
      <div>
        <TextInput
          label={"Name"}
          placeholder={"Enter a Name"}
          inputRef={name}
          err={err === 1}
        />

        <TextInput
          label={"contact"}
          placeholder={"Enter a Contact"}
          inputRef={contact}
          err={err === 2}
        />

        <TextInput
          label={"address"}
          placeholder={"Enter an address"}
          inputRef={address}
          err={err === 3}
        />

        <div className="flex justify-center">
          <OrangeButton title={"Proceed"} onClick={handleProceed} />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
