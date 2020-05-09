import React from 'react';
import 'materialize-css';
import { Icon, SideNav, Button, SideNavItem } from 'react-materialize';

function MainNavBar() {
    return (
        <SideNav
            id="SideNav-10"
            options={{
                draggable: true
            }}
            trigger={<Button node="button"><span className="fal fa-bars"></span></Button>}
        >
            <SideNavItem
                user={{
                    background: 'https://placeimg.com/640/480/tech',
                    email: 'jdandturk@gmail.com',
                    image: 'static/media/react-materialize-logo.824c6ea3.svg',
                    name: 'John Doe'
                }}
                userView
            />
            <SideNavItem
                href="/logout"
                icon={<Icon>cloud</Icon>}
            >
                First Link With Icon
            </SideNavItem>
            <SideNavItem href="#!second">
                Second Link
            </SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>
                Subheader
            </SideNavItem>
            <SideNavItem
                href="#!third"
                waves
            >
                Third Link With Waves
            </SideNavItem>
        </SideNav>
    );
}

export default MainNavBar;