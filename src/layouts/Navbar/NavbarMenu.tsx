import { Box, Button, Flex, HStack, IconButton, Link, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiChevronDown } from "react-icons/fi";
import NavbarDesktop from "./NavbarDesktop";
import NAV_ITEMS from "./NavItems";

export const NavbarMenu = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const ref = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const [maxRight, setMaxRight] = useState(false);
  const [maxLeft, setMaxLeft] = useState(true);

  const handleScrollRight = () => {
    if (ref.current) {
      ref.current.scrollTo({
        top: 0,
        left: scrollX + 200,
        behavior: 'smooth',
      });

      // Get max scroll position
      const maxScrollRight =
        ref.current.scrollWidth - ref.current.clientWidth;

      if (scrollX + 200 < maxScrollRight) {
        setScrollX(scrollX + 200);
      } else {
        setScrollX(maxScrollRight);
      }
    }
  };

  const handleScrollLeft = () => {
    if (ref.current && scrollX > 0) {
      ref.current.scrollTo({
        top: 0,
        left: scrollX - 200,
        behavior: 'smooth',
      });

      if (scrollX - 200 > 0) {
        setScrollX(scrollX - 200);
      } else {
        setScrollX(0);
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      const maxScrollRight =
        ref.current.scrollWidth - ref.current.clientWidth;

      if (scrollX >= maxScrollRight) {
        setMaxRight(true);
      } else {
        setMaxRight(false);
      }

      if (scrollX <= 0) {
        setMaxLeft(true);
      } else {
        setMaxLeft(false);
      }
    }
  }, [scrollX]);

  return (
    <>
      <IconButton
        onClick={handleScrollLeft}
        size="sm"
        aria-label="scroll to left"
        bg="transparent"
        icon={
          <FiArrowLeft />
        }
        ml={2}
        display={
          NAV_ITEMS.length > 12 ? 'flex' : 'none'
        }
      />

      <Flex
        display={{ base: 'none', md: 'flex' }}
        boxSizing={'border-box'}
        overflow={'auto'}
        ml={NAV_ITEMS.length > 12 ? 0 : 6}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        ref={ref}
      >
        <HStack
          direction={'row'}
          spacing={1}
          minW={'100%'}
          display={{ base: 'none', md: 'flex' }}
        >
          {NAV_ITEMS.map((navItem) => (
            <Flex key={navItem.label} minW={'fit-content'} align={'center'}>
              <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href ?? '#'}
                    fontSize={'sm'}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}>
                    {navItem.label}
                  </Link>
                </PopoverTrigger>

                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={'xl'}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={'xl'}
                    minW={'sm'}>
                    <Stack>
                      {navItem.children.map((child) => (
                        <NavbarDesktop key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
              {navItem.children && <FiChevronDown />}
            </Flex>
          ))}
        </HStack>
      </Flex>

      <IconButton
        onClick={handleScrollRight}
        size="sm"
        aria-label="scroll to top"
        bg="transparent"
        ml={NAV_ITEMS.length > 12 ? 0 : 2}
        icon={
          <FiArrowRight />
        }
        display={
          NAV_ITEMS.length > 12 ? 'flex' : 'none'
        }
      />
    </>
  );
}