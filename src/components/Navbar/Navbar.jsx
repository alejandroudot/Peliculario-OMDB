import SearchInput from "../SearchInput";
import { useSelector } from "react-redux";
import useLogin from "../../hooks/useLogin";
import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
// const Links = ["Dashboard", "Projects", "Team"];
import navStyles from "./navbar.module.css";

export default function Navbar() {
  const params = useLogin();
  const { handleLogout } = params;
  const user = useSelector((state) => state.userLogged);

  return (
    <div className={navStyles.mobileNav}>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box ml={6}>
            <Link to="/" className="navLink">
              <img
                className="omdb-logo"
                src="https://cdn-icons-png.flaticon.com/512/3220/3220482.png"
                alt="logo"
              />
            </Link>
          </Box>
          <SearchInput />
          <Flex alignItems={"center"}>
            <Box pr={10}>
              <ColorModeSwitcher />
            </Box>

            <Menu>
              {user.id ? (
                <MenuButton
                  as={Button}
                  height="40px"
                  width="200px"
                  variant={"solid"}
                  colorScheme={"yellow"}
                  size={"sm"}
                  mr={4}
                  rightIcon={<TriangleDownIcon />}
                >
                  {user.name}
                </MenuButton>
              ) : (
                <Button
                  height="40px"
                  width="100px"
                  as={Button}
                  variant={"solid"}
                  colorScheme={"yellow"}
                  size={"sm"}
                  mr={4}
                >
                  <Link to="/signin">Sign In</Link>
                </Button>
              )}

              <MenuList>
                <MenuItem>
                  <Link to="/profile">My Profile</Link>
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </div>
  );
}
