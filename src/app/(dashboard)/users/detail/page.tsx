"use client";
import {Loader} from "@/components";
import Chart from "./chart";
import {useState} from "react";

export default function DemoPage() {

    const [loading, setLoading] = useState(false);

    return (
        <div className="w-full max-w-screen-2xl min-h-screen md:px-8 py-4">

            {loading ? (
                <Loader/>
            ) : (
                <Chart/>
            )}
        </div>
    );
}
