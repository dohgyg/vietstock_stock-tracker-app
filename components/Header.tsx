import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import UserDropdown from "@/components/UserDropdown";


export const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href={"/"} className="flex items-center space-x-3">
                    <Image src={"/assets/icons/logo.svg"} alt={"VietStock logo"} width={140} height={32}
                           className="h-8 w-auto cursor-pointer">
                    </Image>
                    <p className="text-2xl font-bold text-white hover:text-yellow-500">Viet Stock</p>
                </Link>
                <nav className="hidden sm:block">
                    <NavItems/>
                </nav>
                <UserDropdown/>
            </div>
        </header>
    )
}
