import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
    return ( 
    <Card className="flex items-center justify-between p-[1.875rem]">
        <Button size={"icon"} variant={"outline"} ><MenuIcon></MenuIcon></Button>
        <h1 className="font-semibold text-lg"><span className="text-primary">Unk</span> Store</h1>
        <Button size={"icon"} variant={"outline"} ><ShoppingCartIcon></ShoppingCartIcon></Button>

    </Card> );
}
 
export default Header;