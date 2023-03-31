import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Image,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons';
import NAV_ITEMS, { NavItem } from './NavItems';
import { NavbarMenu } from './NavbarMenu';
import {
  FiSun,
  FiMoon,
} from 'react-icons/fi';
import { useRef } from 'react';

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { toggleColorMode } = useColorMode();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        // bg={'blue'}
        color={useColorModeValue('gray.600', 'white')}
        maxW={'100%'}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex justify={{ base: 'center', md: 'start' }} alignItems={'center'}
          flex={{ base: 1, md: 'auto' }}
        >
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width="30px"
            height="30px"
            mr={2}
          />
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.800', 'white')}
            minW={'fit-content'}
          >
            Desa Karanganyar
          </Text>
          <NavbarMenu />
        </Flex>

        <Stack
          flex={{ base: 1, md: 1 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={4}
        >
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            onClick={toggleColorMode}
            icon={
              useColorModeValue(
                <FiMoon />,
                <FiSun />
              )
            }
          />
          {/* <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button> */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};