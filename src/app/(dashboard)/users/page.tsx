"use client";
import {columns, IUser} from "./columns";
import {DataGrid} from "@/components/ui/grid/data-grid";
import {Button, Loader} from "@/components";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {faker} from "@faker-js/faker";
import Link from "next/link";

async function getUsers(
    num = 10,
): Promise<IUser[]> {
    // Fetch data from your API here.
    return new Array(num).fill({
        id: faker.string.uuid(),
        date: faker.date.past(),
        name: faker.person.fullName(),
        gender: faker.person.gender(),
    });
}

export default function DemoPage() {
    const [object, setObject] = useState<IUser>({});
    const [objects, setObjects] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);
    const navigator = useRouter();
    const pathname = usePathname();


    const onRowClick = (obj: any) => {
        setObject(obj.original);
        navigator.push(`/users/detail/${obj?.original?.id}`)
    };


    const fetchData = async (status: string) => {
        setTimeout(async () => {
            const data = await getUsers(20, status);
            setObjects(data);
            setLoading(false);
        }, 3000);
    };
    useEffect(() => {
        setLoading(true);
        fetchData();
    }, []);

    return (
        <div className="w-full max-w-screen-2xl min-h-screen md:px-8 py-4">
            <div className="flex flex-row justify-between items-center w-full pb-8">
                <div className="flex flex-1 flex-col space-y-0.5">
                    <p className="text-2xl sm:text-3xl font-bold">
                        Users
                    </p>
                </div>
                <div className="flex flex-row space-x-2.5">
                    <Button asChild>
                        <Link href="/users/create">Create user</Link>
                    </Button>
                </div>
            </div>

            {loading ? (
                <Loader/>
            ) : (
                <>
                    <DataGrid columns={columns} data={objects} onRowClick={onRowClick}/>
                </>
            )}
        </div>
    );
}
