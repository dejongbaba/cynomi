"use client";

import * as React from "react";
import { Button, CheckboxField, Form, InputField, useForm, WizardPageProps, z, zodResolver } from "@/forms";
import { SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

const formSchema = z.object({
    username: z.string().email({
        message: "Please provide a valid username",
    }),
    password: z.string().min(10, {
        message: "Please provide the combination of your pin and token",
    }),
});
type ValuesType = z.infer<typeof formSchema>;

export default function Component({ data, onChange }: WizardPageProps): React.ReactNode {
    const form = useForm<ValuesType>({
        resolver: zodResolver(formSchema),
        mode: "all",
        defaultValues: data,
    });

    const onSubmit: SubmitHandler<ValuesType> = (values) => {
        onChange?.("otp", values);
    };

    return (
        <div className="max-w-lg mx-auto py-8 space-y-8">
            <div className="mb-12 -ml-2">
                <Image src={"/zenith-bank.svg"} width={48} height={48} alt={"rtgs-zenith-logo"} />
            </div>
            <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold">Sign in to your account</p>
                {/*<p>*/}
                {/*    To continue, please enter your username and password */}
                {/*    <Link*/}
                {/*        href=""*/}
                {/*        onClick={() => onChange?.("phone", { password: "", username: "" })}*/}
                {/*        className="hover:underline font-semibold text-primary">*/}
                {/*        phone number*/}
                {/*    </Link>{" "}*/}
                {/*    instead.*/}
                {/*</p>*/}
            </div>
            {/*<div className="space-y-4 py-4">*/}
            {/*    <Button className="w-full" variant="outline">*/}
            {/*        Sign in with Google*/}
            {/*    </Button>*/}
            {/*    <Button className="w-full" variant="outline">*/}
            {/*        Sign in with Apple*/}
            {/*    </Button>*/}
            {/*</div>*/}
            {/*<Separator />*/}
            <Form {...form}>
                <form className="w-full lg:px-0 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <InputField
                        // control={form.control}
                        name={"username"}
                        type={"text"}
                        // description={"What are the controls you think you will need"}
                        placeholder={"e.g Adedeji"}
                        label={"username"}
                    />
                    <InputField
                        // control={form.control}
                        name={"password"}
                        type={"password"}
                        // description={"A secure and well setup password"}
                        placeholder={"Password"}
                        label={"Password"}
                    />
                    {/*<div className="py-4 grid grid-cols-1 gap-4 md:grid-cols-2">*/}
                    {/*    <CheckboxField*/}
                    {/*        control={form.control}*/}
                    {/*        name={"remember"}*/}
                    {/*        // description={"A secure and well setup password"}*/}
                    {/*        label={"Stay signed in for next 2 weeks"}*/}
                    {/*    />*/}
                    {/*    <Link href="/reset" className="text-right text-sm hover:underline font-semibold text-primary">*/}
                    {/*        Forgot Password?*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="pt-4">
                        <Button
                            size={"lg"}
                            className="w-full"
                            disabled={!form.formState.isValid || form.formState.isSubmitting}
                            type={"submit"}>
                            {form.formState.isSubmitting ? "Please wait..." : "Sign in"}
                        </Button>
                    </div>
                    {/* <div className="flex flex-col space-y-4 justify-center items-center">
                        <p className="text-center text-xs text-muted-foreground">
                            By signing in, you acknowledge that you agree with our{" "}
                            <Link
                                className="text-primary underline"
                                href={"https://sendbox.co/legal/terms"}
                                target={"_blank"}>
                                terms and conditions
                            </Link>
                            , and that all information you will provide is correct and accurate.
                        </p>
                        <p className="text-sm text-center">
                            Dont have an account?{" "}
                            <Link href="/signup" className="hover:underline font-semibold text-primary">
                                Create your account
                            </Link>
                        </p>
                    </div> */}
                </form>
            </Form>
        </div>
    );
}
