"use client";

import * as React from "react";
import {Button, ComboSelectField, DateField, Form, InputField, useForm, z, zodResolver,} from "@/forms";
import {Separator} from "@/components";
import {SubmitHandler} from "react-hook-form";

const formSchema = z.object({
    name: z.string({ required_error: "Please provide name" }),
    gender: z.string({ required_error: "Please select a gender" }),
    date: z.string({ required_error: "Please provide the date" }),
});
type ValuesType = z.infer<typeof formSchema>;

const gender = [{name:'Male',id:'m'},{name:'Female',id:'f'}]
export default function Component({
                                      title = "Setup your account",
                                      description = "We're almost done. Finish up by providing the information below.",
                                  }: {
    title?: string;
    description?: string;
}): React.ReactNode {
    const form = useForm<ValuesType>({
        resolver: zodResolver(formSchema),
        mode: "all",
        defaultValues: {
            name: "NG",
            gender: "NG",
            date: "",
        },
    });


    const onSubmit: SubmitHandler<ValuesType> = (values) => {
        setTimeout(() => console.log(values), 3000);
    };

    return (
        <div className="space-y-8">
            <Form {...form}>
                <form className="w-full max-w-lg mx-auto py-8 lg:px-0 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>

                    <div className="space-y-1 pb-8">
                        <p className="text-2xl sm:text-3xl font-bold">Add User</p>
                    </div>
                    <InputField
                        control={form.control}
                        name={"name"}
                        placeholder={"Required"}
                        label={" Name"}
                    />

                    <ComboSelectField
                        control={form.control}
                        name={"gender"}
                        // description={"Select your country"}
                        placeholder={"Required"}
                        label={"Gender"}
                        labelProp={"name"}
                        valueProp={"id"}
                        options={gender}
                    />

                    <DateField  name='date' label='Date' />

                    <div className="pt-8">
                        <Button
                            size={"lg"}
                            className="w-auto sm:w-auto"
                            disabled={!form.formState.isValid || form.formState.isSubmitting}
                            type={"submit"}>
                            {form.formState.isSubmitting ? "Please wait..." : "Create User"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
