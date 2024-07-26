"use client"

import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis} from "recharts"
import {useQuery} from "@tanstack/react-query";
import {getUserChartById} from "@/services/users";
import {Loader} from "@/components";


function Component({params}: { params: { email: string } }) {
    const id = params.email;
    const {data, isLoading, error} = useQuery({queryKey: ['chart', id], queryFn: () => getUserChartById(id)});

    // TODO data should fit into bar chart array structure
    const demo = [
        {
            name: "Jan",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Feb",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Mar",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Apr",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "May",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Jun",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Jul",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Aug",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Sep",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Oct",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Nov",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
        {
            name: "Dec",
            total: Math.floor(Math.random() * 5000) + 1000,
        },
    ]

    if (error) {
        return <div>
            Something went wrong
        </div>
    }

    if (isLoading) {
        return <Loader/>
    }
    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={demo}>
                    <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Bar
                        dataKey="total"
                        fill="currentColor"
                        radius={[4, 4, 0, 0]}
                        className="fill-primary"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>

    )
}

export default Component;
