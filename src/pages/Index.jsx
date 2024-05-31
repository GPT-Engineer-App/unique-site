import { Container, Box, Heading, Text, VStack, HStack, IconButton, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" bg="teal.500" color="white" py={4} textAlign="center">
        <Heading as="h1" size="xl">
          My Website
        </Heading>
      </Box>

      {/* Main Content */}
      <Box as="main" py={8}>
        <VStack spacing={8}>
          <Heading as="h2" size="lg">
            Welcome to My Website
          </Heading>
          <Text fontSize="md" textAlign="center">
            This is a simple website built with React and Chakra UI. Below is an example of an image and some social media icons.
          </Text>
          <Image src="https://images.unsplash.com/photo-1606240724602-5b21f896eae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE3MTY1NDUwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Beautiful Landscape" borderRadius="md" boxShadow="md" />
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={4} textAlign="center">
        <VStack spacing={4}>
          <Text>Connect with me on social media</Text>
          <HStack spacing={4}>
            <Link href="https://github.com" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" variant="ghost" color="white" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" variant="ghost" color="white" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" color="white" />
            </Link>
          </HStack>
          <Text fontSize="sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
