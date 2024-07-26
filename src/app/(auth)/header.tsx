import Link from "next/link";
import Image from "next/image";

export default function Component({}) {
    return (
        <div className="w-full h-full p-4 flex flex-row justify-between bg-background items-center">
            <div>
                <Image src={"/zenith-bank.svg"} width={120} height={40} alt={"zenith bank"} />
            </div>
            <div></div>
        </div>
    );
}
