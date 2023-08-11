import React from "react";
import { Textarea, Spacer, Input, Button } from "@nextui-org/react";

export default function ContactForm() {
  const [names, setNames] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    
  const validationState = React.useMemo(() => {
    if (email === "") return undefined;
    return validateEmail(email) ? "valid" : "invalid";
  }, [email]);

  return (
    <>
      <div className=" w-[420px]">
        <div className="w-full flex flex-col max-w-[420px] h-20">
          <Input
            isRequired
            type="text"
            label="Name"
            value={names}
            onValueChange={setNames}
            classNames={{
              inputWrapper: ["shadow-lg", "bg-default-100/50"],
              input: [
                "placeholder:text-default-500/50 text-xs",
                "text-orange-950/50",
              ],
            }}
          />
        </div>
        <Spacer y={1} />
        <div className="w-full flex flex-col max-w-[420px] h-20">
          <Input
            value={email}
            isRequired
            type="email"
            label="Email"
            classNames={{
              inputWrapper: ["shadow-lg", "bg-default-100/50"],
              input: [
                "placeholder:text-default-500/50 text-xs",
                "text-orange-950/50",
              ],
            }}
            color={validationState === "invalid" ? "danger" : "default"}
            errorMessage={
              validationState === "invalid" && "Please enter a valid email"
            }
            validationState={validationState}
            onValueChange={setEmail}
          />
        </div>
        <Spacer y={1} />
        <div className="w-full flex flex-col max-w-[420px] h-20">
          <Input
            type="number"
            label="Phone"
            value={phone}
            onValueChange={setPhone}
            classNames={{
              inputWrapper: ["shadow-lg", "bg-default-100/50"],
              input: [
                "placeholder:text-default-500/50 text-xs",
                "text-orange-950/50",
              ],
            }}
          />
        </div>
        <Spacer y={1} />
        <div className="w-full flex flex-col max-w-[420px] h-auto">
          <Textarea
            variant="flat"
            label="Message"
            placeholder="Hi! What can I help you?"
            isRequired
            value={message}
            onValueChange={setMessage}
            classNames={{
              inputWrapper: ["shadow-lg", "bg-default-100/50"],
              input: [
                "placeholder:text-default-500/50 text-xs",
                "text-orange-950/50",
              ],
            }}
          />
        </div>
        <Spacer y={4} />
        <Button
          variant="solid"
          className=" bgColor-6 text-white shadow-xl text-xs"
        >
          Send Message
        </Button>
      </div>
    </>
  );
}
