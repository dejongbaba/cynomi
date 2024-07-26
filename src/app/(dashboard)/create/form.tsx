"use client";
import * as React from "react";
import {Button, ComboSelectField, Form, InputField, useForm, z, zodResolver,} from "@/forms";
import {SubmitHandler} from "react-hook-form";
import {createUser} from "@/services/users";
import {useMutation} from "@tanstack/react-query";
import {useToast} from "@/components/ui/use-toast";

const formSchema = z.object({
    name: z.string({required_error: "Please provide name"}),
    gender: z.string({required_error: "Please select a gender"}),
    email: z.string({required_error: "Please provide the date"}),
    sleepTimeDuration: z.string({required_error: "Please provide the sleep time duration"}),
});
type ValuesType = z.infer<typeof formSchema>;

const gender = [{name: 'Male', id: 'm'}, {name: 'Female', id: 'f'}]
export default function Component(): React.ReactNode {

    // const toast = useToast();
    const {mutate} = useMutation({
        mutationFn: (variables) => createUser(variables),
        onSuccess: (res) => {
            // toast({
            //     title: "Success",
            //     description: "New user created!",
            //     className: "bg-green-500",
            // })
        },
        onError: () => {
            // toast({
            //     variant: "destructive",
            //     title: "Error",
            //     description: "Unable to create new user at the moment, Please try again"
            // })
        }
    })


    const form = useForm<ValuesType>({
        resolver: zodResolver(formSchema),
        mode: "all",
        defaultValues: {
            name: "",
            gender: "",
            email: "",
            sleepTimeDuration: "",
        },
    });


    const onSubmit: SubmitHandler<ValuesType> = (values) => {
        mutate(values);
    };

    return (
        <Form {...form}>
            <form className="w-full max-w-lg mx-auto py-8 lg:px-0 space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                <div>
                    <div className="space-y-1 pb-8">
                        <p className="text-2xl sm:text-3xl font-bold">Add User</p>
                    </div>
                    <InputField
                        control={form.control}
                        name={"name"}
                        placeholder={"Required"}
                        label={" Name"}
                    />
                    <InputField
                        control={form.control}
                        name={"email"}
                        placeholder={"Required"}
                        label={" Email"}
                    />
                    <ComboSelectField
                        control={form.control}
                        name={"gender"}
                        placeholder={"Required"}
                        label={"Gender"}
                        labelProp={"name"}
                        valueProp={"id"}
                        options={gender}
                    />

                    <InputField
                        control={form.control}
                        name={"sleepTimeDuration"}
                        placeholder={"Required"}
                        label={" Sleep Time Duration"}
                    />

                    <div className="pt-8">
                        <Button
                            size={"lg"}
                            className="w-auto sm:w-auto"
                            disabled={!form.formState.isValid || form.formState.isSubmitting||}
                            type={"submit"}>
                            {form.formState.isSubmitting ? "Please wait..." : "Create User"}
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    );
}
