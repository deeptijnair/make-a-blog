import {Link} from 'react-router-dom';
import { Menu, Button, Flex, Heading, Portal, HStack, Spacer, Icon} from '@chakra-ui/react';
import { GoChevronDown } from "react-icons/go";

const Navbar = () => {
    return ( 
 //       <nav className="navbar">
            <Flex as="nav"  alignItems="center" padding="15px" gap="5px" bg="teal.700" color={"white"}>
            <Heading>Logo</Heading>
 {/*          <div className="links"> */}
            <Spacer/>
            <HStack gap="30px">
               <Link to="/">Home</Link>
               <Menu.Root>
                    <Menu.Trigger asChild>  
                        <Link to="/">About 
                            <Icon paddingLeft={2} color="white" fontSize="20px" marginTop={-1}>
                                <GoChevronDown />   
                            </Icon>
                        </Link>
                    </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content backgroundColor={'teal.700'} paddingRight={15}>
                            <Menu.Item value="Overview"  color={'white'} padding={5}  >
                                <Link to="/">Overview</Link> 
                            </Menu.Item>
                            <Menu.Item value="Blogs"  color={'white'} padding={5}>
                                <Link to="/">Blogs</Link> 
                            </Menu.Item>
                            <Menu.Item value="FAQs"  color={'white'} padding={5}>
                                <Link to="/">FAQs </Link> 
                            </Menu.Item>
                            <Menu.Item value="Contact Us"  color={'white'} padding={5}>
                                <Link to="/">Contact Us</Link>   
                            </Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
               </Menu.Root>

               <Link to="/">Pricing</Link> 
               <Link to="/">Career</Link>
               <Button color= "white" backgroundColor= 'teal.500' borderRadius= '25px' padding={4}>
               <Link to="/create">Partner with Us!</Link></Button>
            </HStack>
            <Spacer/>
            <HStack>
               <Link to="/">Login</Link>
               <Button justifyContent={'end'} color= "white" backgroundColor= 'teal.500' borderRadius= '3px' padding={2}>
                    <Link to="/create">Sign up</Link>
               </Button>
            </HStack>
       {/*     </div> */} 
           </Flex>
 //       </nav>
     );
}
 
export default Navbar;


