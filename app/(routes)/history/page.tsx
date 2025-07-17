import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return(
        <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6" >
        <BreadcrumbList>
        <BreadcrumbItem>
        <BreadcrumbLink asChild>
        <Link href="/">Inicio</Link>
        </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
        <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
        <BreadcrumbLink asChild>
        <Link href="/history">Pedidos</Link>
        </BreadcrumbLink>
        </BreadcrumbItem>
        </BreadcrumbList>
        </Breadcrumb>    
        <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
                Pedidos
            </h1>
        </div>
    </div>
</section>
    )
}