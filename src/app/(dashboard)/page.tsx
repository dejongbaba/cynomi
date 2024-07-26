"use client";
import {columns, IUser} from "./columns";
import {DataGrid} from "@/components/ui/grid/data-grid";
import {Button, Loader} from "@/components";
import {useRouter} from "next/navigation";
import {faker} from "@faker-js/faker";
import Link from "next/link";
import {useQuery} from "@tanstack/react-query";
import {getUsers} from "@/services/users";

async function getFakeUsers(
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
    const navigator = useRouter();
    const {data, isLoading, error} = useQuery({queryKey: ['users'], queryFn: () => getUsers()})


    const onRowClick = (obj: Record<string, any>) => {
        navigator.push(`/detail/${obj?.original?.id}`)
    };


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
                        <Link href="/create">Create user</Link>
                    </Button>
                </div>
            </div>


            {error ? <div>Something Went wrong</div> : isLoading ? (
                <Loader/>
            ) : (
                <>
                    <DataGrid columns={columns} data={data || []} onRowClick={onRowClick}/>
                </>
            )}
        </div>
    );
}
