import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

type ColumnProps = {
    title: string;
    links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
    <div className="footer_column">
        <h4 className="font-semibold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
            {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
        </ul>
    </div>
);

const Footer = () => (
    <section className="flexStart footer">
        

        <div className="flexBetween footer_copyright">
            <p>@ 2023 Puninar. All rights reserved</p>
            <p className="text-gray">
                <span className="text-black font-semibold">@agungku90</span> 
            </p>
        </div>
    </section>
);

export default Footer;
