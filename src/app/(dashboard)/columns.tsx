"use client";

import {ColumnDef} from "@tanstack/react-table";
import {DataTableColumnHeader, DataTableHeaderCheckbox, DataTableRowCheckbox,} from "@/components/ui/grid/elements";

export interface IUser {
    id: number;
    name: string;
    gender: string;
    date: Date;
}

export const columns: ColumnDef<IUser>[] = [
    {
        id: "select",
        header: ({table}) => <DataTableHeaderCheckbox table={table}/>,
        cell: ({row}) => <DataTableRowCheckbox row={row}/>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Name"/>
        ),
    },
    {
        accessorKey: "gender",
        header: ({column}) => (
            <DataTableColumnHeader column={column} title="Gender"/>
        ),
    },
    {
        accessorKey: "date",
        header: ({column}) => (
            <DataTableColumnHeader
                column={column}
                title="Date"
            />
        ),
        cell: ({row}) => {
            const date: number = row.getValue("date");
            const formattedDate = new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            }).format(date);
            const formattedTime = new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "numeric",
            }).format(date);

            return (
                <div className=''>
                    <div className="text-base font-medium">{formattedDate}</div>
                    <div className="text-muted-foreground text-sm">{formattedTime}</div>
                </div>
            );
        },
    },
];
