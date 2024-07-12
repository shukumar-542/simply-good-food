"use client"
import React from 'react';
import loginPageImage from '../../assets/loginPageImage.jpg';
import { Button } from "@/components/ui/button"
import { signIn } from 'next-auth/react';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Link from 'next/link';

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }),
})
const LoginPage = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        const res = await signIn("credentials", {
            redirect: false,
            email: values.username,
            password: values.password,
        });

        if (res?.error) {
            console.error("Sign-in error:", res.error);
            // Handle error (e.g., show error message)
            // Example: setError(res.error.message);
        } else if (res?.ok) {

            // Redirect to homepage
            router.push("/");

            //  Show success message
            toast.success('Logged In Successfully');
        }

    }
    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/3hw428M/login-Page-Image.jpg)` }}>
            <div className="flex items-center justify-evenly h-full  px-4  bg-black bg-opacity-50">
                <div></div>
                <div></div>
                <div className="bg-gray-200 bg-opacity-90 p-8 rounded-md shadow-md w-full max-w-lg">
                    <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Sign in to your account</h1>
                    <p className='text-center text-gray-600 pb-5'>Please enter your email and password to continue</p>


                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-gray-700'>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Asadujjaman@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>


                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-gray-700'>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="*********" {...field} />
                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>


                                )}
                            />

                            <div className='flex justify-between items-center py-2'>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-600"
                                    >
                                        Remember Password
                                    </label>
                                </div>
                                <div >
                                    <p className='text-red-600'>Forgot Password?</p>
                                </div>
                            </div>
                            <div className='text-center'>
                                <Button type="submit">Submit</Button>
                            </div>
                        </form>
                    </Form>

                    <div>
                        <p className='text-center py-8 text-gray-500 '>Don&apos;t have any account? <Link href={'/register'}> <span className='text-yellow-500 font-semibold '>Sign up</span></Link>  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
