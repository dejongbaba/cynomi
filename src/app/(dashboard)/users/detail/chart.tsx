"use client";

import * as React from "react";
import {Button, ComboSelectField, DateField, Form, InputField, useForm, z, zodResolver,} from "@/forms";
import {SubmitHandler} from "react-hook-form";

const formSchema = z.object({
    name: z.string({ required_error: "Please provide name" }),
    gender: z.string({ required_error: "Please select a gender" }),
    date: z.string({ required_error: "Please provide the date" }),
});
type ValuesType = z.infer<typeof formSchema>;

export default function Component(): React.ReactNode {


    return (
        <div className="space-y-8">
                <div className="w-full max-w-lg mx-auto py-8 lg:px-0 space-y-6" >
                    <div className="space-y-1 pb-8">
                        <p className="text-2xl sm:text-3xl font-bold">View  Chart</p>
                    </div>
                    <div>

                    </div>
                </div>
        </div>
    );
}
