import styled from "styled-components";
import color_social_icons from '../../public/color_social_icons.svg';

const StyleFooter = styled.footer`
    background: #f9f9f9;
    font-size: 14px;
    line-height: 160%;
    position: relative;
    width: 100%;
    
    a {
        color: #444;
        text-decoration: underline;
    }

    .ListSocLink {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        margin: 0;
        padding: 0;

        li {
            list-style-type: none;
            display: inline-block;
            width: 24px;
            height: 24px;
            margin: 0;
            padding-right: 16px;

            a {
                cursor: pointer;
                display: block;
                height: 24px;
                width: 24px;
            }

            label {
                background-repeat: no-repeat;
                background-image: url(${color_social_icons});
                cursor: pointer;
                filter: grayscale(1);
                height: 24px;
                width: 24px;

                &:hover {
                    filter: grayscale(0)
                }

                &.social_grey_fb {
                    background-position-x: 2px
                }

                &.social_grey_twi {
                    background-position-x: -38px
                }

                &.social_grey_in {
                    background-position-x: -78px
                }

                &.social_grey_tube {
                    background-position-x: -118px
                }

                &.social_grey_blog {
                    background-position-x: -198px
                }

                &.social_grey_medium {
                    background-position-x: -238px
                }

                &.social_grey_instagram {
                    background-position-x: -278px
                }

                &.social_grey_github {
                    background-position-x: -318px
                }

                &.social_grey_fosstodon {
                    background-position-x: -395px
                }
            }
        }
    }

    .partial-personal-footer {
        display: flex;
        justify-content: space-between;
        padding-top: 32px;
    }

    .personal-footer-links span {
        margin-right: 24px;
    }
    
    .personal-footer_w {
        background: #f9f9f9;
        margin: 0 auto;
        width: 1120px;
        padding: 0 0 40px;
    }
`;

export default StyleFooter;