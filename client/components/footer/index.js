import React from "react";
import StyleFooter from "./footer_style";
import Link from "next/link";
import Image from "next/image";
import color_social_icons from '../../public/color_social_icons.svg';
import fileloader from "file-loader";
import style from "../../styles/St.module.css";

class Footer extends React.Component {
    render() {
        return(
            <StyleFooter img={color_social_icons}>
                <div className="personal-footer_w">
                    <ul className={style.ListSocLink}>
                        <li>
                            <label className={style.social_grey_fb} title="Facebook" style={{ backgroundImage: `url(${color_social_icons})` }}>
                                <Link className="faceBook" href="https://www.facebook.com/pages/OnlyOffice/833032526736775" title="Facebook"> </Link>
                            </label>
                        </li>
                        <li>
                            <label title="Twitter" className={style.social_grey_twi}>
                                <Link className="twitter" href="https://twitter.com/ONLY_OFFICE" rel="nofollow"> </Link>
                            </label>
                        </li>
                        <li>
                            <label title="LinkedIn" className={style.social_grey_in}>
                                <Link className="linkedin" href="https://www.linkedin.com/groups/6726380/" rel="nofollow"> </Link>
                            </label>
                        </li>
                        <li>
                            <label title="YouTube" className={style.social_grey_tube}>
                                <Link className="youtube" href="https://www.youtube.com/user/onlyofficeTV" rel="nofollow"> </Link>
                            </label>
                        </li>
                        <li>
                            <label title="Blog" className={style.social_grey_blog}>
                                <Link className="blog" href="https://www.onlyoffice.com/blog"> </Link>
                            </label>
                        </li>
                        <li>
                            <label title="Medium" className={style.social_grey_medium}>
                                <Link className="medium" href="https://medium.com/onlyoffice"> </Link>
                            </label>
                        </li>
                        <li>
                            <label title="Instagram" className={style.social_grey_instagram}>
                                <Link className="instagram" href="https://www.instagram.com/the_onlyoffice/"> </Link>
                            </label>
                        </li>
                        <li>
                            <label title="GitHub" className={style.social_grey_github}>
                                <Link className="github" href="https://github.com/ONLYOFFICE/"> </Link>
                            </label>
                        </li>
                        <li>
                            <label title="Fosstodon" className={style.social_grey_fosstodon}>
                                <Link className="fosstodon" href="https://fosstodon.org/@ONLYOFFICE"> </Link>
                            </label>
                        </li>
                    </ul>
                    {/* <Image src="/color_social_icons.svg" alt="Vercel Logo" width={72} height={16} />
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
                    <div className="partial-personal-footer">
                        <div className="personal-footer-links">
                            <span>
                                <Link href="/Terms.aspx">Terms of Service</Link>
                            </span>
                            <span>
                                <Link href="https://www.onlyoffice.com">Corporate Use</Link>
                            </span>
                        </div>
                        <span>© Ascensio System SIA 2021. All rights reserved</span>
                    </div>
                </div>
            </StyleFooter>
        );
    }
}

export default Footer;