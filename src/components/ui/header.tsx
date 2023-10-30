'use client'
import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "./avatar";

const Header = () => {
    const {status, data} = useSession();

    const handleLoginClick = async () => {

        await signIn()

    }

    const handleLogOutClick = async () => {

        await signOut()

    }

    return ( 
    <Card className="flex items-center justify-between p-[1.875rem]">
        <Sheet>
            <SheetTrigger asChild>
                <Button size={"icon"} variant={"outline"} ><MenuIcon></MenuIcon></Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>
                {status == 'authenticated' && data?.user &&(
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarFallback>
                                {data.user.name?.[0].toUpperCase()}
                            </AvatarFallback>
                            
                            {data.user.image && <AvatarImage className="border-2 h-14 w-14  border-violet-900 rounded-full" src={data.user.image}></AvatarImage>} 
                            
                        </Avatar>
                        <p>{data.user.name}</p>
                    </div>
                )}
                <div className="flex flex-col gap-2 mt-2">
                    {status == 'unauthenticated' && (
                    <Button onClick={handleLoginClick} className="w-full justify-start gap-2 hover:bg-primary" variant={"outline"}><LogInIcon size={16}/>Fazer Login</Button>
                    )}
                    {status == 'authenticated' && (
                         <Button onClick={handleLogOutClick} className="w-full justify-start gap-2 hover:bg-red-500" variant={"outline"}><LogOutIcon size={16}/>Fazer Logout</Button>
                    )}
                    <Button className="w-full justify-start gap-2" variant={"outline"}><HomeIcon size={16}/>Inicio</Button>
                    <Button className="w-full justify-start gap-2" variant={"outline"}><PercentIcon size={16}/>Ofertas</Button>
                    <Button className="w-full justify-start gap-2" variant={"outline"}><ListOrderedIcon size={16}/>Catálogo</Button>
                </div>
            </SheetContent>
        </Sheet>
        <h1 className="font-semibold text-lg"><span className="text-primary">Unk</span> Store</h1>
        <Button size={"icon"} variant={"outline"} ><ShoppingCartIcon></ShoppingCartIcon></Button>
    </Card> );
}
 
export default Header;