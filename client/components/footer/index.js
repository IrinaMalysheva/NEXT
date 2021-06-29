import React from "react";
import StyleFooter from "./footer_style";
import Link from "next/link";
import Image from "next/image";

class Footer extends React.Component {
    render() {
        return(
            <StyleFooter>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                <div>

                    <p></p>
                    <Link href="/1">Terms of Service</Link>
                    <Link href="/2">Corporate Use</Link>
                    <span>© Ascensio System SIA 2021. All rights reserved</span>
                </div>
            </StyleFooter>
        );
    }
}

export default Footer;