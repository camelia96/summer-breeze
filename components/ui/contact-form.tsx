"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./button";
import { toast } from "sonner";
export default function ContactForm() {
    return (
        <FieldSet>
            <FieldGroup className="md:w-11/12">
                <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input placeholder="Enter your name" />
                </Field>


                <Field>
                    <FieldLabel>Surname</FieldLabel>
                    <Input placeholder="Enter your surname" />
                </Field>


                <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input placeholder="Enter your email" />
                </Field>


                <Field>
                    <FieldLabel>Message</FieldLabel>
                    <Textarea placeholder="Enter your message" />
                </Field>

                <Field className="text-center md:text-start">
                    <Button aria-label="Submit contact form" type="submit" onClick={() => toast.success("Success! You successfully pressed the Submit button")}>Submit</Button>
                </Field>
            </FieldGroup>
        </FieldSet>
    )
}