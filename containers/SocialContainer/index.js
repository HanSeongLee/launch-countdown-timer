import React from "react";
import LinkItem from "../../components/LinkItem";
import FacebookIcon from '/public/icons/icon-facebook.svg';
import PinterestIcon from '/public/icons/icon-pinterest.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';

const socials = [
    {
        name: 'Facebook',
        icon: <FacebookIcon />,
        href: '#',
    },
    {
        name: 'Pinterest',
        icon: <PinterestIcon />,
        href: '#',
    },
    {
        name: 'Instagram',
        icon: <InstagramIcon />,
        href: '#',
    },
];

const SocialContainer = () => {
    return (
        <>
            {socials?.map(({icon, ...props}, index) => (
                <LinkItem {...props}>
                    {icon}
                </LinkItem>
            ))}
        </>
    );
};

export default SocialContainer;
