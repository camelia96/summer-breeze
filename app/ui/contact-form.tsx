"use client"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
export default function ContactForm() {
    return (
        <FieldSet className="md:w-10/12">
            <h2 id="contact-heading">Contact us</h2>
            <p className="text-xs italic text-[#3f3f3f]">*Disclaimer: This is not a working form. Its only purpose is to showcase the UI. You can still submit the form but will only get a success alert.</p>

            <FieldGroup >
                <div className="flex gap-6">
                <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input placeholder="Enter your name" />
                </Field>


                <Field>
                    <FieldLabel>Surname</FieldLabel>
                    <Input placeholder="Enter your surname" />
                </Field>
                </div>


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