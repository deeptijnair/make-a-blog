import { Link } from "react-router-dom/";
import { Card, Heading, Image, SimpleGrid, Text, Box } from "@chakra-ui/react"



const BlogList = (props) => {
    const blogs = props.blogs;
 //   const title = props.title;
    return (
        <SimpleGrid spacing = {10} minChildWidth="200px" gap={8} padding={10} >                           
           
            {
                blogs.map((blog) => (
                    <Card.Root key={blog.id} >
                        <Box transition="transform 0.2s" bg="white.100"
                        _hover={{ transform: "scale(1.05)", boxShadow: "md", bg:"green.300"}}
                        cursor="pointer">
                            <Box>
                                        <Image src={blog.image} alt={blog.title} padding={10} />
                            </Box>
                            <Card.Body gap="2" paddingLeft="10" paddingRight="10" backgroundColor="white">
                                <Link to={`/blogs/${blog.id}`}>
                                    <Box>
                                        <Heading>{blog.title}</Heading>
                                            </Box>
                                </Link>
                                <Box>
                                    <Card.Description>{blog.body.split(' ').slice(0, 12).join(' ')}</Card.Description>
                                </Box>
                                <Box>
                                    <Text>Written by {blog.author}</Text>
                                            </Box>
                                    </Card.Body>
                            </Box>
                    </Card.Root>
                ))
            }
       </SimpleGrid>
    );
}

export default BlogList;