"use client"
import loginPageImage from '../../assets/loginPageImage.jpg';
import { Button } from "@/components/ui/button"
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
import Link from 'next/link';
const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    contactNumber: z.string().min(5, {
        message: "Username must be at least 5 characters.",
    }),
    address: z.string().min(5, {
        message: "Username must be at least 5 characters.",
    }),
    password: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
        message: "password must be at least 6 characters.",
    }),
})

const RegisterPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email : "",
            contactNumber : "",
            password: "",

        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/5jpThSx/login-Page-Image.jpg)` }}>
            <div className="flex items-center justify-evenly h-full bg-black bg-opacity-50">
                <div></div>
                <div></div>
                <div className="bg-gray-200 bg-opacity-90 p-8 rounded-md shadow-md w-full max-w-lg">
                    <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Sign Up</h1>
                    <p className='text-center text-gray-600 pb-5'>Please enter your Personal Data</p>


                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-gray-700'>User Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Asadujjaman" {...field} />
                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>


                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
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
                                name="contactNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-gray-700'>Contact Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Asadujjaman@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />

                                    </FormItem>


                                )}
                            />
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-gray-700'>Permanent Address </FormLabel>
                                        <FormControl>
                                            <Input placeholder="R no 1 , Block B, CITY X, USA" {...field} />
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
                            <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-gray-700'>Confirm Password</FormLabel>
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
                        <Link href={'/login'}><p className='text-center py-8 text-gray-500 '>Don&apos;t have any account?  <span className='text-yellow-500 font-semibold '>Sign in</span>  </p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RegisterPage;